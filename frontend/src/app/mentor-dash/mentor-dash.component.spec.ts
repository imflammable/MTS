import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorDashComponent } from './mentor-dash.component';

describe('MentorDashComponent', () => {
  let component: MentorDashComponent;
  let fixture: ComponentFixture<MentorDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentorDashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
