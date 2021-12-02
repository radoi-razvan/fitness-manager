using FitMan.DTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FitMan.Services.Interfaces
{
    public interface IExerciseService 
    {
        public void Add(long id, ExerciseDTO item);
        public bool CheckIfExists(long id);
        public ExerciseDTO Get(long id);
        public IEnumerable<ExerciseDTO> GetAll(long id);
        public void Remove(long firstId, long secondId);
        public bool Update(long id, ExerciseDTO item);
    }
}
