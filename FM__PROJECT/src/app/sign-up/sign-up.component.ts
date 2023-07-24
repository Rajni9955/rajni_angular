import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  signUpForm! : FormGroup
  student = {
    name : 'Angel',
    age : 25 ,
  }

 constructor(private fb : FormBuilder){

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
    gender:[''],
  })
}


submit(){
  console.log(this.signUpForm.valid);
  
}
}



