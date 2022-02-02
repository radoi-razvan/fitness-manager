using FitMan.DTOs;
using FitMan.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace FitMan.Controllers
{
    [Route("gyms")]
    [ApiController]
    public class CoursesController : ControllerBase
    {
        private readonly ICourseService _courseService;
        public CoursesController(ICourseService courseService)
        {
            _courseService = courseService;
        }

        [HttpGet("{gymId}/courses")]
        public ActionResult<IEnumerable<CourseDTO>> GetCourses(long gymId)
        {
            return Ok(_courseService.GetAll(gymId));
        }

        // GET: gyms/5/courses/5
        [HttpGet("{gymId}/courses/{courseId}")]
        public ActionResult<CourseDTO> GetCourse(long courseId)
        {
            var course = _courseService.Get(courseId);

            if (course == null)
            {
                return NotFound();
            }

            return Ok(course);
        }


        // GET: gyms/5/courses/last
        [HttpGet("{gymId}/courses/last")]
        public ActionResult<long> GetLastCourseId(long gymId)
        {
            var courseId = _courseService.GetLastId(gymId);

            if (courseId == null)
            {
                return NotFound();
            }

            return Ok(courseId);
        }

        // PUT: gyms/5/courses/5
        [HttpPut("{gymId}/courses/{courseId}")]
        public IActionResult PutCourse(long gymId, long courseId, [FromBody] CourseDTO course)
        {
            CourseDTO currentCourse = new CourseDTO()
            {
                Name = course.Name,
                DefaultPrice = course.DefaultPrice,
                Description = course.Description,
                Schedule = course.Schedule,
                GymId = gymId
            };

            if (!_courseService.Update(courseId, currentCourse))
            {
                return NotFound();
            }

            return NoContent();
        }

        // POST: gyms/5/courses
        [HttpPost("{gymId}/courses")]
        public ActionResult<CourseDTO> PostCourse(long gymId, [FromBody] CourseDTO course)
        {
            CourseDTO currentCourse = new CourseDTO()
            {
                Name = course.Name,
                DefaultPrice = course.DefaultPrice,
                Description = course.Description,
                Schedule = course.Schedule,
                GymId = gymId
            };

            _courseService.Add(currentCourse);

            return CreatedAtAction("PostCourse", new { id = currentCourse.CourseId }, currentCourse);
        }

        // DELETE: gyms/5/courses/5
        [HttpDelete("{gymId}/courses/{courseId}")]
        public IActionResult DeleteCourse(long courseId)
        {
            var course = _courseService.Get(courseId);
            if (course == null)
            {
                return NotFound();
            }

            _courseService.Remove(courseId);

            return NoContent();
        }
    }
}
