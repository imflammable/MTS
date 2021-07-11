import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorProfileAddComponent } from './mentor-profile-add.component';

describe('MentorProfileAddComponent', () => {
  let component: MentorProfileAddComponent;
  let fixture: ComponentFixture<MentorProfileAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentorProfileAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorProfileAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
