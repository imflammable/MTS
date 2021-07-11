import { Component, OnInit } from '@angular/core';
import { SignupServiceService } from '../signup-service.service';

@Component({
  selector: 'app-student-dash',
  templateUrl: './student-dash.component.html',
  styleUrls: ['./student-dash.component.scss']
})
export class StudentDashComponent implements OnInit {
  studentFirstName
  studentLastName
  studentEmail
  studentId
  studentDetails={}
  addedProfileDataOnce :boolean
  constructor(private service: SignupServiceService) { }
  ngOnInit() {
    this.studentFirstName=localStorage.getItem('firstName')
    this.studentLastName=localStorage.getItem('lastName')
    this.studentId=localStorage.getItem('id')
    this.studentEmail=localStorage.getItem('email')
    this.service.GetStudentDetailsById(this.studentId)
      .subscribe(
        res=>{
          console.log(res);
          if(res != null){
            this.studentDetails=res;
            this.addedProfileDataOnce=true;
          }
          else{
            this.addedProfileDataOnce=false;
          }

        },
        err=>console.log(err)

      )

  }

}
