using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace FitMan.Models
{
    public class Gym
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public long GymId { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        public string Description { get; set; }
        public long? OwnerId { get; set; }
        public Owner GymOwner { get; set; }
        public List<Course> Courses { get; set; }
        public List<Review> Reviews { get; set; }

    }
}
