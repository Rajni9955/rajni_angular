import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonApiCallService } from 'src/app/common/common-api-call.service';
import { CommonService } from 'src/app/common/common.service';

@Component({
  selector: 'app-ownersignup',
  templateUrl: './ownersignup.component.html',
  styleUrls: ['./ownersignup.component.scss']
})
export class OwnersignupComponent {

  signUpForm!:FormGroup;
  journey! : string;
  postResponse!: any;

  constructor(private router : Router, private formBuilder: FormBuilder, private commonService : CommonService, private commonApiCallService : CommonApiCallService ){}


  ngOnInit(){
    this.journey = this.commonService.journey;
    console.log('this.journey',this.journey);
    
    this.formsDetails();
  }

  formsDetails(){
    this.signUpForm = this.formBuilder.group({
      fullname : ['',[Validators.required, Validators.minLength(5), Validators.pattern('[a-zA-Z ]*$'),this.whiteSpaceValidators]],
      email : ['',[Validators.required, Validators.minLength(5), Validators.pattern('[a-zA-Z ]*$'),this.whiteSpaceValidators]],
      mobileNo : ['',[Validators.required, Validators.minLength(5), Validators.pattern('[a-zA-Z ]*$')]],
      password : ['',[Validators.required, Validators.minLength(5), Validators.pattern('[0-9]*$')]],
      gender : ['',[]],
    })
  }

   back(){
    this.router.navigateByUrl('home');
  }


  submit(){
    let request = {
      FullName : this.signUpForm.value.fullname?.trim(),
      Email : this.signUpForm.value.email,
      Password : this.signUpForm.value.password,
      Mobile : this.signUpForm.value.mobileNo,
      Gender : this.signUpForm.value.gender,
    }
    this.commonApiCallService.postApiCall(this.journey,request).subscribe(res=>{
      console.log('res');
    this.postResponse = res;
    })
    this.router.navigateByUrl('owner/ownerSuccess');
    }
 
    whiteSpaceValidators(nameFieldValue : any){
      // let data = nameFieldValue.value;
      // let newdata = data?.trim();
      // let isnotValid = data.length ! = newdata.length;
      // return isnotValid ? {whiteSpace : true} : null
    }
  
}


