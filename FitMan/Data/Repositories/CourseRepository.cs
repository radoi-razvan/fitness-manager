using AutoMapper;
using FitMan.DTOs;
using FitMan.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FitMan.Data.Repositories
{
    public class CourseRepository : ICourseRepository
    {
        private readonly ApplicationContext _context;
        private readonly IMapper _mapper;

        public CourseRepository(ApplicationContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public void Add(CourseDTO item)
        {
            var model = _mapper.Map<Course>(item);
            _context.Courses.Add(model);
            _context.SaveChanges();
        }

        public bool CheckIfExists(long courseId)
        {
            return _context.Courses.Any(e => e.CourseId == courseId);
        }

        public CourseDTO Get(long courseId)
        {
            var model = _context.Courses.Find(courseId);
            var dto = _mapper.Map<CourseDTO>(model);
            return dto;
        }

        public IEnumerable<CourseDTO> GetAll(long gymId)
        {
            return _mapper.Map<IEnumerable<CourseDTO>>(_context.Courses.Where(c => c.GymId == gymId));
        }

        public void Remove(long courseId)
        {
            var course = _context.Courses.Find(courseId);
            _context.Courses.Remove(course);
            _context.SaveChanges();
        }

        public bool Update(long id, CourseDTO item)
        {
            try
            {
                Course course = _context.Courses.Find(id);
                course.Name = item.Name;
                course.DefaultPrice = item.DefaultPrice;
                course.Description = item.Description;
                course.Schedule = item.Schedule;
                course.GymId = item.GymId;

                _context.SaveChanges();
                return true;
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CheckIfExists(id))
                {
                    return false;
                }
                else
                {
                    throw;
                }

            }
        }
    }
}
