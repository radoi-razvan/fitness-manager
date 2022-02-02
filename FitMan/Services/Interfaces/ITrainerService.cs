using FitMan.DTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FitMan.Services.Interfaces
{
    public interface ITrainerService
    {
        void Add(TrainerDTO item);
        void Remove(long id);
        TrainerDTO Get(long id);
        long GetLastId(long courseId);
        bool CheckIfExists(long id);
        bool Update(long firstId, long secondId, TrainerDTO item);
        IEnumerable<TrainerDTO> GetAll(long courseId);
    }
}
