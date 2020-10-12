import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SecurityGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    console.log("security gurad execued")
    const queryParams = route.queryParams;
    if(queryParams.valid === 'true'){
      console.log("security gurad execued authentication is "+ queryParams.valid)
       return true;
    } else {
      console.log("security gurad execued authentication is "+ queryParams.valid)
      this.router.navigateByUrl('/login');
      return false;
    }
  }  
  
}
