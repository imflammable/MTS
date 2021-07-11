using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using MOD.ModelLibrary;
using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Text;

namespace MOD.AuthLibrary
{
    public class AccountContext : IdentityDbContext
    {
        public AccountContext([NotNullAttribute] DbContextOptions options) : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<IdentityRole>(r => r.HasData(
            new IdentityRole
            {
                Id = "1",
                Name = "Admin",
                NormalizedName = "Admin"
            },
            new IdentityRole
            {
                Id = "2",
                Name = "Mentor",
                NormalizedName = "Mentor"
            },
             new IdentityRole
             {
                 Id = "3",
                 Name = "Student",
                 NormalizedName = "Student"
             }

            ));
            base.OnModelCreating(builder);
        }

        public DbSet<MODUser> MODUsers { get; set; }
        public DbSet<Course> Courses { get; set; }

        public DbSet<RunningCourse> RunningCourses { get; set; }
        public DbSet<EnrolledCourse> EnrolledCourses { get; set; }
        public DbSet<StudentDetails> StudentDetails { get; set; }
        public DbSet<MentorDetails> MentorDetails { get; set; }
        public DbSet<Notification> Notifications { get; set; }

    }
}
