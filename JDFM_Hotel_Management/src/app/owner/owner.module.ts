import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OwnerRoutingModule } from './owner-routing.module';
import { OnwnerhomeComponent } from './onwnerhome/onwnerhome.component';
import { OwnersignupComponent } from './ownersignup/ownersignup.component';
import { OwnersuccessComponent } from './ownersuccess/ownersuccess.component';
import { SharedModule } from '../common/shared/shared.module';


@NgModule({
  declarations: [
    OnwnerhomeComponent,
    OwnersignupComponent,
    OwnersuccessComponent
  ],
  imports: [
    CommonModule,
    OwnerRoutingModule,
    SharedModule,
  ]
})
export class OwnerModule { }
