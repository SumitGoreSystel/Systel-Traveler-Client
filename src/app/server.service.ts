import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class ServerService {

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
    return this.http.post<any>(`https://localhost:44306/menus/GetMenuForUser`, data);
  }
  userlogin(data: any): Observable<any> {
    return this.http.post<any>(`https://localhost:44306/users/auth`, data);
  }

  validateToken(){
    return this.http.get<any>(`https://localhost:44306/users/ValidateToken`);
  }

}
