using FitMan.DTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FitMan.Services.Interfaces
{
    public interface IReviewService : IService<ReviewDTO>
    {
        IEnumerable<ReviewDTO> GetAll(long id, string idType);
    }
}
