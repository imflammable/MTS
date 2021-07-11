import { Component, OnInit } from '@angular/core';
import { SignupServiceService } from '../signup-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-mentor-details',
  templateUrl: './edit-mentor-details.component.html',
  styleUrls: ['./edit-mentor-details.component.scss']
})
export class EditMentorDetailsComponent implements OnInit {

 
  studentId
  addStudentProfileData={}
  studentData={}
  constructor(private service: SignupServiceService,private router:Router) { }
  ngOnInit() {
    this.studentData={studentFirstName:this.service.GetFName(),studentLastName:this.service.GetLName(),studentEmail:this.service.GetEmail()}
    this.studentId=this.service.GetId()
    this.service.GetMentorDetailsById(this.studentId)
      .subscribe(
        res=>{
          console.log(res);
          this.addStudentProfileData=res;
        },
        err=>console.log(err)
      )
  }
  OnSubmit(){
    this.service.UpdateMentorProfile(this.studentId,this.addStudentProfileData)
      .subscribe(
        res=>{
          console.log(res);
          this.router.navigate(['mentorDash']);

        },
        err=>console.log(err)
      )

  }

}
