using System;
using System.Collections.Generic;
using System.Text;

namespace MOD.DtoLibrary
{
    public class GetEnrolledCourseDto
    {
        public int EnrolledCourseId { get; set; }
        public int EnrolledCourseFees { get; set; }
        public string EnrolledCourseName { get; set; }
        public int EnrolledCourseDuration { get; set; }
        public DateTime EnrolledCourseStartDate { get; set; }
        public string MentorName { get; set; }
        public string MentorEmail { get; set; }
        public string CourseStatus { get; set; }
    }
}
