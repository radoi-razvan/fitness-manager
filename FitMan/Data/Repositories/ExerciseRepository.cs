using AutoMapper;
using FitMan.DTOs;
using FitMan.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FitMan.Data.Repositories
{
    public class ExerciseRepository : IExerciseRepository
    {
        private readonly ApplicationContext _context;
        private readonly IMapper _mapper;

        public ExerciseRepository(ApplicationContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }
        public void Add(long courseId, ExerciseDTO item)
        {
            var model = _mapper.Map<Exercise>(item);
            _context.Exercises.Add(model);
            _context.SaveChanges();

            var courseExercise = new CourseExercise() { 
                CourseId = courseId,
                ExerciseId = _context.Exercises.Max(e => e.ExerciseId)
            };
            _context.CourseExercises.Add(courseExercise);
            _context.SaveChanges();
        }

        public bool CheckIfExists(long exerciseId)
        {
            return _context.Exercises.Any(e => e.ExerciseId == exerciseId);
        }

        public ExerciseDTO Get(long exerciseId)
        {
            var model = _context.Exercises.Find(exerciseId);
            var dto = _mapper.Map<ExerciseDTO>(model);
            return dto;
        }

        public IEnumerable<ExerciseDTO> GetAll(long courseId)
        {
            var exrcisesIds = _context.CourseExercises.Where(ce => ce.CourseId == courseId)
                                                      .Select(ce => ce.ExerciseId);
            return _mapper.Map<IEnumerable<ExerciseDTO>>(_context.Exercises.Where(e => exrcisesIds
                                                                           .Contains(e.ExerciseId)));
        }

        public void Remove(long courseId, long exerciseId)
        {
            var courseExercise = _context.CourseExercises.Where(ce =>
                                                            ce.CourseId == courseId
                                                            && ce.ExerciseId == exerciseId)
                                                          .First();
            _context.CourseExercises.Remove(courseExercise);
            _context.SaveChanges();

            var exercise = _context.Exercises.Find(exerciseId);
            _context.Exercises.Remove(exercise);
            _context.SaveChanges();
        }

        public bool Update(long exerciseId, ExerciseDTO item)
        {
            try
            {
                Exercise exercise = _context.Exercises.Find(exerciseId);
                exercise.Name = item.Name;
                exercise.Description = item.Description;

                _context.SaveChanges();
                return true;
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CheckIfExists(exerciseId))
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
