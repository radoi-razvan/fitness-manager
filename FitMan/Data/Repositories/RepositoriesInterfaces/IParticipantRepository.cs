using FitMan.DTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FitMan.Data.Repositories.RepositoriesInterfaces
{
    public interface IParticipantRepository
    {
        public int GetTotalGymMembers(long gymId);
        public int GetTotalCourseMembers(long courseId);
        public void Add(long courseId, long userId);

    }
}
