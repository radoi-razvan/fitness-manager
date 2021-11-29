using FitMan.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FitMan.Repositories
{
    public interface IUserRepository
    {
        User Create(User user);
        User GetByEmail(string email);

        User GetById(long userId);
    }
}
