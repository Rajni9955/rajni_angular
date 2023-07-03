import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ANGULAR_PROJECT';
  firstName : string ="Rajni";   //propertyName : datatype = value/data
  firstName1 = "rajni";
  firstName2! : string;
  surName : any;
  surName1 : any = true;
  formTitle : string = "Login Form..."
  studentName = 'angel';
  amount = 5600;
  myName = "rs";
  isFavCity = false;
  gender = false;
  eventBindingData = 60000;
  twoWayBindingTest = 26451;

  testingInterpolation(x : number, y : number){
    
      return x+y;
  }
  testingEventBinding(){
    this.eventBindingData = 50000;
    console.log(this.eventBindingData);
    
  }

  test(){
    console.log(this.twoWayBindingTest);
  }
}
