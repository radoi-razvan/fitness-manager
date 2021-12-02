using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace FitMan.Models
{
    public class CourseParticipant
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public long CourseParticipantId { get; set; }
        public long CourseId { get; set; }
        public Course Course { get; set; }
        public long ParticipantId { get; set; }
        public Participant Participant { get; set; }
    }
}
