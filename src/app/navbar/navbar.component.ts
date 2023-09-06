import { Component, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private serverService:ServerService){}

  ngOnInit(): void {
    
    // this.serverService.getMenuForUser()
  }

  isStyled = false;

  sidebarOpen() {
    this.isStyled = !this.isStyled;
  }
  
  Logout(){
    this.serverService.SignOutUser()
  }

  SearchText(){

  }




}
