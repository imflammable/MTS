import { Component, OnInit } from '@angular/core';
import { SignupServiceService } from '../signup-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-running-courses-for-students',
  templateUrl: './running-courses-for-students.component.html',
  styleUrls: ['./running-courses-for-students.component.scss']
})
export class RunningCoursesForStudentsComponent implements OnInit {

  runningCourses=[]
  addEnrolledCourseData={}
  studentId;
  notificationData={};
  constructor(private _signupService:SignupServiceService,private _router:Router) { }
  requestSuccessful=false;
  ngOnInit() {
    this.studentId=localStorage.getItem('id');
    this._signupService.getRunningCoursesForStudents(this.studentId)
    .subscribe(
      res => {
        console.log(res),
        this.runningCourses = res

      },
      err => console.log(err)
    )
  }

  OnRequesting(runningCourseId)
  {
    console.log(runningCourseId)
    this.addEnrolledCourseData={StudentId:localStorage.getItem('id'), RunningCourseId: runningCourseId}
    this._signupService.SendApprovalRequest(this.addEnrolledCourseData)
      .subscribe(
        res => {
          console.log("approval Request Sent successfully");
          // this.requestSuccessful=true;
          // this.notificationData={SenderId:localStorage.getItem('id'), ReceiverId: runningCourseId,Text:"approval request"};
          // this._signupService.SendNotificationToMentor(this.notificationData)
          //   .subscribe(
          //       res=>console.log(res),
          //       err=>console.log(err)
          //     );
          this._router.navigate(['studentDash']);
          },
        err=>console.log(err)
      );
    
  }

}
