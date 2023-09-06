import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { authGuard } from './auth.guard';
import { NavbarComponent } from './navbar/navbar.component';
import { BaseComponent } from './base/base.component';

const routes: Routes = [
  {  path: 'login', component: LoginComponent },
  { path: 'base', component : BaseComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
