using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace MOD.ModelLibrary
{
    public class RunningCourse
    {
        public int Id { get; set; }
        public int Fees { get; set; }
        [Required]
        public Course CourseDetails { get; set; }
        public MODUser MentorDetails { get; set; }
        //public EnrolledCourse EnrolledCourse { get; set; }


    }
}
