﻿using FitMan.DTOs;
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

        // GET: gyms/total/participants
        [HttpGet]
        [Route("gyms/total/participants")]
        public ActionResult<List<object>> GetGymMembers()
        {
            return Ok(_participantService.GetTotalGymsMembers());
        }

        // GET: courses/total/participants
        [HttpGet]
        [Route("courses/total/participants")]
        public ActionResult<List<object>> GetCourseMembers()
        {
            return Ok(_participantService.GetTotalCoursesMembers());
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

        //// DELETE: gyms/5/courses/5/participants
        [HttpDelete]
        [Route("gyms/{gymId}/courses/{courseId}/participants")]
        public ActionResult DeleteParticipant(long courseId)
        {
            var jwt = Request.Cookies["jwt"];
            var token = _jwtService.Verify(jwt);
            int userId = int.Parse(token.Issuer);

            _participantService.Remove(courseId, userId);

            return NoContent();
        }
    
        // GET: gyms/courses/participants
        [HttpGet]
        [Route("gyms/courses/participants")]
        public ActionResult GetAttendedCourses()
        {
            var jwt = Request.Cookies["jwt"];
            if  (jwt == null) return NoContent();
            var token = _jwtService.Verify(jwt);
            int userId = int.Parse(token.Issuer);

            var courses = _participantService.GetAttendedCourses(userId);

            if (courses == null)
            {
                return NoContent();
            }

            return Ok(courses);
        }
    }
}
