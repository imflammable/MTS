import { Component, OnInit } from '@angular/core';
import { SignupServiceService } from '../signup-service.service';

@Component({
  selector: 'app-all-available-courses',
  templateUrl: './all-available-courses.component.html',
  styleUrls: ['./all-available-courses.component.scss']
})
export class AllAvailableCoursesComponent implements OnInit {

  constructor(private _signupService:SignupServiceService) { }
  courses=[]
  RunningCoursesId=[]
  mentorId;
  ngOnInit() {
    this.mentorId=this._signupService.GetId();
    this._signupService.getCoursesForMentor(this.mentorId)
        .subscribe(
          res => {
            console.log(res),
            this.courses = res
          },
          err => console.log(err)
        )
    // this._signupService.GetRunningCoursesByMentorId(this.mentorId)
    //       .subscribe(
    //         res=> {
    //           console.log(res),
    //           this.RunningCoursesId = res
    //         },
    //         err=>console.log(err)
    //       )
      
  }

}
