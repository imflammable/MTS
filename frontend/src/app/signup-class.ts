export class SignupClass {
    constructor(
    public email:String,
    public role:String,
    public pass:String
     ){}
}
export class LoginClass {
    constructor(
    public email:String,
    public role:String,
    public pass:String
    ){}
}
export class ProfileClass {
    constructor(
    public name:String,
    public email:String,
    public phone:number,
    public address:String,
    public univMarks:number,
    public hsMarks:number,
    public boardMarks:number,
    
    ){}
}
export class CourseClass {
    constructor(
    public id:Number,
    public name:String,
    public duration:Number,
    public fees:Number,
    public mentor:String
   
    
    ){}
}
