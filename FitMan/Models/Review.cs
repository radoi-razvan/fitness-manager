using System.ComponentModel.DataAnnotations.Schema;

namespace FitMan.Models
{
    public class Review
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public long ReviewId { get; set; }
        public int Rating { get; set; }
        public string Comment { get; set; }
        public long? GymId { get; set; }
        public long? CourseId { get; set; }
        public long? TrainerId { get; set; }
        public Gym Gym { get; set; }
        public Course Course { get; set; }
        public Trainer Trainer { get; set; }
    }
}
