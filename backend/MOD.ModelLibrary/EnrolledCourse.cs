using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace MOD.ModelLibrary
{
    public class EnrolledCourse
    {
        public int Id { get; set; }
        [Required]
        public RunningCourse RunningCourseDetails { get; set; }
        public MODUser StudentDetails { get; set; }
        public CourseStatus CourseStatus { get; set; }
    }
}
