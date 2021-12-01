using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace FitMan.Models
{
    public class Exercise
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public long ExerciseId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public List<CourseExercise> CourseExercises { get; set; }
    }
}
