using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace FitMan.Models
{
    public class Trainer
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public long TrainerId { get; set; }
        public string Name { get; set; }
        public int ExperienceYears { get; set; }
        public DateTime DateOfBirth { get; set; }
        public long CourseId { get; set; }
        public Course Course { get; set; }
        public List<Review> Reviews { get; set; }

    }
}
