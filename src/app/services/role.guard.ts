import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';

import { ApiService } from './api.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  role: any
  constructor(private auth: ApiService, private router: Router, private toastr: ToastrService) { }

  canActivate() {
    if (this.auth.isAdmin()) {
      return true
    }
    // alert("you don't have rights ")
    this.toastr.warning("You don't have rights!!");
    this.router.navigate(['dashboard/product']);
    return false
  }


  // this.router.navigate(['login']);

}


