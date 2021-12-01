using FitMan.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FitMan.DTOs
{
    public class CourseExerciseDTO
    {
        public long CourseExerciseId { get; set; }
        public long CourseId { get; set; }
        public Course Course { get; set; }
        public long ExerciseId { get; set; }
        public Exercise Exercise { get; set; }
    }
}
