using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MOD.DtoLibrary;
using MOD.MentorLibrary.Repositories;

namespace MOD.MentorService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MentorController : ControllerBase
    {
        IMentorRepository repository;
        public MentorController(IMentorRepository repository)
        {
            this.repository = repository;
        }

        [HttpGet("getRequestedCourses/{id}")]
        public IActionResult GetRequestedCourses(string id)
        {
            return Ok(repository.GetRequestedCourses(id));
        }


        [HttpGet("getrunningcourses/{id}")]
        public IActionResult Getrunningcourses(string id)
        {
            return Ok(repository.GetRunningCourses(id));
        }


        [HttpGet("acceptRequestedCourse/{id}", Name = "AcceptRequestedCourse")]
        public IActionResult AcceptRequestedCourse(int id)
        {
            if (ModelState.IsValid)
            {
                bool result = repository.AcceptRequestedCourse(id);
                if (result)
                {
                    return Ok();
                }
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
            return BadRequest(ModelState);
        }

        [HttpGet("rejectRequestedCourse/{id}", Name = "RejectRequestedCourse")]
        public IActionResult RejectRequestedCourse(int id)
        {
            if (ModelState.IsValid)
            {
                bool result = repository.RejectRequestedCourse(id);
                if (result)
                {
                    return Ok();
                }
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
            return BadRequest(ModelState);
        }



        [HttpPost("addRunningCourse")]
        public IActionResult AddRunningCourse([FromBody] RunningCourseDto runningCourseDto)
        {
            if (ModelState.IsValid)
            {
                bool result = repository.AddRunningCourse(runningCourseDto);
                if (result)
                {
                    return Created("AddRunningCourse", runningCourseDto.Fees);
                }
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
            return BadRequest(ModelState);
        }

        // PUT: api/Mentor/5
        [HttpPut("UpdateRunningCourse/{id}")]
        public void UpdateRunningCourse(int id, [FromBody] string value)
        {
        }

        // DELETE: api/mentor/5
        [HttpDelete("DeleteRunningCourse/{id}")]
        public void DeleteRunningCourse(int id)
        {
        }

        [HttpPost("addMentorProfile")]
        public IActionResult addMentorProfile([FromBody] SetMentorDetailsDto setMentorDetailsDto)
        {
            if (ModelState.IsValid)
            {
                bool result = repository.addMentorProfile(setMentorDetailsDto);
                if (result)
                {
                    return Created("added successfully", null);
                }
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
            return BadRequest(ModelState);
        }


        [HttpGet("GetMentorDetailsById/{id}", Name = "GetMentorDetailsById")]
        public IActionResult GetMentorDetailsById(string id)

        {
            return Ok(repository.GetMentorDetailsById(id));
        }

        //[HttpGet("GetRunningCoursesByMentorId/{id}", Name = "GetRunningCoursesByMentorId")]
        //public IActionResult GetRunningCoursesByMentorId(string id)

        //{
        //    return Ok(repository.GetRunningCoursesByMentorId(id));
        //}

        [HttpGet("getCoursesForMentor/{id}", Name = "getCoursesForMentor")]
        public IActionResult getCoursesForMentor(string id)

        {
            return Ok(repository.getCoursesForMentor(id));
        }

        [HttpPut("UpdateMentorProfile/{id}")]
        public IActionResult UpdateMentorProfile(string id, [FromBody] GetMentorDetailsDto getMentorDetailsDto)
        {
            if (ModelState.IsValid)
            {
                bool result = repository.UpdateMentorProfile(id, getMentorDetailsDto);
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
