using FitMan.DTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FitMan.Data.Repositories.Interfaces
{
    public interface IParticipantRepository
    {
        public List<object> GetTotalGymsMembers();
        public List<object> GetTotalCoursesMembers();
        public void Add(long courseId, long userId);
        public IEnumerable<CourseDTO> GetAttendedCourses(long participantId);
        public void Remove(long courseId, long userId);

    }
}