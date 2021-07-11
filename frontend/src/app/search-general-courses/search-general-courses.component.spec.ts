import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchGeneralCoursesComponent } from './search-general-courses.component';

describe('SearchGeneralCoursesComponent', () => {
  let component: SearchGeneralCoursesComponent;
  let fixture: ComponentFixture<SearchGeneralCoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchGeneralCoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchGeneralCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
