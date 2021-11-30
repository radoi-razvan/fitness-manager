using FitMan.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FitMan.DTOs
{
    public class ReviewDTO
    {
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
