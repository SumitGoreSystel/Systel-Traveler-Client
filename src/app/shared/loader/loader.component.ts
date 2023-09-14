import { Component } from '@angular/core';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent {
  constructor(public loaderService:LoaderService){
    this.loaderService.isLoading.subscribe((isLoading:boolean)=>{
      this.isLoading = isLoading
    })
  }

  

  isLoading:boolean = false;

}
