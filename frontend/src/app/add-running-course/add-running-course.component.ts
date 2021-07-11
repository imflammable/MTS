import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SignupServiceService } from '../signup-service.service';

@Component({
  selector: 'app-add-running-course',
  templateUrl: './add-running-course.component.html',
  styleUrls: ['./add-running-course.component.scss']
})
export class AddRunningCourseComponent implements OnInit {

  constructor(private route: ActivatedRoute, private _service:SignupServiceService,private router:Router) { }
  id:any
  
  runningCourseData = {}
  

  ngOnInit() {
    this.id =parseInt(this.route.snapshot.paramMap.get('id'))
    this._service.getCourseById(this.id)
      .subscribe(
        res => {
          console.log(res)
          this.runningCourseData = 
          {
            
            CourseDetailsId:res.id,
            MentorDetailsId :localStorage.getItem('id')
          }
          
        },
        err => console.log(err)
      )
  }
  OnConfirmation(){
    this._service.AddRunningCourse(this.runningCourseData)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['mentorDash']);

        },
        err => console.log(err)
      )
  }

}
