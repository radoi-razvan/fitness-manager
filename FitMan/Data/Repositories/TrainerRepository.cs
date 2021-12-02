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
    public class TrainerRepository : ITrainerRepository
    {
        private readonly ApplicationContext _context;
        private readonly IMapper _mapper;

        public TrainerRepository(ApplicationContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public void Add(TrainerDTO item)
        {
            var model = _mapper.Map<Trainer>(item);
            _context.Trainers.Add(model);
            _context.SaveChanges();
        }

        public bool CheckIfExists(long trainerId)
        {
            return _context.Trainers.Any(e => e.TrainerId == trainerId);
        }

        public TrainerDTO Get(long trainerId)
        {
            var model = _context.Trainers.Find(trainerId);
            var dto = _mapper.Map<TrainerDTO>(model);
            return dto;
        }

        public IEnumerable<TrainerDTO> GetAll(long courseId)
        {
            return _mapper.Map<IEnumerable<TrainerDTO>>(_context.Trainers.Where(t => t.CourseId == courseId));
        }

        public void Remove(long trainerId)
        {
            var trainer = _context.Trainers.Find(trainerId);
            var reviews = _context.Reviews.Where(r => r.TrainerId == trainerId);

            foreach (var review in reviews)
            {
                _context.Reviews.Remove(review);
            }
            _context.SaveChanges();

            _context.Trainers.Remove(trainer);
            _context.SaveChanges();
        }

        public bool Update(long courseId, long trainerId, TrainerDTO item)
        {
            try
            {
                Trainer trainer = _context.Trainers.Find(trainerId);
                trainer.Name = item.Name;
                trainer.ExperienceYears = item.ExperienceYears;
                trainer.DateOfBirth = item.DateOfBirth;
                trainer.CourseId = courseId;

                _context.SaveChanges();
                return true;
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CheckIfExists(trainerId))
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
