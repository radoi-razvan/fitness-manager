using FitMan.Data.Repositories.Interfaces;
using FitMan.DTOs;
using FitMan.Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FitMan.Services
{
    public class TrainerService : ITrainerService
    {
        private readonly ITrainerRepository _trainerRepository;
        public TrainerService(ITrainerRepository trainerRepository)
        {
            _trainerRepository = trainerRepository;
        }

        public void Add(TrainerDTO item)
        {
            _trainerRepository.Add(item);
        }

        public bool CheckIfExists(long id)
        {
            return _trainerRepository.CheckIfExists(id);
        }

        public TrainerDTO Get(long id)
        {
            return _trainerRepository.Get(id);
        }

        public IEnumerable<TrainerDTO> GetAll(long courseId)
        {
            return _trainerRepository.GetAll(courseId);
        }

        public void Remove(long id)
        {
            _trainerRepository.Remove(id);
        }

        public bool Update(long firstId, long secondId, TrainerDTO item)
        {
            return _trainerRepository.Update(firstId, secondId, item);
        }
    }
}
