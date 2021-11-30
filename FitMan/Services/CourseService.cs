﻿using FitMan.Data.Repositories;
using FitMan.DTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FitMan.Services
{
    public class CourseService : ICourseService
    {
        private readonly ICourseRepository _courseRepository;
        public CourseService(ICourseRepository courseRepository)
        {
            _courseRepository = courseRepository;
        }

        public void Add(CourseDTO item)
        {
            _courseRepository.Add(item);
        }

        public bool CheckIfExists(long id)
        {
            return _courseRepository.CheckIfExists(id);
        }

        public CourseDTO Get(long id)
        {
            return _courseRepository.Get(id);
        }

        public IEnumerable<CourseDTO> GetAll(long gymId)
        {
            return _courseRepository.GetAll(gymId);
        }

        public void Remove(CourseDTO item)
        {
            _courseRepository.Remove(item);
        }

        public bool Update(long id, CourseDTO item)
        {
            return _courseRepository.Update(id, item);
        }
    }
}