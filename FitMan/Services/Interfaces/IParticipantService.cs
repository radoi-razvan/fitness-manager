using FitMan.DTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FitMan.Services.Interfaces
{
    public interface IParticipantService
    {
        public List<object> GetTotalGymsMembers();
        public List<object> GetTotalCoursesMembers();
        public void Add(long courseId, long userId);
        public IEnumerable<CourseDTO> GetAttendedCourses(long participantId);
        public void Remove(long courseId, long userId);
    }
}
