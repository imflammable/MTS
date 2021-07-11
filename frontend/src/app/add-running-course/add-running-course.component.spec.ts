import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRunningCourseComponent } from './add-running-course.component';

describe('AddRunningCourseComponent', () => {
  let component: AddRunningCourseComponent;
  let fixture: ComponentFixture<AddRunningCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRunningCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRunningCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
