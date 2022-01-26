using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FitMan.DTOs;
using FitMan.Models;

namespace FitMan.Services.Interfaces
{
    public interface IGymService : IService<GymDTO>
    {
        IEnumerable<GymDTO> GetAll();
        IEnumerable<GymDTO> GetOwnedGyms(long ownerId);
    }
}
