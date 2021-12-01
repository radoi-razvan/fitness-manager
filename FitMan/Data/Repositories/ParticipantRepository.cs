using AutoMapper;
using FitMan.Data.Repositories.RepositoriesInterfaces;
using FitMan.DTOs;
using FitMan.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FitMan.Data.Repositories
{
    public class ParticipantRepository : IParticipantRepository
    {
        private readonly ApplicationContext _context;

        public ParticipantRepository(ApplicationContext context)
        {
            _context = context;
        }

        public void Add(long courseId, long userId)
        {
            var courseParticipant = new CourseParticipant()
            {
                CourseId = courseId,
                PartcipantId = userId
            };
            _context.CourseParticipants.Add(courseParticipant);
            _context.SaveChanges();
        }

        public int GetTotalCourseMembers(long courseId)
        {
            return _context.CourseParticipants.Count(cp => cp.CourseId == courseId);
        }

        public int GetTotalGymMembers(long gymId)
        {
            var gymCoursesIds = _context.Courses.Where(c => c.GymId == gymId)
                                                .Select(c => c.CourseId);
            var courseParticipants = _context.CourseParticipants.Where(cp => gymCoursesIds
                                                                .Contains(cp.CourseId));
            return courseParticipants.Select(cp => cp.PartcipantId)
                                     .Distinct()
                                     .Count();
        }


    }
}
