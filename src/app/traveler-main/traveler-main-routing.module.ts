import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseComponent } from './base/base.component';
import { UserComponent } from './User/user/user.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '', component: NavbarComponent, children: [
      { path: '', redirectTo: 'DB', pathMatch: 'full' }, 
      { path: 'USRL', component: UserComponent,title: 'User' },
      { path: 'base', component: BaseComponent, title: 'Base' },
      { path: 'DB', component:DashboardComponent, title: 'Dashboard'}
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TravelerMainRoutingModule { }
