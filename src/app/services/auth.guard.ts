import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';

import { ApiService } from './api.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth: ApiService, private router:Router){

  }
  canActivate(){
    if(this.auth.isLoggedIn()){
      return true
    }
    alert("you have not logged in")
    this.router.navigate(['login']);
    return false
  }

}
