﻿using FitMan.DTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FitMan.Data.Repositories.RepositoriesInterfaces
{
    public interface ICourseRepository : IRepository<CourseDTO>
    {
        IEnumerable<CourseDTO> GetAll(long gymId);
    }
}