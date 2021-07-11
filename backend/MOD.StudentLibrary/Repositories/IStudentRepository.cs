using MOD.DtoLibrary;
using System;
using System.Collections.Generic;
using System.Text;

namespace MOD.StudentLibrary.Repositories
{
    public interface IStudentRepository
    {
        bool AddEnrolledCourse(SetEnrolledCourseDto setEnrolledCourseDto);
        IEnumerable<GetEnrolledCourseDto> GetEnrolledCourses(string id);
        bool AddStudentProfile(SetStudentDetailsDto setStudentDetailsDto);
        GetStudentDetailsDto GetStudentDetailsById(string id);
        IEnumerable<RunningCourseFetchDto> getRunningCoursesForStudents(string id);
        bool UpdateStudentProfile(string id, GetStudentDetailsDto getStudentDetailsDto);
        bool CompletePayment(int id);
        bool OnStartCourse(int id);
        //bool SendNotificationToMentor(SetNotificationDto setNotificationDto);
    }
}
