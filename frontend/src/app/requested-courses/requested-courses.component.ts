import { Component, OnInit } from '@angular/core';
import { SignupServiceService } from '../signup-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-requested-courses',
  templateUrl: './requested-courses.component.html',
  styleUrls: ['./requested-courses.component.scss']
})
export class RequestedCoursesComponent implements OnInit {

  constructor(private service : SignupServiceService,private router:Router) { }
  requestedCourses = []
  mentorId;
  ngOnInit() {
    this.mentorId=this.service.GetId();
    this.service.GetRequestedCourses(this.mentorId)
      .subscribe(
        res=>{
          console.log(res)
          this.requestedCourses=res
        },
        err=>console.log(err)
      )
      }
  OnAcceptingRequest(id){
    this.service.OnAcceptingCourse(id)
      .subscribe(
        res=>{
          console.log('Accepted sucessfully');
        this.router.navigate(['mentorDash']);
      },
        err=>console.log(err)
      )
  }
  OnRejectingRequest(id){
    this.service.OnRejectingRequest(id)
      .subscribe(
        res=>{
          console.log('Rejected sucessfully');
      this.router.navigate(['mentorDash']);
    },
        err=>console.log(err)
      )

  }
  }
