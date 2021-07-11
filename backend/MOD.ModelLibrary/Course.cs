using System;
using System.Collections.Generic;
using System.Text;

namespace MOD.ModelLibrary
{
    public class Course
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public DateTime StartDate { get; set; }

        public int Duration { get; set; }
        //public RunningCourse RunningCourse { get; set; } 
    }
}
