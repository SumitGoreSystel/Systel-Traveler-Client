import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ColorTableComponent } from './color-table/color-table.component';
import { LoaderComponent } from './loader/loader.component';




@NgModule({
  declarations: [
    ColorTableComponent,
    LoaderComponent
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
    ColorTableComponent,
    LoaderComponent


  ]
})
export class SharedModule { }
