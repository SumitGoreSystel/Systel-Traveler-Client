import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ServerService } from '../services/server.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private serverService: ServerService, private router:Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    // Check if the user is authenticated using your service method
    const isAuthenticated = this.serverService.isAuthenticated();

    if (isAuthenticated) {
      // this.router.navigate(['']);
      return true; // User is authenticated, allow access.
    } else {
      this.router.navigate(['/login'])
      return false;
    }
  }
}
