using AutoMapper;
using FitMan.Data;
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
    public class GymRepository : IGymRepository
    {
        private readonly ApplicationContext _context;
        private readonly IMapper _mapper;

        public GymRepository(ApplicationContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public void Add(GymDTO item)
        {
            var model = _mapper.Map<Gym>(item);
            _context.Gyms.Add(model);
            _context.SaveChanges();
        }

        public IEnumerable<GymDTO> GetOwnedGyms(long ownerId)
        {
            return _mapper.Map<IEnumerable<GymDTO>>(_context.Gyms.Where(g => g.OwnerId == ownerId));
        }

        public bool CheckIfExists(long id)
        {
            return _context.Gyms.Any(e => e.GymId == id);
        }

        public GymDTO Get(long id)
        {
            var model = _context.Gyms.Find(id);
            var dto = _mapper.Map<GymDTO>(model);
            return dto;
        }

        public IEnumerable<GymDTO> GetAll()
        {
            return _mapper.Map<IEnumerable<GymDTO>>(_context.Gyms);  
        }

        public void Remove(long gymId)
        {
            var gym = _context.Gyms.Find(gymId);
            var reviews = _context.Reviews.Where(r => r.GymId == gymId);
            var courses = _context.Courses.Where(c => c.GymId == gymId);
            var coursesIds = courses.Select(c => c.CourseId).ToList();
            var coursesReviews = _context.Reviews.Where(r => coursesIds.Contains((long)r.CourseId));
            var trainers = _context.Trainers.Where(t => coursesIds.Contains(t.CourseId));
            var trainersIds = trainers.Select(t => t.TrainerId).ToList();
            var trainersReviews = _context.Reviews.Where(r => trainersIds.Contains((long)r.TrainerId));
            var courseParticipants = _context.CourseParticipants.Where(cp => coursesIds.Contains(cp.CourseId));
            var courseExercises = _context.CourseExercises.Where(ce => coursesIds.Contains(ce.CourseId));
            var courseExercisesIds = courseExercises.Select(ce => ce.ExerciseId).ToList();
            var exercises = _context.Exercises.Where(e => courseExercisesIds.Contains(e.ExerciseId));

            foreach (var review in reviews)
            {
                _context.Reviews.Remove(review);
            }
            _context.SaveChanges();

            foreach (var courseReview in coursesReviews)
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

            foreach (var course in courses)
            {
                _context.Courses.Remove(course);
            }
            _context.SaveChanges();

            _context.Gyms.Remove(gym);
            _context.SaveChanges();
        }

        public bool Update(long id, GymDTO item)
        {

            try
            {
                Gym gym = _context.Gyms.Find(id);
                gym.Name = item.Name;
                gym.Address = item.Address;
                gym.Description = item.Description;

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
