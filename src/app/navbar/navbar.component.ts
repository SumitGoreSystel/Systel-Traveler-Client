import { Component } from '@angular/core';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(){}
  isStyled = false;

  sidebarOpen() {
    this.isStyled = !this.isStyled;
  }
}
