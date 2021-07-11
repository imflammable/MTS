using System;
using System.Collections.Generic;
using System.Text;

namespace MOD.DtoLibrary
{
    public class GetRequestedCourseDto
    {
        public int RequestedCourseId { get; set; }
        public int RequestedCourseFees { get; set; }
        public string RequestedCourseName { get; set; }
        public int RequestedCourseDuration { get; set; }
        public DateTime RequestedCourseStartDate { get; set; }
        public string StudentName { get; set; }
        public string StudentEmail { get; set; }
    }
}
