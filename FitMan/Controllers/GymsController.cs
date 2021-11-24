using FitMan.Data;
using FitMan.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FitMan.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GymsController : ControllerBase
    {
        private readonly IGymRepository _gymRepository;
        public GymsController(IGymRepository gymRepository)
        {
            _gymRepository = gymRepository;
        }

        [HttpGet]
        public ActionResult<IEnumerable<Gym>> GetGyms()
        {
            return Ok(_gymRepository.GetAll());
        }

        // GET: api/Gyms/5
        [HttpGet("{id}")]
        public ActionResult<Gym> GetGym(long id)
        {
            var gym = _gymRepository.Get(id);

            if (gym == null)
            {
                return NotFound();
            }

            return Ok(gym);
        }

        // PUT: api/Gyms/5
        [HttpPut("{id}")]
        public IActionResult PutGym(long id, [FromBody] Gym gym)
        {
            //if (!ModelState.IsValid)
            //{
            //    return BadRequest(ModelState);
            //}

            Gym currentGym = new Gym()
            {
                Name = gym.Name,
                Address = gym.Address,
                Description = gym.Description
            };

            if (!_gymRepository.Update(id, currentGym))
            {
                return NotFound();
            } 

            return NoContent();
        }

        // POST: api/Gyms
        [HttpPost]
        public ActionResult<Gym> PostGym([FromBody] Gym gym)
        {
            //if (!ModelState.IsValid)
            //{
            //    return BadRequest(ModelState);
            //}

            Gym currentGym = new Gym()
            {
                Name = gym.Name,
                Address = gym.Address,
                Description = gym.Description
            };

            _gymRepository.Add(currentGym);

            return CreatedAtAction("GetGym", new { id = currentGym.GymId }, currentGym);
        }

        // DELETE: api/Gyms/5
        [HttpDelete("{id}")]
        public IActionResult DeleteGym(long id)
        {
            var gym = _gymRepository.Get(id);
            if (gym == null)
            {
                return NotFound();
            }

            _gymRepository.Remove(gym);

            return NoContent();
        }



    }
}
