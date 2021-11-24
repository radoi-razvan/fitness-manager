using FitMan.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FitMan.Data
{
    public class GymRepository : IGymRepository
    {
        private readonly ApplicationContext _context;

        public GymRepository(ApplicationContext context)
        {
            _context = context;
        }

        public void Add(Gym item)
        {
            _context.Gyms.Add(item);
            _context.SaveChanges();
        }

        public bool CheckIfExists(long id)
        {
            return _context.Gyms.Any(e => e.GymId == id);
        }

        public Gym Get(long id)
        {
            return _context.Gyms.Find(id);
        }

        public IEnumerable<Gym> GetAll()
        {
            return _context.Gyms;
        }

        public void Remove(Gym item)
        {
            _context.Gyms.Remove(item);
            _context.SaveChanges();
        }

        public bool Update(long id, Gym item)
        {

            try
            {
                Gym gym = Get(id);
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
