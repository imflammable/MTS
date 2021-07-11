import { Component, OnInit } from '@angular/core';
import { SignupServiceService } from '../signup-service.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  constructor(private _signupService:SignupServiceService,private _router:Router) {}

  courses = []
  
  ngOnInit() {
      this._signupService.getCourses()
        .subscribe(
          res => {
            console.log(res),
            this.courses = res

          },
          err => console.log(err)
        )
  }

  OnDelete(id) {
    console.log(id)
    this._signupService.DeleteCourse(id)
      .subscribe(
        res=> {
          this._router.navigate(['adminDash'])
          console.log("delete successful")
          
        },
        err=>console.log(err)
      )
  }
  
}

