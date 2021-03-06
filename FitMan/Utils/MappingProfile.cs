using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FitMan.DTOs;
using FitMan.Models;

namespace FitMan.Utils
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<Gym, GymDTO>();
            CreateMap<GymDTO, Gym>();

            CreateMap<Course, CourseDTO>();
            CreateMap<CourseDTO, Course>();

            CreateMap<Exercise, ExerciseDTO>();
            CreateMap<ExerciseDTO, Exercise>();

            CreateMap<Trainer, TrainerDTO>();
            CreateMap<TrainerDTO, Trainer>();

            CreateMap<Review, ReviewDTO>();
            CreateMap<ReviewDTO, Review>();
        }
    }
}
