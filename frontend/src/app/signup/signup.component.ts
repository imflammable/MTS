import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { SignupClass } from '../signup-class';
import { SignupServiceService } from '../signup-service.service'
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})

export class SignupComponent implements OnInit {
  constructor(private _signupServiceService: SignupServiceService,private _router:Router){}

  signupClassModel = {}
  Roles=[2,3]
  roleHasError=true
  submitted=false
  errorMessage=""

  ngOnInit() {
    this.signupClassModel={AccessPermission : 1}

  }

  onSubmit(value){
    if(value==true){
      this._signupServiceService.signingUp(this.signupClassModel)
      .subscribe(
        res=>
        {
          this.submitted=true
          console.log(res)

        } ,
        error=> 
        {
          if(error instanceof HttpErrorResponse){
            if(error.status===400){
              this.errorMessage="User already exists !!!"
              //this.submitted=false
            }
          }
        }
     )
   }
  }

   validateRole(value){
     if(value ==='default'){
       this.roleHasError=true
     }
     else{
       this.roleHasError=false
     }
   }
}