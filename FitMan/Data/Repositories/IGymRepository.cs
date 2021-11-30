using FitMan.Data;
using FitMan.DTOs;
using FitMan.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FitMan.Data.Repositories
{
    public interface IGymRepository : IRepository<GymDTO>
    {
        IEnumerable<GymDTO> GetAll();
    }
}
