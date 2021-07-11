using MOD.DtoLibrary;
using MOD.ModelLibrary;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace MOD.MentorLibrary.Repositories
{
    public class MentorRepository : IMentorRepository
    {
        MentorContext context;
        public MentorRepository(MentorContext context)
        {
            this.context = context;
        }

        public bool AcceptRequestedCourse(int id)
        {
            var enrolledCourse = context.EnrolledCourses.Find(id);
            enrolledCourse.CourseStatus = CourseStatus.Approved;
            int result = context.SaveChanges();
            if (result > 0)
            {
                return true;
            }
            return false;
        }

        public bool RejectRequestedCourse(int id)
        {
            var enrolledCourse = context.EnrolledCourses.Find(id);
            enrolledCourse.CourseStatus = CourseStatus.Declined;
            int result = context.SaveChanges();
            if (result > 0)
            {
                return true;
            }
            return false;
        }

        public bool AddRunningCourse(RunningCourseDto runningCourseDto)
        {
            try
            {
                RunningCourse runningCourse = new RunningCourse
                {
                    Fees = runningCourseDto.Fees,
                    CourseDetails = context.Courses.SingleOrDefault(c => c.Id == runningCourseDto.CourseDetailsId),
                    MentorDetails = context.MODUsers.SingleOrDefault(u => u.Id == runningCourseDto.MentorDetailsId)
                };

                context.RunningCourses.Add(runningCourse);
                int result = context.SaveChanges();
                if (result > 0)
                {
                    return true;
                }
                return false;
            }
            catch (Exception)
            {

                throw;
            }
        }

        public IEnumerable<GetRequestedCourseDto> GetRequestedCourses(string id)
        {
            var result = from ec in context.EnrolledCourses
                         where ec.CourseStatus == CourseStatus.Requested && ec.RunningCourseDetails.MentorDetails.Id == id
                         select new GetRequestedCourseDto
                         {
                             RequestedCourseId = ec.Id,
                             RequestedCourseName = ec.RunningCourseDetails.CourseDetails.Name,
                             RequestedCourseStartDate = ec.RunningCourseDetails.CourseDetails.StartDate,
                             RequestedCourseDuration = ec.RunningCourseDetails.CourseDetails.Duration,
                             RequestedCourseFees = ec.RunningCourseDetails.Fees,
                             StudentName = ec.StudentDetails.FirstName,
                             StudentEmail = ec.StudentDetails.Email
                         };
            return result;
        }


        public IEnumerable<RunningCourseFetchDto> GetRunningCourses(string id)
        {

            var result = from rc in context.RunningCourses
                         where rc.MentorDetails.Id == id
                         select new RunningCourseFetchDto
                         {
                             RunningCourseId = rc.Id,
                             CourseDuration = rc.CourseDetails.Duration,
                             RunningCourseFees = rc.Fees,
                             MentorName = rc.MentorDetails.FirstName,
                             CourseName = rc.CourseDetails.Name,
                             CourseStartDate = rc.CourseDetails.StartDate,
                             MentorEmail = rc.MentorDetails.Email
                         };
            return result;
        }

        public bool addMentorProfile(SetMentorDetailsDto setMentorDetailsDto)
        {
            try
            {
                MentorDetails MentorDetails = new MentorDetails
                {
                    MentorUser = context.MODUsers.SingleOrDefault(u => u.Id == setMentorDetailsDto.MentorUserId),
                    Phone = setMentorDetailsDto.Phone,
                    Address = setMentorDetailsDto.Address,
                    Experience = setMentorDetailsDto.Experience,
                    WorkProfile = setMentorDetailsDto.WorkProfile,
                    HighestDegree = setMentorDetailsDto.HighestDegree,
                    Skills = setMentorDetailsDto.Skills
                };

                context.MentorDetails.Add(MentorDetails);
                int result = context.SaveChanges();
                if (result > 0)
                {
                    return true;
                }
                return false;
            }
            catch (Exception)
            {

                throw;
            }
        }

        public GetMentorDetailsDto GetMentorDetailsById(string id)
        {
            var result = (from md in context.MentorDetails
                          where md.MentorUser.Id == id
                          select new GetMentorDetailsDto
                          {
                              Phone = md.Phone,
                              Address = md.Address,
                              Experience = md.Experience,
                              WorkProfile = md.WorkProfile,
                              HighestDegree = md.HighestDegree,
                              Skills = md.Skills
                          }).SingleOrDefault();
            return result;
        }

        //public IEnumerable<GetRunningCoursesByMentorIdDto> GetRunningCoursesByMentorId(string id)
        //{
        //    var result = from rc in context.RunningCourses
        //                 where rc.MentorDetails.Id == id
        //                 select new GetRunningCoursesByMentorIdDto
        //                 {
        //                     CourseId = rc.CourseDetails.Id
        //                 };
        //    return result;
        //}

        public IEnumerable<Course> getCoursesForMentor(string id)
        {
            var result1 = from rc in context.RunningCourses
                          where rc.MentorDetails.Id == id
                          select rc;
            //var result1 =from c in context.Courses
            //             where c.Id 

            var result =
                from c in context.Courses
                where !(from rc in result1
                        select rc.CourseDetails.Id)
                       .Contains(c.Id)
                select c;
            return result;

        }

        public bool UpdateMentorProfile(string id, GetMentorDetailsDto getMentorDetailsDto)
        {
            try
            {
                var mentor = (from md in context.MentorDetails
                              where md.MentorUser.Id == id
                              select md).SingleOrDefault();
                mentor.Phone = getMentorDetailsDto.Phone;
                mentor.Address = getMentorDetailsDto.Address;
                mentor.Experience = getMentorDetailsDto.Experience;
                mentor.WorkProfile = getMentorDetailsDto.WorkProfile;
                mentor.HighestDegree = getMentorDetailsDto.HighestDegree;
                mentor.Skills = getMentorDetailsDto.Skills;
                int result = context.SaveChanges();
                if (result > 0)
                {
                    return true;
                }
                return false;
            }
            catch (Exception)
            {

                throw;
            }


        }
    }
}
