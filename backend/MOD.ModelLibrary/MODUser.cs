using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace MOD.ModelLibrary
{
    public class MODUser : IdentityUser
    {
        [Required]
        public string FirstName { get; set; }
        [Required]
        public string LastName { get; set; }

        public bool AccessPermission { get; set; }
        //public RunningCourse RunningCourse  { get; set; }
        //public StudentDetails StudentDetails { get; set; }
        //public MentorDetails MentorDetails { get; set; }

        //public EnrolledCourse EnrolledCourse { get; set; }
    }
}
