import { Injectable,Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { SignupServiceService } from './signup-service.service';

@Injectable()

export class TokenInterceptorService implements HttpInterceptor{
  

  constructor(private _injector:Injector) { }

  intercept(req,next){
    let signupService=this._injector.get(SignupServiceService)
    let tokenizedReq=req.clone(
      {
        headers: req.headers.set('Authorization', 'Bearer ' + signupService.getToken() )
      }
    )
      return next.handle(tokenizedReq)
  }
}
