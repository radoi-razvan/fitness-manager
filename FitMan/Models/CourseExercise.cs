using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace FitMan.Models
{
    public class CourseExercise
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public long CourseExerciseId { get; set; }
        public long CourseId { get; set; }
        public Course Course { get; set; }
        public long ExerciseId { get; set; }
        public Exercise Exercise { get; set; }
    }
}
