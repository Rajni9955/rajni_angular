import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/data.service';
import { CommonapicallService } from '../commonapicall.service';

@Component({
  selector: 'app-apicall',
  templateUrl: './apicall.component.html',
  styleUrls: ['./apicall.component.css']
})
export class ApicallComponent {
  signUpForm! : FormGroup;
  postApiResponse : any;
  studentName : any;
  constructor(private fb : FormBuilder, private dataService : DataService,private commonapicallService :CommonapicallService ){}

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
    let endpoint = "admin";
    this.commonapicallService.postApiCall(endpoint, this.signUpForm.valid).subscribe(Response=>{})
    this.postApiResponse = Response;

  // this.postApiResponse ={
  // "statusCode":1000,
  // "status":"Success",
  // "massage":"Data SUbmitted Successfuly"
  //  }
  if(this.postApiResponse.statusCode ==1000){
    alert(this.postApiResponse.massage);
   this.signUpForm.reset();
 }
}



  InputBox(){
    console.log('this.studentName');
    let reqData = {
      "studentName" : this.studentName
    }
     let urlEndPoint = "studentname";
     if(this.studentName.length > 2){
        this.commonapicallService.postApiCall(urlEndPoint,reqData).subscribe(respon => {
          console.log(respon);  
  
      })
    }
    
  }
}

