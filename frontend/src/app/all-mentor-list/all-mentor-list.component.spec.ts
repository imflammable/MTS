import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllMentorListComponent } from './all-mentor-list.component';

describe('AllMentorListComponent', () => {
  let component: AllMentorListComponent;
  let fixture: ComponentFixture<AllMentorListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllMentorListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllMentorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
