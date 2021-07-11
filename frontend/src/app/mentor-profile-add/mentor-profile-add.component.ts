import { Component, OnInit } from '@angular/core';
import { SignupServiceService } from '../signup-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mentor-profile-add',
  templateUrl: './mentor-profile-add.component.html',
  styleUrls: ['./mentor-profile-add.component.scss']
})
export class MentorProfileAddComponent implements OnInit {

  constructor(private service :SignupServiceService,private router:Router) { }
  studentProfileData={};
  addStudentProfileData={};
  

  ngOnInit() {
    this.studentProfileData={FName:this.service.GetFName(),LName:this.service.GetLName(),Email:this.service.GetEmail()};
    this.addStudentProfileData={MentorUserId:this.service.GetId()};
  }
  OnSubmit(){
    this.service.AddMentorProfile(this.addStudentProfileData)
      .subscribe(
        res=>{
          console.log(res);
          this.router.navigate(['mentorDash']);

        },
        err=>console.log(err)
      )

  }

}
