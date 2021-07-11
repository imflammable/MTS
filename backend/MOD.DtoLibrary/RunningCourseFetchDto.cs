using System;
using System.Collections.Generic;
using System.Text;

namespace MOD.DtoLibrary
{
    public class RunningCourseFetchDto
    {
        public int RunningCourseId { get; set; }
        public int RunningCourseFees { get; set; }

        public string CourseName { get; set; }
        public int CourseDuration { get; set; }
        public DateTime CourseStartDate { get; set; }
        public string MentorName { get; set; }
        public string MentorEmail { get; set; }

    }
}
