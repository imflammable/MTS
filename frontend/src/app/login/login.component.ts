import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SignupServiceService } from '../signup-service.service';
import { LoginClass } from '../signup-class';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private _signupService:SignupServiceService, private _router: Router,private _route:ActivatedRoute) { }

  loginUserData = {}
  successMessage=""
  public errorMessage=""
  public success=false
  //roleHasError :boolean
  //public roles=['Student','Mentor','Admin']
  //userName=""
  //@Output() public userNameEvent =new EventEmitter()
  ngOnInit() {
  }

  loginUser(){
      this._signupService.loggingIn(this.loginUserData)
        .subscribe(
          res => {
              console.log(res)
              localStorage.setItem('token',res.token)
              localStorage.setItem('email',res.email)
              localStorage.setItem('role',res.role)
              localStorage.setItem('id',res.id)
              localStorage.setItem('firstName',res.firstName)
              localStorage.setItem('lastName',res.lastName)


              if(res.role === 1){
                this._router.navigate(['adminDash'])

              }
              else if(res.role === 2){
                this._router.navigate(['mentorDash'])

              }
              else {
                this._router.navigate(['studentDash'])

              }
              
            },
          err=> this.errorMessage= err.error.message
        )
}

// validateRole(value){
//   if(value ==='default'){
//     this.roleHasError=true
//   }
//   else{
//     this.roleHasError=false
//   }
// }

}
