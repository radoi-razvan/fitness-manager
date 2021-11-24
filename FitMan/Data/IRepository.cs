using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FitMan.Data
{
    public interface IRepository<T>
    {
        void Add(T item);
        void Remove(T item);
        T Get(long id);
        IEnumerable<T> GetAll();
        bool CheckIfExists(long id);
        bool Update(long id, T item);
    }
}
