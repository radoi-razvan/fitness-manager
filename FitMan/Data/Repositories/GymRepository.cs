using AutoMapper;
using FitMan.Data;
using FitMan.Data.Repositories.RepositoriesInterfaces;
using FitMan.DTOs;
using FitMan.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FitMan.Data.Repositories
{
    public class GymRepository : IGymRepository
    {
        private readonly ApplicationContext _context;
        private readonly IMapper _mapper;

        public GymRepository(ApplicationContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public void Add(GymDTO item)
        {
            var model = _mapper.Map<Gym>(item);
            _context.Gyms.Add(model);
            _context.SaveChanges();
        }

        public bool CheckIfExists(long id)
        {
            return _context.Gyms.Any(e => e.GymId == id);
        }

        public GymDTO Get(long id)
        {
            var model = _context.Gyms.Find(id);
            var dto = _mapper.Map<GymDTO>(model);
            return dto;
        }

        public IEnumerable<GymDTO> GetAll()
        {
            return _mapper.Map<IEnumerable<GymDTO>>(_context.Gyms);  
        }

        public void Remove(long gymId)
        {
            var gym = _context.Gyms.Find(gymId);
            _context.Gyms.Remove(gym);
            _context.SaveChanges();
        }

        public bool Update(long id, GymDTO item)
        {

            try
            {
                Gym gym = _context.Gyms.Find(id);
                gym.Name = item.Name;
                gym.Address = item.Address;
                gym.Description = item.Description;

               _context.SaveChanges();
                return true;
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CheckIfExists(id))
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
