import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import{ HttpClientModule, HTTP_INTERCEPTORS }  from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MustMatchDirective } from './helpers/must-match.directive';
import { CommonModule } from '@angular/common';
import { NgxSpinnerModule } from 'ngx-spinner'
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import {FormsModule} from '@angular/forms';
import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './token-interceptor.service';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CoursesComponent } from './courses/courses.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PaymentComponent } from './payment/payment.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { RunningCoursesComponent } from './running-courses/running-courses.component';
import { AdminDashComponent } from './admin-dash/admin-dash.component';
import { MentorDashComponent } from './mentor-dash/mentor-dash.component';
import { AddNewCourseComponent } from './add-new-course/add-new-course.component';
import { AvailableMentorsComponent } from './available-mentors/available-mentors.component';
import { EditCourseComponent } from './edit-course/edit-course.component';
import { AllAvailableCoursesComponent } from './all-available-courses/all-available-courses.component';
import { AddRunningCourseComponent } from './add-running-course/add-running-course.component';
import { StudentDashComponent } from './student-dash/student-dash.component';
import { RequestedCoursesComponent } from './requested-courses/requested-courses.component';
import { StudentOngoingCoursesComponent } from './student-ongoing-courses/student-ongoing-courses.component';
import { StudentprofileAddComponent } from './studentprofile-add/studentprofile-add.component';
import { MentorProfileAddComponent } from './mentor-profile-add/mentor-profile-add.component';
import { RunningCoursesForStudentsComponent } from './running-courses-for-students/running-courses-for-students.component';
import { AllStudentListComponent } from './all-student-list/all-student-list.component';
import { AllMentorListComponent } from './all-mentor-list/all-mentor-list.component';
import { EditMentorDetailsComponent } from './edit-mentor-details/edit-mentor-details.component';
import { EditStudentDetailsComponent } from './edit-student-details/edit-student-details.component';
import { CourseContentComponent } from './course-content/course-content.component';
import { SearchGeneralCoursesComponent } from './search-general-courses/search-general-courses.component';



@NgModule({
  declarations: [
    AppComponent,  
    MustMatchDirective,
    HomeComponent,
    LoginComponent,
    HomeComponent,
    SignupComponent,
    CoursesComponent,
    PageNotFoundComponent,
    AboutUsComponent,
    PaymentComponent,
    StudentDetailsComponent,
    RunningCoursesComponent,
    AdminDashComponent,
    MentorDashComponent,
    AddNewCourseComponent,
    AvailableMentorsComponent,
    EditCourseComponent,
    AllAvailableCoursesComponent,
    AddRunningCourseComponent,
    StudentDashComponent,
    RequestedCoursesComponent,
    StudentOngoingCoursesComponent,
    StudentprofileAddComponent,
    MentorProfileAddComponent,
    RunningCoursesForStudentsComponent,
    AllStudentListComponent,
    AllMentorListComponent,
    EditMentorDetailsComponent,
    EditStudentDetailsComponent,
    CourseContentComponent,
    SearchGeneralCoursesComponent,
  
  ],
  imports: [
    BrowserModule,
    NgxSpinnerModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot()
    
  ],
  providers: [AuthGuard
  ,{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
