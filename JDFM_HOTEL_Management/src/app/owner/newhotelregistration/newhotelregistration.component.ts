import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonApiCallService } from 'src/app/common/common-api-call.service';
import { CommonService } from 'src/app/common/common.service';

@Component({
  selector: 'app-newhotelregistration',
  templateUrl: './newhotelregistration.component.html',
  styleUrls: ['./newhotelregistration.component.scss']
})
export class NewhotelregistrationComponent {
  hotelRagistrationForm!:FormGroup;
  editId! : number;
  dataById : any;
  constructor(private router : Router, private formBuilder : FormBuilder, private commonApiCallService : CommonApiCallService, private commonService : CommonService,){}

  ngOnInit(){
    this.editId = this.commonService.id;
    this.dataById =this.commonService.dataById;
      this.ownerRagistration();
   
  }
  ownerRagistration(){
    this.hotelRagistrationForm = this.formBuilder.group({
      ownerName : [this.dataById ? this.dataById.ownerName:'',[Validators.required,Validators.minLength(5), Validators.pattern('[a-zA-Z ]*$')], ],
      owenerMobNo : [this.dataById ? this.dataById.owenerMobNo:'',[Validators.required,Validators.maxLength(10),Validators.pattern('[0-9]*$')]],
      owenersPan : [this.dataById ? this.dataById.owenersPan:'',[Validators.required,Validators.maxLength(10),Validators.pattern('[A-Z0-9]*$')]],
      hotelName : [this.dataById ? this.dataById.hotelName:'',[Validators.required,Validators.minLength(5),Validators.pattern('[a-zA-Z/@#*$ ]*$')]],
      hotelAddress : [this.dataById ? this.dataById.hotelAddress:'',[Validators.required,Validators.minLength(5),Validators.pattern('[a-zA-Z0-9 ]*$')]],
      hotelContact : [this.dataById ? this.dataById.hotelContact:'',[Validators.required,Validators.minLength(5),Validators.pattern('[a0-9 ]*$')]],
      hotelMenu : [this.dataById ? this.dataById.hotelMenu:'',[Validators.required,Validators.minLength(2)]],
      roomsAvailable : [this.dataById ? this.dataById.roomsAvailable:'',[Validators.required,Validators.pattern('[0-9]*$')]],
      createPssword :[this.dataById ? this.dataById.createPssword:'',[Validators.required,Validators.minLength(5),Validators.pattern('[a-zA-Z0-9/@]*$')]]
    });
   
  }

  

  submitDetails(){
    
    let endpoint='hotelDetails';
    console.log('form data',this.hotelRagistrationForm.value);
    
    let request={
      ownerName:this.hotelRagistrationForm.value.ownerName,
      ownerContact:this.hotelRagistrationForm.value.owenerMobNo,
      hotelName:this.hotelRagistrationForm.value.hotelName,
      hotelAddress:this.hotelRagistrationForm.value.hotelAddress,
      hotelContact:this.hotelRagistrationForm.value.hotelContact,
      hotelMenu:this.hotelRagistrationForm.value.hotelMenu,
      roomsAvailable:this.hotelRagistrationForm.value.roomsAvailable,
      password:this.hotelRagistrationForm.value.createPssword,
    }
    if(this.editId){
      this.commonApiCallService.patchApiCall(endpoint,request,this.editId).subscribe((resp:any)=>{
        console.log(resp);
        
      })
    }
    else{
      this.commonApiCallService.postApiCall(endpoint,request).subscribe((resp:any)=>{
        console.log(resp);
        
      })
    }
   
    this.router.navigateByUrl('owner/ownerSuccess')

    
  }

  back(){
    this.router.navigateByUrl('owner/ownerSuccess');
  }

 async getDataById(){
  this.dataById = await this.commonApiCallService.getApiCall('hotelDetails',this.editId).toPromise()
  console.log(' this.dataById',  this.dataById);

}

  ngOnDistroy(){
    this.commonService.dataById = {};
    this.commonService.id = '';
  }
}
