import { Component, OnInit } from '@angular/core';
import { SignupServiceService } from '../signup-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.scss']
})
export class EditCourseComponent implements OnInit {

  constructor(private _service : SignupServiceService, private route : ActivatedRoute,private _router:Router) { }

 updatedCourseData = {}
 id:any

  ngOnInit() {
    this.id =parseInt(this.route.snapshot.paramMap.get('id'))
    this._service.getCourseById(this.id)
      .subscribe(
        res => {
          console.log(res)
          this.updatedCourseData=res
          
        },
        err => console.log(err)
      )
  }

  onSubmit(){
    //if(value==true){
      this._service.UpdateCourse(this.id,this.updatedCourseData)
      .subscribe(
        res=>
        {
          this._router.navigate(['adminDash'])
          console.log('course updated Sucessfully')

        } ,
        error=> console.log(error)
     )
   //}
  }



}
