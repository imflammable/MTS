using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MOD.AdminLibrary.Repositories;
using MOD.ModelLibrary;

namespace MOD.AdminService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdminController : ControllerBase
    {
        IAdminRepository repository;
        public AdminController(IAdminRepository repository)
        {
            this.repository = repository;
        }




        [HttpPost("AddAvailableCourse")]
        public IActionResult AddAvailableCourse([FromBody] Course course)
        {
            if (ModelState.IsValid)
            {
                bool result = repository.AddAvailableCourse(course);
                if (result)
                {
                    return Created("AddCourse", null);
                }
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
            return BadRequest(ModelState);
        }





        [HttpGet("getCourses")]
        public IActionResult GetAvailableCourses()
        {
            return Ok(repository.GetCourses());
        }






        [HttpGet("getCourseById/{id}", Name = "GetAvailableCourseById")]
        public IActionResult GetAvailableCourseById(int id)
        {
            var course = repository.GetCourseById(id);
            if (course == null)
            {
                return NotFound();
            }
            return Ok(course);
        }











        [HttpPut("updateCourse/{id}")]
        public IActionResult UpdateAvailableCourse(int id, [FromBody] Course course)
        {
            if (ModelState.IsValid && id == course.Id)
            {
                bool result = repository.UpdateCourse(course);
                if (result)
                {
                    return Ok();
                }
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
            return BadRequest(ModelState);
        }





        // DELETE: api/admin/deleteCourse/5
        [HttpDelete("deleteCourse/{id}")]
        public IActionResult DeleteAvailableCourse(int id)
        {
            var course = repository.GetCourseById(id);
            if (course == null)
            {
                return NotFound();
            }
            bool result = repository.DeleteCourse(course);
            if (result)
            {
                return Ok();
            }
            return BadRequest(ModelState);
        }

        [HttpGet("GetAllMentorList")]
        public IActionResult GetAllMentorList()
        {
            return Ok(repository.GetAllMentorList());
        }

        [HttpGet("GetAllStudentList")]
        public IActionResult GetAllStudentList()
        {
            return Ok(repository.GetAllStudentList());
        }

        [HttpGet("BlockUnBlockById/{id}")]
        public IActionResult BlockUnBlockById(string id)
        {
            var result = repository.BlockUnBlockById(id);
            if (result)
            {
                return Ok();
            }
            return StatusCode(StatusCodes.Status500InternalServerError);
        }

    }
}
