import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { authGuard } from './auth.guard';
import { NavbarComponent } from './traveler-main/navbar/navbar.component';
import { BaseComponent } from './traveler-main/base/base.component';

const routes: Routes = [
  {  path: 'login', component: LoginComponent },
  {
    path: '',
    canActivate: [authGuard], // Apply the AuthGuard here
    children: [
      { path: '', component: BaseComponent },
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
