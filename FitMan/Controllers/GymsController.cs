using FitMan.DTOs;
using FitMan.Models;
using FitMan.Services;
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
        private readonly IGymService _gymService;
        public GymsController(IGymService gymService)
        {
            _gymService = gymService;
        }

        [HttpGet]
        public ActionResult<IEnumerable<GymDTO>> GetGyms()
        {
            return Ok(_gymService.GetAll());
        }

        // GET: api/Gyms/5
        [HttpGet("{id}")]
        public ActionResult<GymDTO> GetGym(long id)
        {
            var gym = _gymService.Get(id);

            if (gym == null)
            {
                return NotFound();
            }

            return Ok(gym);
        }

        // PUT: api/Gyms/5
        [HttpPut("{id}")]
        public IActionResult PutGym(long id, [FromBody] GymDTO gym)
        {
            //if (!ModelState.IsValid)
            //{
            //    return BadRequest(ModelState);
            //}

            GymDTO currentGym = new GymDTO()
            {
                Name = gym.Name,
                Address = gym.Address,
                Description = gym.Description
            };

            if (!_gymService.Update(id, currentGym))
            {
                return NotFound();
            } 

            return NoContent();
        }

        // POST: api/Gyms
        [HttpPost]
        public ActionResult<GymDTO> PostGym([FromBody] GymDTO gym)
        {
            //if (!ModelState.IsValid)
            //{
            //    return BadRequest(ModelState);
            //}

            GymDTO currentGym = new GymDTO()
            {
                Name = gym.Name,
                Address = gym.Address,
                Description = gym.Description
            };

            _gymService.Add(currentGym);

            return CreatedAtAction("GetGym", new { id = currentGym.GymId }, currentGym);
        }

        // DELETE: api/Gyms/5
        [HttpDelete("{id}")]
        public IActionResult DeleteGym(long id)
        {
            var gym = _gymService.Get(id);
            if (gym == null)
            {
                return NotFound();
            }

            _gymService.Remove(gym);

            return NoContent();
        }



    }
}
