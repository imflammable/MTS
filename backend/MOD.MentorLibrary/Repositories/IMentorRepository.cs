using MOD.DtoLibrary;
using MOD.ModelLibrary;
using System;
using System.Collections.Generic;
using System.Text;

namespace MOD.MentorLibrary.Repositories
{
    public interface IMentorRepository
    {
        bool AddRunningCourse(RunningCourseDto runningCourseDto);
        IEnumerable<RunningCourseFetchDto> GetRunningCourses(string id);
        IEnumerable<GetRequestedCourseDto> GetRequestedCourses(string id);
        bool AcceptRequestedCourse(int id);
        bool RejectRequestedCourse(int id);
        bool addMentorProfile(SetMentorDetailsDto setMentorDetailsDto);
        GetMentorDetailsDto GetMentorDetailsById(string id);
        //IEnumerable<GetRunningCoursesByMentorIdDto> GetRunningCoursesByMentorId(string id);
        IEnumerable<Course> getCoursesForMentor(string id);
        bool UpdateMentorProfile(string id, GetMentorDetailsDto getMentorDetailsDto);
    }
}
