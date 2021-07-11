import { Component } from '@angular/core';
import { SignupServiceService } from './signup-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private _signupService:SignupServiceService){}
  
  Name : string = this._signupService.getName()
  
  
}