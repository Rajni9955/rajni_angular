import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonApiCallService } from 'src/app/common/common-api-call.service';
import { CommonService } from 'src/app/common/common.service';

@Component({
  selector: 'app-owner-home',
  templateUrl: './owner-home.component.html',
  styleUrls: ['./owner-home.component.scss']
})
export class OwnerHomeComponent {

  loginForm! : FormGroup;
  endPoint!: string;
  ownerData: any;
  validUser!: boolean ;
  forgetPasswordForm!: FormGroup;
  showForgetPasswordForm: boolean = false;
  userName!: string;
  forgotPassword: boolean = false;
  Data! : any;

constructor(private router : Router, private formBulder : FormBuilder, private commonService : CommonService, private commonApiCallService : CommonApiCallService){}
  
ngOnInit(){
  this.endPoint = this.commonService.journey;
  this.forgotPassword = this.commonService.forgotPassword;
  console.log('  this.forgotPassword',  this.forgotPassword);
  
  this.userName = this.commonService.userName;
  console.log('endPoint...', this.endPoint);
  this.loginFormDetails();
  this.getOwnerApiData()}
 
loginFormDetails(){
  this.loginForm = this.formBulder.group({
    userName: ['',[Validators.required,Validators.minLength(5),Validators.pattern('[a-zA-Z0-9]*$')]],
    password: ['',[Validators.required,Validators.pattern('^[a-zA-Z0-9@]*$')]]
  })
  }
 
  back(){
    this.router.navigateByUrl('home');
  }


login(){
  console.log('this.loginForm' ,this.loginForm.value);
  if (this.loginForm.value.userName) {
    this.commonService.userName = this.loginForm.value.userName;
  }

  
  if (this.ownerData) {
    this.ownerData.find((ownerData: any) => {
      if (ownerData.FullName === this.loginForm.value.userName && ownerData.Password === this.loginForm.value.password) {
        this.validUser = true;
      }
    });
    if (this.validUser) {
      this.router.navigateByUrl('owner/ownerSuccess');
    }

  }
  else{

    console.log('hjkh');
    
  //   alert('user is not exist')
  // }
  //  alert('username or password is incorrect');
  // //  this.commonService.warningToaster('Password is incorrect','Warning',
  //  {
  //   timeOut: 10000,
  //   positionClass: 'toast-top-center'
  //  })

    this.commonService.forgotPassword = !this.forgotPassword;
    this.router.navigateByUrl('owner/ownerHome');
  }

}

getOwnerApiData(){
  this.commonApiCallService.getApiCall(this.endPoint).subscribe(getOwnerApiResponse=>{
    this.Data = getOwnerApiResponse
    
  })
}


signUp(){
  this.router.navigateByUrl('home');
}

 isValidUser(){
    this.ownerData.forEach((ownerData:any)=>{
      if(ownerData.FullName === this.loginForm.value.userName && ownerData.Password === this.loginForm.value.password) {
        this.validUser = true;
      }     
    });
return

  }

 
  

  forgoPasswordFormDetails() {
    this.forgetPasswordForm = this.formBulder.group({
      newPassword: [],
      confirmPassword: []
    })
  }
  
  forgetPassword(){
    this.showForgetPasswordForm = !this.showForgetPasswordForm;
    this.forgoPasswordFormDetails();
} 

  async updatePassword(){
    var user: any;
    this.ownerData.forEach((data: any) => {
      if (data.UserName === this.userName) {
        user = data;
      }
      console.log('user',user);
      
    })
    if (user) {
      let request = {
        Password : this.forgetPasswordForm.value.newPassword
      }
      this.commonApiCallService.patchApiCall(this.endPoint, request, user.id).subscribe((respo:any)=>{
        console.log(respo);
        
      })

      this.commonApiCallService.patchApiCall(this.endPoint, request, user.id).subscribe
   
    }
    else{
      alert('user is not exist')
    }
  }


  submit() {
    this.updatePassword();
    this.showForgetPasswordForm = !this.showForgetPasswordForm;
    this.forgotPassword = false;
  }



}