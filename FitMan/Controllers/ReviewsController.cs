using FitMan.DTOs;
using FitMan.Services.ServiceInterfaces;
using FitMan.Utils;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FitMan.Controllers
{
    [Route("gyms")]
    [ApiController]
    public class ReviewsController : ControllerBase
    {
        private readonly IReviewService _reviewService;
        public ReviewsController(IReviewService reviewService)
        {
            _reviewService = reviewService;
        }

        // GET: gyms/5/reviews
        [HttpGet("{gymId}/reviews")]
        public ActionResult<IEnumerable<ReviewDTO>> GetGymReviews(long gymId)
        {
            return Ok(_reviewService.GetAll(gymId, "gymId"));
        }

        // GET: gyms/5/courses/5/reviews
        [HttpGet("{gymId}/courses/{courseId}/reviews")]
        public ActionResult<IEnumerable<ReviewDTO>> GetCourseReviews(long courseId)
        {
            return Ok(_reviewService.GetAll(courseId, "courseId"));
        }

        // GET: gyms/5/courses/5/trainers/5/reviews
        [HttpGet("{gymId}/courses/{courseId}/trainers/{trainerId}/reviews")]
        public ActionResult<IEnumerable<ReviewDTO>> GetTrainerReviews(long trainerId)
        {
            return Ok(_reviewService.GetAll(trainerId, "trainerId"));
        }

        // GET: gyms/5/reviews/5
        [HttpGet("{gymId}/reviews/{reviewId}")]
        // GET: gyms/5/courses/5/reviews/5
        [HttpGet("{gymId}/courses/{courseId}/reviews/{reviewId}")]
        // GET: gyms/5/courses/5/trainers/5/reviews/5
        [HttpGet("{gymId}/courses/{courseId}/trainers/{trainerId}/reviews/{reviewId}")]
        public ActionResult<ReviewDTO> GetReview(long reviewId)
        {
            var review = _reviewService.Get(reviewId);

            if (review == null)
            {
                return NotFound();
            }

            return Ok(review);
        }

        // PUT: gyms/5/reviews/5
        [HttpPut("{gymId}/reviews/{reviewId}")]
        // PUT: gyms/5/courses/5/reviews/5
        [HttpPut("{gymId}/courses/{courseId}/reviews/{reviewId}")]
        // PUT: gyms/5/courses/5/reviews/5
        [HttpPut("{gymId}/courses/{courseId}/trainers/{trainerId}/reviews/{reviewId}")]
        public IActionResult PutReview(long reviewId, [FromBody] ReviewDTO review)
        {
            ReviewDTO currentReview = new ReviewDTO()
            {
                Rating = review.Rating,
                Comment = review.Comment
            };

            if (!_reviewService.Update(reviewId, currentReview))
            {
                return NotFound();
            }

            return NoContent();
        }

        // POST: gyms/5/reviews
        [HttpPost("{gymId}/reviews")]
        public ActionResult<ReviewDTO> PostGymReview(long gymId, [FromBody] ReviewDTO review)
        {
            ReviewDTO currentReview = new ReviewDTO()
            {
                Rating = review.Rating,
                Comment = review.Comment,
                GymId = gymId
            };

            _reviewService.Add(currentReview);

            return NoContent();
        }

        // POST: gyms/5/courses/5/reviews
        [HttpPost("{gymId}/courses/{courseId}/reviews")]
        public ActionResult<ReviewDTO> PostCourseReview(long courseId, [FromBody] ReviewDTO review)
        {
            ReviewDTO currentReview = new ReviewDTO()
            {
                Rating = review.Rating,
                Comment = review.Comment,
                CourseId = courseId
            };

            _reviewService.Add(currentReview);

            return NoContent();
        }

        // POST: gyms/5/courses/5/trainers/5/reviews
        [HttpPost("{gymId}/courses/{courseId}/trainers/{trainerId}/reviews")]
        public ActionResult<ReviewDTO> PostTrainerReview(long trainerId, [FromBody] ReviewDTO review)
        {
            ReviewDTO currentReview = new ReviewDTO()
            {
                Rating = review.Rating,
                Comment = review.Comment,
                TrainerId = trainerId
            };

            _reviewService.Add(currentReview);

            return NoContent();
        }


        // DELETE: gyms/5/reviews/5
        [HttpDelete("{gymId}/reviews/{reviewId}")]
        // DELETE: gyms/5/courses/5/reviews/5
        [HttpDelete("{gymId}/courses/{courseId}/reviews/{reviewId}")]
        // DELETE: gyms/5/courses/5/reviews/5
        [HttpDelete("{gymId}/courses/{courseId}/trainers/{trainerId}/reviews/{reviewId}")]
        public IActionResult DeleteReview(long reviewId)
        {
            var review = _reviewService.Get(reviewId);
            if (review == null)
            {
                return NotFound();
            }

            _reviewService.Remove(reviewId);

            return NoContent();
        }
    }
}
