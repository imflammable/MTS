import { Injectable } from '@angular/core';
import{ HttpClient }  from '@angular/common/http'
import { SignupClass, LoginClass, ProfileClass, CourseClass } from './signup-class';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class SignupServiceService {
  

  constructor(private _http: HttpClient,private _router:Router) {}
  
  // _registerUrl='https://localhost:44354/api/account/register'
  // _loginUrl='https://localhost:44354/api/account/login'
  //account =44367
  //student = 44335
  //mentor= 44315
  //admin=44346
  //gateway=44338
  _registerUrl='https://localhost:44338/authservice/register'
  _loginUrl='https://localhost:44338/authservice/login'

  _addEnrolledCourseUrl='https://localhost:44338/studentservice/addEnrolledCourse'
  _getEnrolledCoursesUrl='https://localhost:44338/studentservice/getEnrolledCourses/'
  addStudentProfileUrl='https://localhost:44338/studentservice/addStudentProfile'
  GetStudentDetailsByIdUrl='https://localhost:44338/studentservice/GetStudentDetailsById/'
  getRunningCoursesForStudentsUrl='https://localhost:44338/studentservice/getRunningCoursesForStudents/'
  UpdateStudentProfileUrl='https://localhost:44338/studentservice/UpdateStudentProfile/'
  SendNotificationToMentorUrl='https://localhost:44338/studentservice/SendNotificationToMentor'
  CompletePaymentUrl='https://localhost:44338/studentservice/CompletePayment/'
  OnStartCourseUrl='https://localhost:44338/studentservice/OnStartCourse/'

  _getCoursesUrl='https://localhost:44338/adminservice/getCourses'
  _editCourseUrl='https://localhost:44338/adminservice/editCourse'
  _addNewCourseUrl='https://localhost:44338/adminservice/AddAvailableCourse'
  _getCourseByIdUrl='https://localhost:44338/adminservice/getCourseById/'
  _updateCourseUrl='https://localhost:44338/adminservice/updateCourse/'
  _deleteCourseUrl='https://localhost:44338/adminservice/deleteCourse/'
  GetAllMentorListUrl='https://localhost:44338/adminservice/GetAllMentorList'
  GetAllStudentListUrl='https://localhost:44338/adminservice/GetAllStudentList'
  BlockUnBlockByIdUrl='https://localhost:44338/adminservice/BlockUnBlockById/'
  SearchRunningCoursesUrl='https://localhost:44338/adminservice/SearchRunningCourses/'

  _addRunningCourseUrl='https://localhost:44338/mentorservice/addRunningCourse'
  _getRunningCoursesUrl='https://localhost:44338/mentorservice/getRunningCourses/'
  getRequestedCoursesUrl="https://localhost:44338/mentorservice/getRequestedCourses/"
  acceptCourseUrl='https://localhost:44338/mentorservice/acceptRequestedCourse/'
  rejectCourseUrl='https://localhost:44338/mentorservice/rejectRequestedCourse/'  
  addMentorProfileUrl='https://localhost:44338/mentorservice/addMentorProfile'
  GetMentorDetailsByIdUrl='https://localhost:44338/mentorservice/GetMentorDetailsById/'
  GetRunningCoursesByMentorIdUrl='https://localhost:44338/mentorservice/GetRunningCoursesByMentorId/'
  getCoursesForMentorUrl='https://localhost:44338/mentorservice/getCoursesForMentor/' 
  UpdateMentorProfileUrl='https://localhost:44338/mentorservice/UpdateMentorProfile/'

  
  SearchRunningCourses(criteria){
    return this._http.get<any>(this.SearchRunningCoursesUrl + criteria)
  }

  getCourseById(id){
    return this._http.get<any>(this._getCourseByIdUrl+id)
  }
  
  signingUp(signUpData){
    return this._http.post<any>(this._registerUrl,signUpData)
  }

  loggingIn(loginData){
    return this._http.post<any>(this._loginUrl,loginData)
  }
  
  getCourses(){
    return this._http.get<any>(this._getCoursesUrl)
  }

  editCourse(updatedCourseData){
    return this._http.post<any>(this._editCourseUrl,updatedCourseData)
  }

 
  isTokenPresent(){
    return !!localStorage.getItem('token')
  }

   isAdmin(){
    let role = localStorage.getItem('role')
    if ( role == '1')
    {
      return true
    }
    return false
  }
  isMentor(){
    let role = localStorage.getItem('role')
    if ( role == '2')
    {
      return true
    }
    return false
  }
 
  isStudent(){
    let role = localStorage.getItem('role')
    if ( role == '3')
    {
      return true
    }
    return false
  }
 getName()
 {
   return localStorage.getItem('firstName')
 }
 
  
  removeToken(){
    localStorage.removeItem('token')
    localStorage.removeItem('email')
    localStorage.removeItem('role')
    localStorage.removeItem('id')
    localStorage.removeItem('firstName')
    localStorage.removeItem('lastName')
    this._router.navigate([''])
  }

  

  UpdateCourse(id,updatedCourseData){
    return this._http.put<any>(this._updateCourseUrl + id,updatedCourseData)

  }

  AddingNewCourse(newCourseData){
    console.log(newCourseData)
    return this._http.post<any>(this._addNewCourseUrl, newCourseData)
  }

  DeleteCourse(id){
    console.log("hittin dservice")
    return this._http.delete<any>(this._deleteCourseUrl + id)
  }

  AddRunningCourse(runningCourseData){
    return this._http.post<any>(this._addRunningCourseUrl, runningCourseData)
  }
  getRunningCourses(id){
    return this._http.get<any>(this._getRunningCoursesUrl+id)
  }

  SendApprovalRequest(addEnrolledCourseData){
    return this._http.post<any>(this._addEnrolledCourseUrl,addEnrolledCourseData)
  }

  GetRequestedCourses(id){
    return this._http.get<any>(this.getRequestedCoursesUrl+id)
  }

  OnAcceptingCourse(id){
    return this._http.get<any>(this.acceptCourseUrl+id)
  }
  OnRejectingRequest(id){
    return this._http.get<any>(this.rejectCourseUrl+id)
  }
  GetEnrolledCourses(id){
    return this._http.get<any>(this._getEnrolledCoursesUrl+id)
  }
  GetFName(){
    return localStorage.getItem('firstName');
  }
  GetLName(){
    return localStorage.getItem('lastName');
  }
  GetEmail(){
    return localStorage.getItem('email');
  }
  GetId(){
    return localStorage.getItem('id');
  }
  
  getToken(){
    return localStorage.getItem('token')
  }
  AddStudentProfile(addStudentProfileData){
    console.log(addStudentProfileData);
    return this._http.post<any>(this.addStudentProfileUrl, addStudentProfileData);
  }

  GetStudentDetailsById(id){
    return this._http.get<any>(this.GetStudentDetailsByIdUrl + id)
  }
 
  AddMentorProfile(addMentorProfileData) {
    console.log(addMentorProfileData);
    return this._http.post<any>(this.addMentorProfileUrl, addMentorProfileData);
  }

  GetMentorDetailsById(id){
    return this._http.get<any>(this.GetMentorDetailsByIdUrl + id)
  }
  GetRunningCoursesByMentorId(id){
    return this._http.get<any>(this.GetRunningCoursesByMentorIdUrl+id)
  }
  getCoursesForMentor(id){
    return this._http.get<any>(this.getCoursesForMentorUrl+id)
  }
  getRunningCoursesForStudents(id){
    return this._http.get<any>(this.getRunningCoursesForStudentsUrl+id)
  }
  GetAllMentorList(){
    return this._http.get(this.GetAllMentorListUrl)
  }
  GetAllStudentList(){
    return this._http.get(this.GetAllStudentListUrl)
  }
  BlockById(id){
    return this._http.get<any>(this.BlockUnBlockByIdUrl+id)
  }

  UnBlockById(id){
    return this._http.get<any>(this.BlockUnBlockByIdUrl+id)
  }
  UpdateMentorProfile(id,UpdateMentorProfileData){
    return this._http.put<any>(this.UpdateMentorProfileUrl+id,UpdateMentorProfileData)
  }
  UpdateStudentProfile(id,UpdateMentorProfileData){
    return this._http.put<any>(this.UpdateStudentProfileUrl+id,UpdateMentorProfileData)
  }
  SendNotificationToMentor(notificationData){
    return this._http.post<any>(this.SendNotificationToMentorUrl,notificationData);
  }
  CompletePayment(id){
    return this._http.get<any>(this.CompletePaymentUrl+id);
  }
  OnStartCourse(id){
    return this._http.get<any>(this.OnStartCourseUrl+id)
  }
}
