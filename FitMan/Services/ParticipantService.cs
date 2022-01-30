using FitMan.Data.Repositories.Interfaces;
using FitMan.DTOs;
using FitMan.Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FitMan.Services
{
    public class ParticipantService : IParticipantService
    {
        private readonly IParticipantRepository _participantRepository;
        public ParticipantService(IParticipantRepository participantRepository)
        {
            _participantRepository = participantRepository;
        }

        public void Add(long courseId, long userId)
        {
            _participantRepository.Add(courseId, userId);
        }

        public IEnumerable<CourseDTO> GetAttendedCourses(long participantId)
        {
            return _participantRepository.GetAttendedCourses(participantId);
        }

        public int GetTotalCourseMembers(long courseId)
        {
            return _participantRepository.GetTotalCourseMembers(courseId);
        }

        public int GetTotalGymMembers(long gymId)
        {
            return _participantRepository.GetTotalGymMembers(gymId);
        }
    }
}
