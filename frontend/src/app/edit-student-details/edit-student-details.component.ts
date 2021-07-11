import { Component, OnInit } from '@angular/core';
import { SignupServiceService } from '../signup-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-student-details',
  templateUrl: './edit-student-details.component.html',
  styleUrls: ['./edit-student-details.component.scss']
})
export class EditStudentDetailsComponent implements OnInit {

  
  studentId
  addStudentProfileData={}
  studentData={}
  constructor(private service: SignupServiceService,private router:Router) { }
  ngOnInit() {
    this.studentData={studentFirstName:this.service.GetFName(),studentLastName:this.service.GetLName(),studentEmail:this.service.GetEmail()}
    this.studentId=this.service.GetId()
    this.service.GetStudentDetailsById(this.studentId)
      .subscribe(
        res=>{
          console.log(res);
          this.addStudentProfileData=res;
        },
        err=>console.log(err)
      )
  }
  OnSubmit(){
    this.service.UpdateStudentProfile(this.studentId,this.addStudentProfileData)
      .subscribe(
        res=>{
          console.log(res);
          this.router.navigate(['studentDash']);
        },
        err=>console.log(err)
      )

  }

}
