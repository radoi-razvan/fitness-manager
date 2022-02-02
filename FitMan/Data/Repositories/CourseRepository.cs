using AutoMapper;
using FitMan.Data.Repositories.Interfaces;
using FitMan.DTOs;
using FitMan.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FitMan.Data.Repositories
{
    public class CourseRepository : ICourseRepository
    {
        private readonly ApplicationContext _context;
        private readonly IMapper _mapper;

        public CourseRepository(ApplicationContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public void Add(CourseDTO item)
        {
            var model = _mapper.Map<Course>(item);
            _context.Courses.Add(model);
            _context.SaveChanges();
        }

        public bool CheckIfExists(long courseId)
        {
            return _context.Courses.Any(e => e.CourseId == courseId);
        }

        public CourseDTO Get(long courseId)
        {
            var model = _context.Courses.Find(courseId);
            var dto = _mapper.Map<CourseDTO>(model);
            return dto;
        }

        public long GetLastId(long gymId)
        {
            var courseId = _context.Courses.Where(c => c.GymId == gymId)
                .Where(course => course.CourseId == _context.Courses.Max(cs => cs.CourseId))
                .First().CourseId;
            return courseId;
        }

        public IEnumerable<CourseDTO> GetAll(long gymId)
        {
            return _mapper.Map<IEnumerable<CourseDTO>>(_context.Courses.Where(c => c.GymId == gymId));
        }

        public void Remove(long courseId)
        {
            var course = _context.Courses.Find(courseId);
            var courseReviews = _context.Reviews.Where(r => r.CourseId == courseId);
            var trainers = _context.Trainers.Where(t => t.CourseId == courseId);
            var trainersIds = trainers.Select(t => t.TrainerId).ToList();
            var trainersReviews = _context.Reviews.Where(r => trainersIds.Contains((long)r.TrainerId));
            var courseParticipants = _context.CourseParticipants.Where(cp => cp.CourseId == courseId);
            var courseExercises = _context.CourseExercises.Where(ce => ce.CourseId == courseId);
            var courseExercisesIds = courseExercises.Select(ce => ce.ExerciseId).ToList();
            var exercises = _context.Exercises.Where(e => courseExercisesIds.Contains(e.ExerciseId));

            foreach (var courseReview in courseReviews)
            {
                _context.Reviews.Remove(courseReview);
            }
            _context.SaveChanges();

            foreach (var trainersReview in trainersReviews)
            {
                _context.Reviews.Remove(trainersReview);
            }
            _context.SaveChanges();

            foreach (var trainer in trainers)
            {
                _context.Trainers.Remove(trainer);
            }
            _context.SaveChanges();

            foreach (var courseParticipant in courseParticipants)
            {
                _context.CourseParticipants.Remove(courseParticipant);
            }
            _context.SaveChanges();

            foreach (var courseExercise in courseExercises)
            {
                _context.CourseExercises.Remove(courseExercise);
            }
            _context.SaveChanges();

            foreach (var exercise in exercises)
            {
                _context.Exercises.Remove(exercise);
            }
            _context.SaveChanges();

            _context.Courses.Remove(course);
            _context.SaveChanges();
        }

        public bool Update(long id, CourseDTO item)
        {
            try
            {
                Course course = _context.Courses.Find(id);
                course.Name = item.Name;
                course.DefaultPrice = item.DefaultPrice;
                course.Description = item.Description;
                course.Schedule = item.Schedule;
                course.GymId = item.GymId;

                _context.SaveChanges();
                return true;
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CheckIfExists(id))
                {
                    return false;
                }
                else
                {
                    throw;
                }

            }
        }
    }
}
