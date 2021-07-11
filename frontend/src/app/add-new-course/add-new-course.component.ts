import { Component, OnInit } from '@angular/core';
import { SignupServiceService } from '../signup-service.service';
import { CourseClass } from '../signup-class';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-new-course',
  templateUrl: './add-new-course.component.html',
  styleUrls: ['./add-new-course.component.scss']
})
export class AddNewCourseComponent implements OnInit {

  constructor(private _signupServiceService: SignupServiceService,private _router:Router) { }
  newCourseData = {}

  ngOnInit() {
  }


  OnSubmit(){
      this._signupServiceService.AddingNewCourse(this.newCourseData)
      .subscribe(
        res=>
        {
          console.log(res);
          this._router.navigate(['adminDash']);
          
        } ,
        err=> console.log(err)
     )
   
  }

}
