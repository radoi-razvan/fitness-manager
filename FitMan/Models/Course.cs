using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace FitMan.Models
{
    public class Course
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public long CourseId { get; set; }
        public string Name { get; set; }
        public decimal DefaultPrice { get; set; }
        public string Description { get; set; }
        public string Schedule { get; set; }
        public long GymId { get; set; }
        public Gym Gym { get; set; }
        public List<Review> Reviews { get; set; }
        public List<Participant> Participants { get; set; }
        public List<Trainer> Trainers { get; set; }
        public List<Exercise> Exercises{ get; set; }
        
    }
}
