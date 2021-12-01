using FitMan.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FitMan.DTOs
{
    public class CourseParticipantDTO
    {
        public long CourseParticipantId { get; set; }
        public long CourseId { get; set; }
        public Course Course { get; set; }
        public long PartcipantId { get; set; }
        public Participant Participant { get; set; }
    }
}
