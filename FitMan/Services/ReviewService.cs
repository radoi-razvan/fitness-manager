using FitMan.Data.Repositories.RepositoriesInterfaces;
using FitMan.DTOs;
using FitMan.Services.ServiceInterfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FitMan.Services
{
    public class ReviewService : IReviewService
    {
        private readonly IReviewRepository _reviewRepository;
        public ReviewService(IReviewRepository reviewRepository)
        {
            _reviewRepository = reviewRepository;
        }

        public void Add(ReviewDTO item)
        {
            _reviewRepository.Add(item);
        }

        public bool CheckIfExists(long id)
        {
            return _reviewRepository.CheckIfExists(id);
        }

        public ReviewDTO Get(long id)
        {
            return _reviewRepository.Get(id);
        }

        public IEnumerable<ReviewDTO> GetAll(long id, string idType)
        {
            return _reviewRepository.GetAll(id, idType);
        }

        public void Remove(long id)
        {
            _reviewRepository.Remove(id);
        }

        public bool Update(long id, ReviewDTO item)
        {
            return _reviewRepository.Update(id, item);
        }
    }
}
