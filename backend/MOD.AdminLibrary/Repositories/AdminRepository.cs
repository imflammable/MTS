using MOD.DtoLibrary;
using MOD.ModelLibrary;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace MOD.AdminLibrary.Repositories
{
    public class AdminRepository : IAdminRepository
    {
        AdminContext context;
        public AdminRepository(AdminContext context)
        {
            this.context = context;
        }



        public bool AddAvailableCourse(Course course)
        {
            try
            {
                context.Courses.Add(course);
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


        public Course GetCourseById(int id)
        {
            return context.Courses.Find(id);
        }

        public IEnumerable<Course> GetCourses()
        {
            return context.Courses.ToList();
        }

        public bool UpdateCourse(Course course)
        {
            try
            {
                context.Courses.Update(course);
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

        public bool DeleteCourse(Course course)
        {
            try
            {
                context.Courses.Remove(course);
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

        public IEnumerable<GetUserListDto> GetAllMentorList()
        {
            var mentors = from a in context.MODUsers
                          join ma in context.UserRoles on a.Id equals ma.UserId
                          where ma.RoleId == "2"
                          select new GetUserListDto
                          {
                              Id = a.Id,
                              FirstName = a.FirstName,
                              LastName = a.LastName,
                              Email = a.Email,
                              AccessPermission = a.AccessPermission
                          };
            return mentors;
        }

        public IEnumerable<GetUserListDto> GetAllStudentList()
        {
            var mentors = from a in context.MODUsers
                          join ma in context.UserRoles on a.Id equals ma.UserId
                          where ma.RoleId == "3"
                          select new GetUserListDto
                          {
                              Id = a.Id,
                              FirstName = a.FirstName,
                              LastName = a.LastName,
                              Email = a.Email,
                              AccessPermission = a.AccessPermission

                          };
            return mentors;
        }

        public bool BlockUnBlockById(string id)
        {

            var userblock = context.MODUsers.SingleOrDefault(u => u.Id == id);
            userblock.AccessPermission = !userblock.AccessPermission;

            var result = context.SaveChanges();
            if (result > 0)
            {
                return true;
            }
            return false;

        }
    }
}
