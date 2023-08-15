import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CommonApiCallService } from 'src/app/common/common-api-call.service';
import { CommonService } from 'src/app/common/common.service';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-ownersuccess',
  templateUrl: './ownersuccess.component.html',
  styleUrls: ['./ownersuccess.component.scss']
})
export class OwnersuccessComponent {
  hotelDetails =[];
  userName!: string;
  userHotelDetails: any[] = []
  showTable: boolean = true;
  dataById:any;
  editId : any;


  constructor(private router : Router, private commonApiCallService : CommonApiCallService, private commonService : CommonService, private dialog: MatDialog){}

ngOnInit(){
  console.log('oninit calling.........');
  this.userName = this.commonService.userName;
  console.log('this.userName',this.userName);
  
  
}

  hotelRegistration(){
    this.router.navigateByUrl('owner/newHotelRegistration');
  }
  

   async myHotelDetails() {
    this.showTable = !this.showTable;
      let endPoint = 'hotelDetails';
      // this.commonApiCallService.getApiCall(endPoint).subscribe(data=>{
      //   this.hotelDetails = data;
      // })
       this.commonApiCallService.getApiCall(endPoint).toPromise()
      console.log(' this.hotelDetails', this.hotelDetails);
    this.userHotelDetails = []
      if (this.hotelDetails) {
        this.hotelDetailsByOwner();
        if (this.hotelDetails){
         
        }
        else{
          this.commonService.warningToaster('no any hotel avaible', 'Warning', {
            timeOut: 10000,
            positionClass: 'toast-top-center',
            progressBar: true,
            closeButton: true,
          })        
        }
      }else{
        alert('no owner data available')
      }

    }


  hotelDetailsByOwner() {
    this.hotelDetails.forEach((element: any) => {
      if (element.ownerName === this.userName) {
        this.userHotelDetails.push(element);
      }
    });
    console.log('this.userHotelDetails',this.userHotelDetails);
    
  }

  back(){
    this.router.navigateByUrl('owner/ownerHome');
  }


  
  async delete(id: number) {
    this.dialog.open (DialogComponent,{
      width : '250px',
      height : '400px'
    })

   await this.commonApiCallService.deleteApiCall('hotelDetails', id).toPromise()
   this.showTable = !this.showTable;
   this.myHotelDetails();
  }

  //  dialogRef.afterClosed().subscribe((yesValue:any)=>{
  //   if(yesValue === 'YES'){
  //     this.deleteRecord(id);
  //     this.showTable = !this.showTable,
  //     this.myHotelDetails()
  //   } 
  // });
   
  

  // async deleteRecord(id:number){
  //   await this.commonApiCallService.deleteApiCall('hotelDetails', id).toPromise();
  // }


   async edit(id:number){
    this.commonService.id = id;
    this.dataById = await this.commonApiCallService.getApiCall('hotelDetails',this.editId).toPromise()
    this.commonService.dataById = this.dataById;
    this.router.navigateByUrl('owner/newHotelRegistration')
  }

}
