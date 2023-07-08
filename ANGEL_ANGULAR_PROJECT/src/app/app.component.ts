import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ANGEL_ANGULAR_PROJECT';
// testcase1
firstName : string = 'angel';
// testcase2
firstName1 = 'angggel';
firstName2! : string;
surName1 : any;
surName : any = true;
formTitle : string = 'Login Form...' ;
studentName : string ='shiv';
amount = 36545;
isFavCity = false;
myName="rani";
gender=true;
isDisabled=false;
eventBindingData=55689;
twowaybindingTest=5555;

testingInterpolation(x: number, y: number){
  return x + y;
}

testingeventbinding(){
  this.eventBindingData = 6546721;
  console.log(this.eventBindingData);
  
}

test(){
  console.log(this.twowaybindingTest);
  
}
}

