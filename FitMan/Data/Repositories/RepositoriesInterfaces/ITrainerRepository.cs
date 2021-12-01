using FitMan.DTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FitMan.Data.Repositories.RepositoriesInterfaces
{
    public interface ITrainerRepository 
    {
        void Add(TrainerDTO item);
        void Remove(long id);
        TrainerDTO Get(long id);
        bool CheckIfExists(long id);
        bool Update(long firstId, long secondId, TrainerDTO item);
        IEnumerable<TrainerDTO> GetAll(long courseId);
    }
}
