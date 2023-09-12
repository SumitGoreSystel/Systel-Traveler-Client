import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseComponent } from './base/base.component';
import { UserComponent } from './User/user/user.component';

const routes: Routes = [
  { path: 'USR', component: UserComponent, title: 'User' },
  { path: 'base', component: BaseComponent, title: 'base' }



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TravelerMainRoutingModule { }