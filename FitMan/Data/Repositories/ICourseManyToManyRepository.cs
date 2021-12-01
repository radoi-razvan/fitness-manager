using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FitMan.Data.Repositories
{
    public interface ICourseManyToManyRepository<T>
    {
        public void Add(long id, T item);
        public bool CheckIfExists(long id);
        public T Get(long id);
        public IEnumerable<T> GetAll(long id);
        public void Remove(long firstId, long secondId);
        public bool Update(long id, T item);
    }
}
