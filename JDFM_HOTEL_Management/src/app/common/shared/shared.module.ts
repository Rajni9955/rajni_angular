import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule} from '@angular/material/icon';
import { MatRadioModule} from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule} from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDialogModule} from '@angular/material/dialog';



@NgModule({
  declarations: [

  ],

  imports: [
    CommonModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatIconModule,
    MatRadioModule,
    MatCardModule,
    MatInputModule,
    HttpClientModule,
    MatMenuModule,
    MatToolbarModule,
    MatDialogModule,
  

  ],
  exports: [
    CommonModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatIconModule,
    MatRadioModule,
    MatCardModule,
    MatInputModule,
    HttpClientModule,
    MatToolbarModule,
    MatDialogModule,
  
    
    
  ],

})
export class SharedModule { }
