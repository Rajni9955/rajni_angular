import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { CommonapicallService } from '../student/commonapicall.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  signUpForm! : FormGroup
  postApiData : any;
  student = {
    name : 'Angel',
    age : 25 ,
    mob:64646464646,
    city:'mumbai'
  }

 constructor(private fb : FormBuilder, private dataService : DataService , private router : Router,  public commonapicallService : CommonapicallService){
  
 }


ngOnInit(){

  this.formDef();

}

formDef(){
  this.signUpForm = this.fb.group({
    fullName : ['',[Validators.required, Validators.pattern("[a-zA-Z ]$"),Validators.minLength(10)]],
    MobileNo : ['',[Validators.pattern("[0-9]*$")], Validators.minLength(10), Validators.maxLength(10)],
    email:[''],
    userName:[''],
    city:[''],
    address:[''],
    gender:['female'],
  })
}


submit(){
  console.log(this.signUpForm.valid);
  this.dataService.userName = this.signUpForm.value.fullName;
  let endPoint = "admin";
  this.commonapicallService.postApiCall(endPoint, this.signUpForm.valid).subscribe(response=>{
    this.postApiData = response;
  })
  this.router.navigateByUrl('landing');
}
}



