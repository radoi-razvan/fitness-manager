using System.Collections.Generic;

namespace FitMan.Models
{
    public class Participant : User
    {
        public List<CourseParticipant> CourseParticipants { get; set; }
    }
}
