import { Component, OnInit } from '@angular/core';
import { SignupServiceService } from '../signup-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-general-courses',
  templateUrl: './search-general-courses.component.html',
  styleUrls: ['./search-general-courses.component.scss']
})
export class SearchGeneralCoursesComponent implements OnInit {

  constructor(private service:SignupServiceService,private route:ActivatedRoute) { }
  InputValue :any;
  runningCourses=[]
  ngOnInit(){ 
    this.InputValue=this.route.snapshot.paramMap.get('id');
    this.service.SearchRunningCourses(this.InputValue)
      .subscribe(
        res=>{
          console.log(res),
          this.runningCourses=res;
          
        },
        err=>console.log(err)
      )
  }
  

}
