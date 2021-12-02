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
    [ApiController]
    public class ParticipantsController : ControllerBase
    {
        private readonly IParticipantService _participantService;
        private readonly JwtService _jwtService;
        public ParticipantsController(IParticipantService participantService, JwtService jwtService)
        {
            _participantService = participantService;
            _jwtService = jwtService;
        }

        // GET: gyms/5/participants
        [HttpGet]
        [Route("gyms/{gymId}/participants")]
        public ActionResult<int> GetGymMembers(long gymId)
        {
            return Ok(_participantService.GetTotalGymMembers(gymId));
        }

        // GET: gyms/5/courses/5/participants
        [HttpGet]
        [Route("gyms/{gymId}/courses/{courseId}/participants")]
        public ActionResult<int> GetCourseMembers(long courseId)
        {
            return Ok(_participantService.GetTotalCourseMembers(courseId));
        }

        // POST: gyms/5/courses/5/participants
        [HttpPost]
        [Route("gyms/{gymId}/courses/{courseId}/participants")]
        public ActionResult PostParticipant(long courseId)
        {
            var jwt = Request.Cookies["jwt"];
            var token = _jwtService.Verify(jwt);
            int userId = int.Parse(token.Issuer);

            _participantService.Add(courseId, userId);

            return NoContent();
        }

    }
}
