import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';

import { ApiService } from './api.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  role:any
  constructor(private auth: ApiService, private router:Router){}

  canActivate(){
    if(this.auth.isAdmin()){
      return true
    }
    alert("you don't have rights ")
    this.router.navigate(['dashboard']);
    return false
  }


    // this.router.navigate(['login']);

  }


