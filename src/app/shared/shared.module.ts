import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ColorTableComponent } from './color-table/color-table.component';




@NgModule({
  declarations: [
    ColorTableComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    
  ],
  exports:[
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    ColorTableComponent

  ]
})
export class SharedModule { }
