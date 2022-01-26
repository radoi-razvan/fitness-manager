using FitMan.Data;
using FitMan.DTOs;
using FitMan.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FitMan.Data.Repositories.Interfaces
{
    public interface IGymRepository : IRepository<GymDTO>
    {
        IEnumerable<GymDTO> GetAll();
        IEnumerable<GymDTO> GetOwnedGyms(long ownerId);
    }
}
