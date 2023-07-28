import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-student-activity',
  templateUrl: './student-activity.component.html',
  styleUrls: ['./student-activity.component.css']
})
export class StudentActivityComponent {

signInForm! : FormGroup;
showSignInForm : boolean = false;
inpPassword : any;
inpconfirmpassword : any;
isMatch! : boolean;
showPassword! : boolean;
  strongPassword!: boolean;
  passlength! : any;

constructor(private fb : FormBuilder){}


showForm(){
  this.showSignInForm = true;
  this.signInForm = this.fb.group({
    password : [''],
    confirmpassword : [''],
    name : ['',[this.nameValidation, this.whiteSpaceValidation]]
  })
}

passwordBoxValue(){
  console.log('.........', this.signInForm.value);
  console.log('.........', this.signInForm.value.password);
  this.inpPassword = this.signInForm.value.password;
  if(this.inpPassword == this.inpconfirmpassword){
    this.isMatch = true;
  }
  else{
    this.isMatch = false;
  }
  let passlength = this.passwordBoxValue.length
  if(this.passlength > 10){
    this.strongPassword = true;

    
  }
}


confirmpasswordBox(){
  this.inpconfirmpassword = this.signInForm.value.confirmpassword;
}


nameValidation(inp : any){
  console.log(inp.value);
  let data = inp.value?.toLowerCase();
  let isErr = data.includes('copy')
  return isErr ? {Err : true} : null;

}

whiteSpaceValidation(name : any){
  let data = name.value;
  let newdata = data?.trim();
  let isValid = data.length!= newdata.length;
  return isValid ? {whiteSpace: true} : null;
}



showpass(){
  this.showPassword = !this.showPassword;
}


}
