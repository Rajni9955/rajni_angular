import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CommonapicallService } from '../student/commonapicall.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

form! : FormGroup;
adminData : any;
myName = 'rani';
date = new Date;
tableHeading : any[] = ['full Name', 'Mobile No.', 'Email Id', 'City'];

constructor(private fb : FormBuilder, private commonapicallService : CommonapicallService, private httpClient : HttpClient){}

ngOnInit(){
  console.log('...........');
  this.myForm();
  this.getData();
}
myForm(){
  this.form = this.fb.group({
    name : ['',[]],
    mobileNo : [''],
  })
}

save(){
  console.log("this.form",this.form.value);
  let urlEndpoint = "form";
  let formData = {
    Name : this.form.value.name,
    MobileNumber : this.form.value.mobileNo,
  }
 this.commonapicallService.postApiCall(urlEndpoint,formData).subscribe(resp=>{
  console.log(resp);
 })
}

getData(){
  let endpointToGetData = "admin";
  // let url = " http://localhost:3000/"
  // let newUrl = url + endpointToGetData;
  this.commonapicallService.getApiCall(endpointToGetData).subscribe(data=>{
    console.log('get data', data);
    this.adminData = data;
    
  })
  // this.commonapicallService.postApiCall(endpointToGetData);
}



}
