import { Component, OnInit } from '@angular/core';
import { SignupServiceService } from '../signup-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-mentor-list',
  templateUrl: './all-mentor-list.component.html',
  styleUrls: ['./all-mentor-list.component.scss']
})
export class AllMentorListComponent implements OnInit {

  mentors;
  errorServerMessageCourses: String = null;
  constructor(private service: SignupServiceService,
    private _router: Router) { }

  ngOnInit() {
    this.service.GetAllMentorList()
      .subscribe(
        res => this.mentors = res,
        err => console.log(err),
      )
  }
  Block(id) {
    this.service.BlockById(id).subscribe(data => {
      this.service.GetAllMentorList()
      .subscribe(
        res => this.mentors = res,
        err => console.log(err),
      )
    });
  }
  Unblock(id) {
    this.service.UnBlockById(id).subscribe(data => {
      this.service.GetAllMentorList()
      .subscribe(
        res => this.mentors = res,
        err => console.log(err),
      )
    });
  }

}
