import { Component } from '@angular/core';

@Component({
  selector: 'app-directives-angular',
  templateUrl: './directives-angular.component.html',
  styleUrls: ['./directives-angular.component.css']
})
export class DirectivesAngularComponent {
  show1 = true;
  show = false;
  toShowPara1 = true;
  toShowPara : string = 'rajni';
  nullProperty = null;
  toggel: boolean = false;
  cars: string[] = ['mini cup', 'jaguar', 'swift', 'marcedeez'];
  carDetails = [
    { carName: 'Swift', carPrice: 800000, color: 'white' },
    { carName: 'min cup', carPrice: 2500000, color: 'white' },
    { carName: 'marcedeez', carPrice: 8000000, color: 'white' },
    { carName: 'i10', carPrice: 500000, color: 'white' },
    { carName: 'i20', carPrice: 1000000, color: 'black' },
  ];
  tableHeadings: string[] = ['CarName', 'CarPrice', 'Color'];

  data = [20, 60, 50, 30, [60, 30, 89]];
  data2:any[] = [];
  data3:any[] = [];
color = 'pink';
styleCss = 'red';
test = 300;
switchValue = 2003;

  constructor() {

  }

  ngOnInit() {
    this.data.forEach((item,i)=>{
      if( i != 4 ){
        this.data2.push(item)
      }
    })

    this.data.forEach((item:any,i)=>{
      if( i == 4){
        this.data3 = [...item]; //
      }
    })
  }

  toggelEffect() {
  let abc;
    //this.toggel = false;
    // this.toggel = !true >>false and  !false >>true
    this.toggel = !this.toggel;

}
}