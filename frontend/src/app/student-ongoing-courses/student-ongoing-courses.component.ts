import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SignupServiceService } from '../signup-service.service';


@Component({
  selector: 'app-student-ongoing-courses',
  templateUrl: './student-ongoing-courses.component.html',
  styleUrls: ['./student-ongoing-courses.component.scss']
})
export class StudentOngoingCoursesComponent implements OnInit {

  constructor(private route:ActivatedRoute,private service:SignupServiceService) { }
 

  id=localStorage.getItem('id')
  
  enrolledCourses=[]
  
  
  ngOnInit(){
    this.service.GetEnrolledCourses(this.id)
      .subscribe(
        res =>{
          console.log(res);
          this.enrolledCourses=res;
        },
        err=>console.log(err)
      );
  }
  OnStartCourse(id){
    this.service.OnStartCourse(id)
      .subscribe(
        res=>console.log(res),
        err=>console.log(err)
      )
  }
}
