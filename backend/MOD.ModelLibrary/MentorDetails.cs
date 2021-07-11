using System;
using System.Collections.Generic;
using System.Text;

namespace MOD.ModelLibrary
{
    public class MentorDetails
    {
        public int Id { get; set; }
        public MODUser MentorUser { get; set; }
        public long Phone { get; set; }
        public string Address { get; set; }
        public double Experience { get; set; }
        public string WorkProfile { get; set; }
        public string HighestDegree { get; set; }
        public string Skills { get; set; }
    }
}
