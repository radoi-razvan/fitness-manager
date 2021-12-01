using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FitMan.Services.ServiceInterfaces
{
    public interface IParticipantService
    {
        public int GetTotalGymMembers(long gymId);
        public int GetTotalCourseMembers(long courseId);
        public void Add(long courseId, long userId);
    }
}
