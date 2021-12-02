using FitMan.DTOs;
using FitMan.Services.Interfaces;
using FitMan.Utils;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FitMan.Controllers
{
    [Route("gyms/{gymId}/courses/{courseId}/trainers")]
    [ApiController]
    public class TrainersController : ControllerBase
    {
        private readonly ITrainerService _trainerService;
        public TrainersController(ITrainerService trainerService)
        {
            _trainerService = trainerService;
        }

        [HttpGet]
        public ActionResult<IEnumerable<TrainerDTO>> GetTrainers(long courseId)
        {
            return Ok(_trainerService.GetAll(courseId));
        }

        // GET: gyms/5/courses/5/trainers/5
        [HttpGet("{trainerId}")]
        public ActionResult<TrainerDTO> GetTrainer(long trainerId)
        {
            var trainer = _trainerService.Get(trainerId);

            if (trainer == null)
            {
                return NotFound();
            }

            return Ok(trainer);
        }

        // PUT: gyms/5/courses/5/trainers/5
        [HttpPut("{trainerId}")]
        public IActionResult PutTrainer(long courseId, long trainerId, [FromBody] TrainerDTO trainer)
        {
            // DateTime must be "yyyy-MM-dd" string format, ex: "2018-12-22" or "12/22/2005" 
            TrainerDTO currentTrainer = new TrainerDTO()
            {
                Name = trainer.Name,
                ExperienceYears = trainer.ExperienceYears,
                DateOfBirth = trainer.DateOfBirth
            };

            if (!_trainerService.Update(courseId, trainerId, currentTrainer))
            {
                return NotFound();
            }

            return NoContent();
        }

        // POST: gyms/5/courses/5/trainers
        [HttpPost]
        public ActionResult<TrainerDTO> PostTrainer(long courseId, [FromBody] TrainerDTO trainer)
        {
            TrainerDTO currentTrainer = new TrainerDTO()
            {
                Name = trainer.Name,
                ExperienceYears = trainer.ExperienceYears,
                DateOfBirth = trainer.DateOfBirth,
                CourseId = courseId
            };

            _trainerService.Add(currentTrainer);

            return CreatedAtAction("PostTrainer", new { id = currentTrainer.TrainerId }, currentTrainer);
        }

        // DELETE: gyms/5/courses/5/trainers/5
        [HttpDelete("{trainerId}")]
        public IActionResult DeleteTrainer(long trainerId)
        {
            var trainer = _trainerService.Get(trainerId);
            if (trainer == null)
            {
                return NotFound();
            }

            _trainerService.Remove(trainerId);

            return NoContent();
        }

    }
}
