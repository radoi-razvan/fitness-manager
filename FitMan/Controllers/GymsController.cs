using FitMan.DTOs;
using FitMan.Models;
using FitMan.Services.Interfaces;
using FitMan.Utils;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace FitMan.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class GymsController : ControllerBase
    {
        private readonly IGymService _gymService;
        private readonly JwtService _jwtService;
        public GymsController(IGymService gymService, JwtService jwtService)
        {
            _gymService = gymService;
            _jwtService = jwtService;
        }

        [HttpGet]
        public ActionResult<IEnumerable<GymDTO>> GetGyms()
        {
            return Ok(_gymService.GetAll());
        }

        // GET: gyms/5
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


        // GET: gyms/last
        [HttpGet("last")]
        public ActionResult<long> GetLastGymId()
        {
            var gymId = _gymService.GetLastId();

            if (gymId == null)
            {
                return NotFound();
            }

            return Ok(gymId);
        }

        // PUT: gyms/5
        [HttpPut("{id}")]
        public IActionResult PutGym(long id, [FromBody] GymDTO gym)
        {
            //if (!ModelState.IsValid)
            //{
            //    return BadRequest(ModelState);
            //}

            var jwt = Request.Cookies["jwt"];
            var token = _jwtService.Verify(jwt);
            int userId = int.Parse(token.Issuer);

            GymDTO currentGym = new GymDTO()
            {
                Name = gym.Name,
                Address = gym.Address,
                Description = gym.Description,
                OwnerId = userId
            };

            if (!_gymService.Update(id, currentGym))
            {
                return NotFound();
            } 

            return NoContent();
        }

        // GET: gyms/owned
        [HttpGet("owned")]
        public ActionResult<IEnumerable<GymDTO>> GetOwnedGyms()
        {

            var jwt = Request.Cookies["jwt"];
            if (jwt == null)
            {
                return NoContent();
            }
            var token = _jwtService.Verify(jwt);
            int userId = int.Parse(token.Issuer);

            var gyms = _gymService.GetOwnedGyms(userId);

            if (gyms == null)
            {
                return NoContent();
            }

            return Ok(gyms);
        }

        // POST: gyms
        [HttpPost]
        public ActionResult<GymDTO> PostGym([FromBody] GymDTO gym)
        {
            //if (!ModelState.IsValid)
            //{
            //    return BadRequest(ModelState);
            //}

            var jwt = Request.Cookies["jwt"];
            var token = _jwtService.Verify(jwt);
            int userId = int.Parse(token.Issuer);

            GymDTO currentGym = new GymDTO()
            {
                Name = gym.Name,
                Address = gym.Address,
                Description = gym.Description,
                OwnerId = userId
            };

            _gymService.Add(currentGym);

            return CreatedAtAction("PostGym", new { id = currentGym.GymId }, currentGym);
        }

        // DELETE: gyms/5
        [HttpDelete("{id}")]
        public IActionResult DeleteGym(long id)
        {
            var gym = _gymService.Get(id);
            if (gym == null)
            {
                return NotFound();
            }

            _gymService.Remove(id);

            return NoContent();
        }



    }
}
