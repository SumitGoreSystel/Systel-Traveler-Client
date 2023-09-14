import { Component, OnInit } from '@angular/core';
import { ServerService } from './services/server.service';
import { LoaderService } from './services/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Systel Traveler';

  isLoading:boolean = false;
  constructor(private serverService:ServerService, private loaderService:LoaderService){}
  ngOnInit(): void {
    this.loaderService.isLoading.subscribe((res:boolean)=>{
      this.isLoading = res
    })
  }

  isLoggedIn(): boolean {
    return this.serverService.isAuthenticated();
  }
}
