import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { parse } from 'querystring';
import { SignupServiceService } from '../signup-service.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  constructor(private route:ActivatedRoute,private service :SignupServiceService,private router:Router) { }
  enrolledCourseId;
  paymentDetails={}

  ngOnInit() {
    this.paymentDetails={FName:this.service.GetFName(),LName:this.service.GetLName(),Email:this.service.GetEmail(),Id:this.service.GetId()};
    this.enrolledCourseId=parseInt(this.route.snapshot.paramMap.get('id'));
  }
  OnPayment(){
    this.service.CompletePayment(this.enrolledCourseId)
      .subscribe(
        res=>{
          console.log(res),
          this.router.navigate(['StudentOngoingCourses'])
        },
        err=>console.log(err)
      )

  }
}
