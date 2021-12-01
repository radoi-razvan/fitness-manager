using FitMan.Data.Repositories;
using FitMan.DTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FitMan.Services
{
    public class ExerciseService : IExerciseService
    {
        private readonly IExerciseRepository _exerciseRepository;
        public ExerciseService(IExerciseRepository exerciseRepository)
        {
            _exerciseRepository = exerciseRepository;
        }

        public void Add(long id, ExerciseDTO item)
        {
            _exerciseRepository.Add(id, item);
        }

        public bool CheckIfExists(long id)
        {
            return _exerciseRepository.CheckIfExists(id);
        }

        public ExerciseDTO Get(long id)
        {
            return _exerciseRepository.Get(id);
        }

        public IEnumerable<ExerciseDTO> GetAll(long id)
        {
            return _exerciseRepository.GetAll(id);
        }

        public void Remove(long firstId, long secondId)
        {
            _exerciseRepository.Remove(firstId, secondId);
        }

        public bool Update(long id, ExerciseDTO item)
        {
            return _exerciseRepository.Update(id, item);
        }
    }
}
