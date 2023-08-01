import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonapicallService } from '../student/commonapicall.service';
import { StoringdataService } from '../storingdata.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 
  constructor(private router : Router, public storingdataService : StoringdataService,private commonapicallService : CommonapicallService,){

  }
  back(){
    this.router.navigateByUrl('landing');
  }

  submit(formData : any){
    console.log(formData);
    let requestData = {
      fullName : formData.fullName,
      password : formData.password,
      confirmPassword : formData.confirmPassword,
      gender : formData.gender,
    }
    let  endpoint = "owner";
    this.commonapicallService.postApiCall(endpoint,requestData).subscribe(res=>{
      console.log(res);
      
    })
    
  }

  password(passwordValue : any){
    console.log(passwordValue);
    
  }
}
