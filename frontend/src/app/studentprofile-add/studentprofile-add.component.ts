import { Component, OnInit } from '@angular/core';
import { SignupServiceService } from '../signup-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-studentprofile-add',
  templateUrl: './studentprofile-add.component.html',
  styleUrls: ['./studentprofile-add.component.scss']
})
export class StudentprofileAddComponent implements OnInit {

  constructor(private service :SignupServiceService,private router:Router) { }
  studentProfileData={};
  addStudentProfileData={};
  

  ngOnInit() {
    this.studentProfileData={FName:this.service.GetFName(),LName:this.service.GetLName(),Email:this.service.GetEmail()};
    this.addStudentProfileData={StudentUserId:this.service.GetId()};
  }
  OnSubmit(){
    this.service.AddStudentProfile(this.addStudentProfileData)
      .subscribe(
        res=>{
          console.log(res);
          this.router.navigate(['studentDash']);
          
        },
        err=>console.log(err)
      )

  }
}
