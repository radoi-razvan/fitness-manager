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
    [Route("gyms/{gymId}/courses/{courseId}/exercises")]
    [ApiController]
    public class ExercisesController : ControllerBase
    {
        private readonly IExerciseService _exerciseService;
        public ExercisesController(IExerciseService exerciseService)
        {
            _exerciseService = exerciseService;
        }

        [HttpGet]
        public ActionResult<IEnumerable<ExerciseDTO>> GetExercises(long courseId)
        {
            return Ok(_exerciseService.GetAll(courseId));
        }

        // GET: gyms/5/courses/5/exercises/5
        [HttpGet("{exerciseId}")]
        public ActionResult<ExerciseDTO> GetExercise(long exerciseId)
        {
            var exercise = _exerciseService.Get(exerciseId);

            if (exercise == null)
            {
                return NotFound();
            }

            return Ok(exercise);
        }

        // PUT: gyms/5/courses/5/exercises/5
        [HttpPut("{exerciseId}")]
        public IActionResult PutExercise(long exerciseId, [FromBody] ExerciseDTO exercise)
        {
            ExerciseDTO currentExercise = new ExerciseDTO()
            {
                Name = exercise.Name,
                Description = exercise.Description
            };

            if (!_exerciseService.Update(exerciseId, currentExercise))
            {
                return NotFound();
            }

            return NoContent();
        }

        // POST: gyms/5/courses/5/exercises
        [HttpPost]
        public ActionResult<ExerciseDTO> PostExercise(long courseId, [FromBody] ExerciseDTO exercise)
        {
            ExerciseDTO currentExercise = new ExerciseDTO()
            {
                Name = exercise.Name,
                Description = exercise.Description
            };

            _exerciseService.Add(courseId, currentExercise);

            return CreatedAtAction("PostExercise", new { id = currentExercise.ExerciseId }, currentExercise);
        }

        // DELETE: gyms/5/courses/5/exercises/5
        [HttpDelete("{exerciseId}")]
        public IActionResult DeleteExercise(long courseId, long exerciseId)
        {
            var exercise = _exerciseService.Get(exerciseId);
            if (exercise == null)
            {
                return NotFound();
            }

            _exerciseService.Remove(courseId, exerciseId);

            return NoContent();
        }


    }
}
