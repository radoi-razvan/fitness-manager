using FitMan.DTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FitMan.Services.Interfaces
{
    public interface IParticipantService
    {
        public int GetTotalGymMembers(long gymId);
        public int GetTotalCourseMembers(long courseId);
        public void Add(long courseId, long userId);
        public IEnumerable<CourseDTO> GetAttendedCourses(long participantId);
        public void Remove(long courseId, long userId);
    }
}
