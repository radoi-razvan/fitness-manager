using AutoMapper;
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
    public class ReviewRepository : IReviewRepository
    {
        private readonly ApplicationContext _context;
        private readonly IMapper _mapper;

        public ReviewRepository(ApplicationContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public void Add(ReviewDTO item)
        {
            var model = _mapper.Map<Review>(item);
            _context.Reviews.Add(model);
            _context.SaveChanges();
        }

        public bool CheckIfExists(long reviewId)
        {
            return _context.Reviews.Any(r => r.ReviewId == reviewId);
        }

        public ReviewDTO Get(long reviewId)
        {
            var model = _context.Reviews.Find(reviewId);
            var dto = _mapper.Map<ReviewDTO>(model);
            return dto;
        }

        public IEnumerable<ReviewDTO> GetAll(long id, string idType)
        {
            if (idType == "gymId")
            {
                return _mapper.Map<IEnumerable<ReviewDTO>>(_context.Reviews.Where(r => r.GymId == id));
            } else if (idType == "courseId")
            {
                return _mapper.Map<IEnumerable<ReviewDTO>>(_context.Reviews.Where(r => r.CourseId == id));
            }
            return _mapper.Map<IEnumerable<ReviewDTO>>(_context.Reviews.Where(r => r.TrainerId == id));
        }

        public void Remove(long id)
        {
            var review = _context.Reviews.Find(id);
            _context.Reviews.Remove(review);
            _context.SaveChanges();
        }

        public bool Update(long id, ReviewDTO item)
        {
            try
            {
                Review review = _context.Reviews.Find(id);
                review.Rating = item.Rating;
                review.Comment = item.Comment;

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
