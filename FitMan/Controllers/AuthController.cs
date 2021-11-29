using Microsoft.AspNetCore.Mvc;
using FitMan.Data;
using FitMan.DTOs;
using FitMan.Models;
using FitMan.Utils;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;

namespace FitMan.Controllers
{
    [Route("api")]
    [ApiController]
    public class AuthController : Controller
    {
        private readonly IUserRepository _repository;
        private readonly JwtService _jwtService;

        public AuthController(IUserRepository repository, JwtService jwtService)
        {
            _repository = repository;
            _jwtService = jwtService;
        }

        [HttpPost("register")]
        public IActionResult Register(RegisterDTO dto)
        {
            if (dto.UserRole == "Owner")
            {
                var user = new Owner()
                {
                    Username = dto.Name,
                    Email = dto.Email,
                    Password = PasswordEncrypter.HashPassword(dto.Password),
                    Gyms = new List<Gym>() { }
                };

                return Created("Gym owner registration successfull", _repository.Create(user));
            }
            else 
            {
                var user = new Participant()
                {
                    Username = dto.Name,
                    Email = dto.Email,
                    Password = PasswordEncrypter.HashPassword(dto.Password),
                    Courses = new List<Course>() { }
                };

                return Created("Participant registration successfull", _repository.Create(user));
            }
        }

        [HttpPost("login")]
        public IActionResult Login(LoginDTO dto)
        {
            var user = _repository.GetByEmail(dto.Email);

            if (user == null) return BadRequest(new { message = "Invalid Credentials"});

            if (!PasswordEncrypter.VerifyPassword(user.Password, dto.Password))
            {
                return BadRequest(new { message = "Invalid Credentials" });
            }

            var jwt = _jwtService.Generate(user.UserId);

            Response.Cookies.Append("jwt", jwt, new CookieOptions
            {
                HttpOnly = true
            });

            return Ok(new { 
                message = "success"
            });
        }

        [HttpGet("user")]
        public IActionResult User()
        {
            try
            {
                var jwt = Request.Cookies["jwt"];

                var token = _jwtService.Verify(jwt);

                int userId = int.Parse(token.Issuer);

                var user = _repository.GetById(userId);

                return Ok(user);
            }
            catch (Exception)
            {
                return Unauthorized();
            }
        }


        [HttpPost("logout")]
        public IActionResult Logout()
        {
            Response.Cookies.Delete("jwt");

            return Ok(new
            {
                message = "success"
            });
        }

    }
}