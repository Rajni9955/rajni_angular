import { Component } from '@angular/core';

@Component({
  selector: 'app-directives-in-angular',
  templateUrl: './directives-in-angular.component.html',
  styleUrls: ['./directives-in-angular.component.css']
})
export class DirectivesInAngularComponent {
  show = false;
  show1 = true;
  ToShowPara1! : string;
  ToShowPara : string = "testtt";
  undefinedProperty : any;
  nullProperty = null;
  toggle : boolean = true;
  cars : string[] = ['swift', 'Aulto', 'Boolero', 'marcedeez'];
  carDetails= [
  {carName : 'swift', carPrice : 5000000, carColor : 'white'},
  {carName : 'Aulto', carPrice : 8000000, carColor : 'gray'},
  {carName : 'Boolero', carPrice : 4000000, carColor : 'red'} ,
  {carName : 'i10', carPrice : 9000000, carColor : 'black'},
  {carName : 'marcedeez', carPrice : 6000000, carColor : 'blue'},
  {carName : 'i20', carPrice : 1000000, carColor : 'green'},

]
tableHeadings: string[] = ['CarName', 'CarPrice', 'carColor'];

  data = [20, 60, 50, 30, [60, 30, 89]];
  data2:any[] = [];
  data3:any[] = [];

  color='red';
  styleCss = 'red';
  test = 200;
  switchValue = 4004;

  constructor() {

  }

  ngOnInit() {
    this.data.forEach((item,i)=>{
      if( i != 4 ){
        this.data2.push(item)
    }
    })

    this.data.forEach((item:any,i)=>{
      if( i == 4 ){
        this.data3 = [...item]
    }
    })
}
  toggleEffect(){
    // this.toggle = false;
    this.toggle = !this.toggle;

  }
 }




//  = >>assigment operator
// let x = 50;
// test = 60;
//  == >> Equality operator 
//  to compare only value , it will not compare data type
// let a = 20; //number
// let b = "20"  //string
//  if(a == b)>> true
//  === >> Equality operator (strictly checking data type as well as value)
// if(a === b)>> false

