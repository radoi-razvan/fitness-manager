using FitMan.DTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FitMan.Services.ServiceInterfaces
{
    public interface IReviewService : IService<ReviewDTO>
    {
        IEnumerable<ReviewDTO> GetAll(long id, string idType);
    }
}
