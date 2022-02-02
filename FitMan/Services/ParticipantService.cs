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

        public List<object> GetTotalCoursesMembers()
        {
            return _participantRepository.GetTotalCoursesMembers();
        }

        public List<object> GetTotalGymsMembers()
        {
            return _participantRepository.GetTotalGymsMembers();
        }

        public void Remove(long courseId, long userId)
        {
            _participantRepository.Remove(courseId, userId);
        }
    }
}
