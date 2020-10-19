import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { SecurityUtilService } from '../security/security-util.service';
@Injectable({
  providedIn: 'root',
})
export class SecurityGuard implements CanActivate {
  securityUtilService: SecurityUtilService;
  constructor(
    private router: Router,
    securityUtilService: SecurityUtilService
  ) {
    this.securityUtilService = securityUtilService;
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    console.log('security gurad execued');
    const queryParams = route.queryParams;
    console.log(queryParams);
    if (queryParams.valid != null) {
      if (queryParams.valid === 'true') {
        console.log(
          'security gurad execued authentication is ' + queryParams.valid
        );
        return true;
      } else {
        console.log(
          'security gurad execued authentication is ' + queryParams.valid
        );
        this.router.navigateByUrl('/login');
        return false;
      }
    } else {
      const userContext = this.securityUtilService.getFromStorge();
      if (userContext != null && userContext.isAuthenticate) {
        console.log(
          'security gurad execued authentication is true user context found'
        );
        return true;
      } else {
        console.log(
          'security gurad execued authentication is false user context not found'
        );
        this.router.navigateByUrl('/login');
        return false;
      }
    }
  }
}
