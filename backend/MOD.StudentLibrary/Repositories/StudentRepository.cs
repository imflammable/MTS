using MOD.DtoLibrary;
using MOD.ModelLibrary;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace MOD.StudentLibrary.Repositories
{
    public class StudentRepository : IStudentRepository
    {
        StudentContext context;
        public StudentRepository(StudentContext context)
        {
            this.context = context;
        }
        public bool AddEnrolledCourse(SetEnrolledCourseDto setEnrolledCourseDto)
        {
            try
            {
                EnrolledCourse enrolledCourse = new EnrolledCourse
                {

                    RunningCourseDetails = context.RunningCourses.SingleOrDefault(r => r.Id == setEnrolledCourseDto.RunningCourseId),
                    StudentDetails = context.MODUsers.SingleOrDefault(u => u.Id == setEnrolledCourseDto.StudentId),
                    CourseStatus = CourseStatus.Requested
                };

                context.EnrolledCourses.Add(enrolledCourse);
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

        public bool AddStudentProfile(SetStudentDetailsDto setStudentDetailsDto)
        {
            try
            {
                StudentDetails studentDetails = new StudentDetails
                {
                    StudentUser = context.MODUsers.SingleOrDefault(u => u.Id == setStudentDetailsDto.StudentUserId),
                    Phone = setStudentDetailsDto.Phone,
                    Address = setStudentDetailsDto.Address,
                    UnivMarks = setStudentDetailsDto.UnivMarks,
                    HsMarks = setStudentDetailsDto.HsMarks,
                    BoardMarks = setStudentDetailsDto.BoardMarks,
                    Skills = setStudentDetailsDto.Skills
                };

                context.StudentDetails.Add(studentDetails);
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

        public bool CompletePayment(int id)
        {
            var enrolledCourse = context.EnrolledCourses.Find(id);
            enrolledCourse.CourseStatus = CourseStatus.PaymentComplete;
            int result = context.SaveChanges();
            if (result > 0)
            {
                return true;
            }
            return false;

        }

        public IEnumerable<GetEnrolledCourseDto> GetEnrolledCourses(string id)
        {

            var result = from ec in context.EnrolledCourses
                         where ec.StudentDetails.Id == id
                         select new GetEnrolledCourseDto
                         {
                             EnrolledCourseId = ec.Id,
                             EnrolledCourseName = ec.RunningCourseDetails.CourseDetails.Name,
                             EnrolledCourseStartDate = ec.RunningCourseDetails.CourseDetails.StartDate,
                             EnrolledCourseDuration = ec.RunningCourseDetails.CourseDetails.Duration,
                             EnrolledCourseFees = ec.RunningCourseDetails.Fees,
                             MentorName = ec.RunningCourseDetails.MentorDetails.FirstName,
                             MentorEmail = ec.RunningCourseDetails.MentorDetails.Email,

                             CourseStatus = ec.CourseStatus.ToString()
                         };
            return result;

            //another method to do modifications on selected results
            //var result1 = result.Select(ec => new GetEnrolledCourseDto
            //{
            //    EnrolledCourseId = ec.Id,
            //    EnrolledCourseName = ec.RunningCourseDetails.CourseDetails.Name,
            //    EnrolledCourseStartDate = ec.RunningCourseDetails.CourseDetails.StartDate,
            //    EnrolledCourseDuration = ec.RunningCourseDetails.CourseDetails.Duration,
            //    EnrolledCourseFees = ec.RunningCourseDetails.Fees,
            //    MentorName = ec.RunningCourseDetails.MentorDetails.FirstName,
            //    MentorEmail = ec.RunningCourseDetails.MentorDetails.Email,
            //    
            //    CourseStatus = ec.CourseStatus.ToString()
            //}); 

        }

        public IEnumerable<RunningCourseFetchDto> getRunningCoursesForStudents(string id)
        {
            var result1 = from ec in context.EnrolledCourses
                          where ec.StudentDetails.Id == id
                          select ec;
            //var result1 =from c in context.Courses
            //             where c.Id 

            var result =
                from rc in context.RunningCourses
                where !(from ec in result1
                        select ec.RunningCourseDetails.Id)
                       .Contains(rc.Id)
                select new RunningCourseFetchDto
                {
                    RunningCourseId = rc.Id,
                    CourseDuration = rc.CourseDetails.Duration,
                    RunningCourseFees = rc.Fees,
                    MentorName = rc.MentorDetails.FirstName,
                    CourseName = rc.CourseDetails.Name,
                    CourseStartDate = rc.CourseDetails.StartDate,
                    MentorEmail = rc.MentorDetails.Email,

                };
            return result;

        }

        public GetStudentDetailsDto GetStudentDetailsById(string id)
        {
            var result = (from sd in context.StudentDetails
                          where sd.StudentUser.Id == id
                          select new GetStudentDetailsDto
                          {
                              Phone = sd.Phone,
                              Address = sd.Address,
                              UnivMarks = sd.UnivMarks,
                              HsMarks = sd.HsMarks,
                              BoardMarks = sd.BoardMarks,
                              Skills = sd.Skills
                          }).SingleOrDefault();
            return result;
        }

        public bool OnStartCourse(int id)
        {
            var enrolledCourse = context.EnrolledCourses.Find(id);
            enrolledCourse.CourseStatus = CourseStatus.CourseStarted;
            int result = context.SaveChanges();
            if (result > 0)
            {
                return true;
            }
            return false;
        }

        //public bool SendNotificationToMentor(SetNotificationDto setNotificationDto)
        //{
        //    try
        //    {
        //        //var runningCourse = context.RunningCourses.SingleOrDefault(r => r.Id == setNotificationDto.ReceiverId);
        //        var runningCourse = from rc in context.RunningCourses

        //                            // where rc.Id == setNotificationDto.ReceivingObjId
        //                             select rc;
        //        //var runningCourse = context.RunningCourses.SingleOrDefault(rc => rc.Id == setNotificationDto.ReceivingObjId);
        //        //var mentorId = runningCourse.MentorDetails.Id;

        //        //Notification notification = new Notification
        //        //{
        //        //    Sender = context.MODUsers.SingleOrDefault(m => m.Id == setNotificationDto.SenderId),
        //        //    Receiver = context.MODUsers.SingleOrDefault(m1 => m1.Id == mentorId),
        //        //    Text=setNotificationDto.Text

        //        //};
        //        //context.Notifications.Add(notification);
        //        int result = context.SaveChanges();
        //        if (result > 0)
        //        {
        //            return true;
        //        }
        //        return false;

        //    }
        //    catch (Exception)
        //    {

        //        throw;
        //    }
        //}

        public bool UpdateStudentProfile(string id, GetStudentDetailsDto getStudentDetailsDto)
        {
            try
            {
                var student = (from md in context.StudentDetails
                               where md.StudentUser.Id == id
                               select md).SingleOrDefault();
                student.Phone = getStudentDetailsDto.Phone;
                student.Address = getStudentDetailsDto.Address;
                student.HsMarks = getStudentDetailsDto.HsMarks;
                student.Skills = getStudentDetailsDto.Skills;
                student.UnivMarks = getStudentDetailsDto.UnivMarks;
                student.BoardMarks = getStudentDetailsDto.BoardMarks;
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
