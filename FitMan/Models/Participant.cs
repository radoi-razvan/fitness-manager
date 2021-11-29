using System.Collections.Generic;

namespace FitMan.Models
{
    public class Participant : User
    {
        public List<Course> Courses{ get; set; }
    }
}
