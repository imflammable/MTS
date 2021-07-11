import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { SignupServiceService } from './signup-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

   constructor(private _signupService : SignupServiceService, private _router : Router){}

   canActivate() : boolean {
        if(this._signupService.isTokenPresent()){
          return true
        }
        else {
          this._router.navigate(['login'])
          return false
        }
     }
  
}
