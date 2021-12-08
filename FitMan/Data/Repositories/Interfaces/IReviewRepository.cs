using FitMan.DTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FitMan.Data.Repositories.Interfaces
{
    public interface IReviewRepository : IRepository<ReviewDTO>
    {
        IEnumerable<ReviewDTO> GetAll(long id, string idType);
        IEnumerable<ReviewDTO> GetAllReviews();
    }
}
