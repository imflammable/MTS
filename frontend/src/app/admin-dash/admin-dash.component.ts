import { Component, OnInit } from '@angular/core';
import { SignupServiceService } from '../signup-service.service';

@Component({
  selector: 'app-admin-dash',
  templateUrl: './admin-dash.component.html',
  styleUrls: ['./admin-dash.component.scss']
})
export class AdminDashComponent implements OnInit {

  studentFirstName
  studentLastName
  studentEmail
  studentId
  // mentorDetails={}
  // addedProfileDataOnce :boolean
  constructor(private service: SignupServiceService) { }
  ngOnInit() {
    this.studentFirstName=localStorage.getItem('firstName')
    this.studentLastName=localStorage.getItem('lastName')
    this.studentId=localStorage.getItem('id')
    this.studentEmail=localStorage.getItem('email')
    // this.service.GetMentorDetailsById(this.studentId)
    //   .subscribe(
    //     res=>{
    //       console.log(res);
    //       // if(res != null){
    //       //   this.mentorDetails=res;
    //       //   this.addedProfileDataOnce=true;
    //       // }
    //       // else{
    //       //   this.addedProfileDataOnce=false;
    //       // }

    //     },
    //     err=>console.log(err)

    //   )

  }

}
