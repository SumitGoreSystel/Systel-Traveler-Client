import { Component, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ServerService } from '../../server.service';
import { User, UserMenu } from 'src/app/interface/User';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private serverService:ServerService,public userService:UserService){}
  
  userMenu:UserMenu = {
    items: []
  }

  ngOnInit(): void {
    this.serverService.validateToken().subscribe((user:User)=>{
      this.userService.UserData = user
      let body={
        UserId : user.userId
      }
      this.serverService.getMenuForUser(body).subscribe((userMenu:UserMenu)=>{
        this.userMenu = userMenu
        console.log(this.userMenu);
        
      })
    })

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

   trimOutsideDoubleQuotes(input: string): string {
    const match = input.match(/"([^"]+)"/); // Match content inside double quotes
    if (match) {
      return match[1]; // Return the content inside double quotes
    } else {
      return input; // Return the original string if no double quotes are found
    }
  }




}



