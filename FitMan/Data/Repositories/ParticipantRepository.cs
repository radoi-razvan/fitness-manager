using AutoMapper;
using FitMan.Data.Repositories.Interfaces;
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
        private readonly IMapper _mapper;

        public ParticipantRepository(ApplicationContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public void Add(long courseId, long userId)
        {
            var courseParticipant = new CourseParticipant()
            {
                CourseId = courseId,
                ParticipantId = userId
            };
            _context.CourseParticipants.Add(courseParticipant);
            _context.SaveChanges();
        }

        public IEnumerable<CourseDTO> GetAttendedCourses(long participantId)
        {
            var attendedCoursesIds = _context.CourseParticipants
               .Where(cp => cp.ParticipantId == participantId)
               .Select(cp => cp.CourseId);
            return _mapper.Map<IEnumerable<CourseDTO>>(
                _context.Courses.Where(c => attendedCoursesIds.Contains(c.CourseId))
                );
        }

        public List<object> GetTotalCoursesMembers()
        {
            List<object> totalCoursesMembersList = new List<object>() { };
            foreach (var course in _context.Courses)
            {
                var totalCourseMembers = _context.CourseParticipants
                    .Count(cp => cp.CourseId == course.CourseId);
                totalCoursesMembersList.Add(new { CourseId = course.CourseId, 
                    TotalCourseMembers = totalCourseMembers });
            }
            return totalCoursesMembersList;
        }

        public List<object> GetTotalGymsMembers()
        {
            List<object> totalGymsMembersList = new List<object>() { };
            foreach (var gym in _context.Gyms)
            {
                var gymCoursesIds = _context.Courses.Where(c => c.GymId == gym.GymId)
                                                .Select(c => c.CourseId);
                var courseParticipants = _context.CourseParticipants.Where(cp => gymCoursesIds
                                                                    .Contains(cp.CourseId));
                var totalGymMembers = courseParticipants.Select(cp => cp.ParticipantId)
                                     .Distinct()
                                     .Count();
                totalGymsMembersList.Add(new { GymId = gym.GymId, TotalGymMembers = totalGymMembers });

            }
            return totalGymsMembersList;
        }

        public void Remove(long courseId, long userId)
        {
            var courseParticipant = _context.CourseParticipants
                .Where( cp => cp.CourseId == courseId && cp.ParticipantId == userId).First();

            _context.CourseParticipants.Remove(courseParticipant);
            _context.SaveChanges();
        }
    }
}
