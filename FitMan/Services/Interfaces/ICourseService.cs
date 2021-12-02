using FitMan.DTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FitMan.Services.Interfaces
{
    public interface ICourseService : IService<CourseDTO>
    {
        IEnumerable<CourseDTO> GetAll(long gymId);
    }
}
