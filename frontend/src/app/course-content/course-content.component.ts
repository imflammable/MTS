import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-content',
  templateUrl: './course-content.component.html',
  styleUrls: ['./course-content.component.scss']
})
export class CourseContentComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  enrolledCourseId;
  ngOnInit() {
    this.enrolledCourseId =parseInt(this.route.snapshot.paramMap.get('id'))  }

}
