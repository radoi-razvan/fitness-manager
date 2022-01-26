using FitMan.Data;
using FitMan.DTOs;
using FitMan.Models;
using FitMan.Data.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FitMan.Services.Interfaces;
using FitMan.Data.Repositories.Interfaces;

namespace FitMan.Services
{
    public class GymService : IGymService
    {
        private readonly IGymRepository _gymRepository;
        public GymService(IGymRepository gymRepository)
        {
            _gymRepository = gymRepository;
        }

        public void Add(GymDTO item)
        {
            _gymRepository.Add(item);
        }

        public IEnumerable<GymDTO> GetOwnedGyms(long ownerId)
        {
            return _gymRepository.GetOwnedGyms(ownerId);
        }

        public bool CheckIfExists(long id)
        {
            return _gymRepository.CheckIfExists(id);
        }

        public GymDTO Get(long id)
        {
            return _gymRepository.Get(id);
        }

        public IEnumerable<GymDTO> GetAll()
        {
            return _gymRepository.GetAll();
        }

        public void Remove(long id)
        {
            _gymRepository.Remove(id);
        }

        public bool Update(long id, GymDTO item)
        {
            return _gymRepository.Update(id, item);
        }
    }
}
