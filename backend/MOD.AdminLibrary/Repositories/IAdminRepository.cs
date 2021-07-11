using MOD.DtoLibrary;
using MOD.ModelLibrary;
using System;
using System.Collections.Generic;
using System.Text;

namespace MOD.AdminLibrary.Repositories
{
    public interface IAdminRepository
    {
        bool AddAvailableCourse(Course course);
        IEnumerable<Course> GetCourses();
        Course GetCourseById(int id);
        bool UpdateCourse(Course course);
        bool DeleteCourse(Course course);
        IEnumerable<GetUserListDto> GetAllMentorList();
        IEnumerable<GetUserListDto> GetAllStudentList();
        bool BlockUnBlockById(string id);
    }
}
