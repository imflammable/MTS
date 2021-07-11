using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MOD.DtoLibrary;
using MOD.StudentLibrary.Repositories;

namespace MOD.StudentService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentController : ControllerBase
    {
        IStudentRepository repository;
        public StudentController(IStudentRepository repository)
        {
            this.repository = repository;
        }
        // GET: api/Student
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }


        [HttpGet("getEnrolledCourses/{id}", Name = "GetEnrolledCourses")]
        public IActionResult GetEnrolledCourses(string id)

        {
            return Ok(repository.GetEnrolledCourses(id));
        }


        [HttpPost("addEnrolledCourse")]
        public IActionResult AddEnrolledCourse([FromBody] SetEnrolledCourseDto setEnrolledCourseDto)
        {
            if (ModelState.IsValid)
            {
                bool result = repository.AddEnrolledCourse(setEnrolledCourseDto);
                if (result)
                {
                    return Created("AddEnrolledCourse", null);
                }
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
            return BadRequest(ModelState);
        }

        // PUT: api/Student/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }

        [HttpPost("addStudentProfile")]
        public IActionResult AddStudentProfile([FromBody] SetStudentDetailsDto setStudentDetailsDto)
        {
            if (ModelState.IsValid)
            {
                bool result = repository.AddStudentProfile(setStudentDetailsDto);
                if (result)
                {
                    return Created("added successfully", null);
                }
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
            return BadRequest(ModelState);
        }
        [HttpGet("GetStudentDetailsById/{id}", Name = "GetStudentDetailsById")]
        public IActionResult GetStudentDetailsById(string id)

        {
            return Ok(repository.GetStudentDetailsById(id));
        }
        [HttpGet("getRunningCoursesForStudents/{id}", Name = "getRunningCoursesForStudents")]
        public IActionResult getRunningCoursesForStudents(string id)

        {
            return Ok(repository.getRunningCoursesForStudents(id));
        }


        [HttpPut("UpdateStudentProfile/{id}")]
        public IActionResult UpdateStudentProfile(string id, [FromBody] GetStudentDetailsDto getStudentDetailsDto)
        {
            if (ModelState.IsValid)
            {
                bool result = repository.UpdateStudentProfile(id, getStudentDetailsDto);
                if (result)
                {
                    return Ok();
                }
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
            return BadRequest(ModelState);
        }

        //[HttpPost("SendNotificationToMentor")]
        //public IActionResult SendNotificationToMentor([FromBody] SetNotificationDto setNotificationDto)
        //{
        //    if (ModelState.IsValid)
        //    {
        //        bool result = repository.SendNotificationToMentor(setNotificationDto);
        //        if (result)
        //        {
        //            return Created("added successfully", null);
        //        }
        //        return StatusCode(StatusCodes.Status500InternalServerError);
        //    }
        //    return BadRequest(ModelState);
        //}
        [HttpGet("CompletePayment/{id}", Name = "CompletePayment")]
        public IActionResult CompletePayment(int id)
        {
            if (ModelState.IsValid)
            {
                bool result = repository.CompletePayment(id);
                if (result)
                {
                    return Ok();
                }
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
            return BadRequest(ModelState);
        }

        [HttpGet("OnStartCourse/{id}", Name = "OnStartCourse")]
        public IActionResult OnStartCourse(int id)
        {
            if (ModelState.IsValid)
            {
                bool result = repository.OnStartCourse(id);
                if (result)
                {
                    return Ok();
                }
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
            return BadRequest(ModelState);
        }
    }
}
