import { Component, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ServerService } from '../../services/server.service';
import { MenuDataItem, ParentMenu, User} from 'src/app/interface/User';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router, private serverService:ServerService,public userService:UserService, private loaderService:LoaderService){}
  isLoading:boolean = this.loaderService.isLoading.value
 

  parentMenu: ParentMenu[] = []

  ngOnInit(): void {
    this.serverService.validateToken().subscribe({
      next:(user:User)=>{
        this.userService.UserData = user
        let body={
          UserId : this.userService.UserData.userId
        }
        this.serverService.getMenuForUser(body).subscribe((userMenu:MenuDataItem)=>{
            this.userService.authorizedPages = userMenu.items.map((res:ParentMenu)=>{ return res.subRoleCode})
            this.parentMenu = userMenu.items.filter((res:ParentMenu) => {
              return res.isParent === 1;
            }).map((res:ParentMenu) => {
              res.childMenuList = userMenu.items.filter((usermenu:ParentMenu) => {
                return usermenu.parentMenuId === res.menuId;
              });
              return res;
            });
            
          }
        )
      },
      error:(err)=>{
        this.serverService.SignOutUser()
      }
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



