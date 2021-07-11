using System;
using System.Collections.Generic;
using System.Text;

namespace MOD.DtoLibrary
{
    public class SetMentorDetailsDto
    {
        public string MentorUserId { get; set; }
        public long Phone { get; set; }
        public string Address { get; set; }
        public double Experience { get; set; }
        public string WorkProfile { get; set; }
        public string HighestDegree { get; set; }
        public string Skills { get; set; }
    }
}
