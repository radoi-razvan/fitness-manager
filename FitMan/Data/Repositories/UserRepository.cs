using FitMan.Data;
using FitMan.Data.Repositories.RepositoriesInterfaces;
using FitMan.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


namespace FitMan.Data.Repositories
{
    public class UserRepository : IUserRepository
    {
        private readonly ApplicationContext _context;

        public UserRepository(ApplicationContext context)
        {
            _context = context;
        }

        public User Create(User user)
        {
            _context.Users.Add(user);
            user.UserId = _context.SaveChanges();

            return user;
        }

        public User GetByEmail(string email)
        {
            return _context.Users.FirstOrDefault(u => u.Email == email);
        }

        public User GetById(long userId)
        {
            return _context.Users.FirstOrDefault(u => u.UserId == userId);
        }
    }
}
