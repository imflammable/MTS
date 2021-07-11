import { Component, OnInit } from '@angular/core';
import { SignupServiceService } from '../signup-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-student-list',
  templateUrl: './all-student-list.component.html',
  styleUrls: ['./all-student-list.component.scss']
})
export class AllStudentListComponent implements OnInit {

  mentors;
  constructor(private service: SignupServiceService,
    private _router: Router) { }

  ngOnInit() {
    this.service.GetAllStudentList()
      .subscribe(
        res => this.mentors = res,
        err => console.log(err),
      )
  }
  Block(id) {
    this.service.BlockById(id).subscribe(data => {
      this.service.GetAllStudentList()
      .subscribe(
        res => this.mentors = res,
        err => console.log(err),
      )
    });
  }
  Unblock(id) {
    this.service.UnBlockById(id).subscribe(data => {
      this.service.GetAllStudentList()
      .subscribe(
        res => this.mentors = res,
        err => console.log(err),
      )
    });
  }

}
