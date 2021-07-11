import { Component, OnInit } from '@angular/core';
import { SignupServiceService } from '../signup-service.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-running-courses',
  templateUrl: './running-courses.component.html',
  styleUrls: ['./running-courses.component.scss']
})
export class RunningCoursesComponent implements OnInit {
  runningCourses=[]
  addEnrolledCourseData={}
  constructor(private _signupService:SignupServiceService,private _router:Router) { }
mentorId;
  ngOnInit() {
    this.mentorId=localStorage.getItem('id');
    this._signupService.getRunningCourses(this.mentorId)
    .subscribe(
      res => {
        console.log(res),
        this.runningCourses = res

      },
      err => console.log(err)
    )
  }

 

}
