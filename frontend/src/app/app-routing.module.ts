import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CoursesComponent } from './courses/courses.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth.guard';
import { AboutUsComponent } from './about-us/about-us.component';
import { PaymentComponent } from './payment/payment.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { AdminDashComponent } from './admin-dash/admin-dash.component';
import { MentorDashComponent } from './mentor-dash/mentor-dash.component';
import { RunningCoursesComponent } from './running-courses/running-courses.component';
import { AddNewCourseComponent } from './add-new-course/add-new-course.component';
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


const routes: Routes = [

{path: '',redirectTo: 'home',pathMatch:'full'},
{path:"home",component:HomeComponent},
{path:"signup",component:SignupComponent},
{path:"login",component:LoginComponent},
{path:'adminDash',component:AdminDashComponent},
{path:'mentorDash',component:MentorDashComponent},
{path:'studentDash',component:StudentDashComponent},
{path:'allAvailableCourses',component:AllAvailableCoursesComponent},
{path:'runningCourses',component:RunningCoursesComponent},
{path:'StudentOngoingCourses',component:StudentOngoingCoursesComponent},
{path:'requestedCourses',component:RequestedCoursesComponent},
{path:'courses',component:CoursesComponent},
{path:'studentDetails',component:StudentDetailsComponent, canActivate:[AuthGuard]},
{path:'studentProfileAdd',component:StudentprofileAddComponent},
{path:'mentorProfileAdd',component:MentorProfileAddComponent},
{path:'runningCoursesForStudents',component:RunningCoursesForStudentsComponent},
{path:'allStudentList',component:AllStudentListComponent},
{path:'allMentorList',component:AllMentorListComponent},
{path:'editMentorDetails',component:EditMentorDetailsComponent},
{path:'editStudentDetails',component:EditStudentDetailsComponent},
{path:'searchGeneralCourses/:id',component:SearchGeneralCoursesComponent},

{path:"addNewCourse",component:AddNewCourseComponent},
{path:'addRunningCourse/:id',component:AddRunningCourseComponent},
{path:"editCourse/:id",component:EditCourseComponent},
{path:'aboutUs',component:AboutUsComponent},
{path:'payment/:id',component:PaymentComponent},
{path:'courseContent/:id',component:CourseContentComponent},


{path:"**", component:PageNotFoundComponent}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}