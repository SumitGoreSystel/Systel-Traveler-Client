import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class ServerService {

  private readonly BaseURL = environment.apiURL;

  constructor(private http: HttpClient, private router:Router) { }

  isAuthenticated() {
    if(localStorage.getItem('access_token')!==null){
      return true;
    }else{
      return false
    }
  }

  SignOutUser(){
    this.router.navigate(['/login'])
    localStorage.clear()
  }

  getMenuForUser(data: any): Observable<any> {
    return this.http.post<any>(`${this.BaseURL}/menus/GetMenuForUser`, data);
  }
  userlogin(data: any): Observable<any> {
    return this.http.post<any>(`${this.BaseURL}/users/auth`, data);
  }

  validateToken(){
    return this.http.get<any>(`${this.BaseURL}/users/ValidateToken`);
  }

}
