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
  constructor(
    private router: Router,
    private securityUtilService: SecurityUtilService
  ) {
    console.log('SecurityGuard.constructor');
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    console.log('SecurityGuard.canActivate()');
    const queryParams = route.queryParams;
    console.log(queryParams);
    if (queryParams.valid != null) {
      if (queryParams.valid === 'true') {
        console.log('SecurityGuard.canActivate() ' + queryParams.valid);
        return true;
      } else {
        console.log('SecurityGuard.canActivate() ' + queryParams.valid);
        this.router.navigateByUrl('/login');
        return false;
      }
    } else {
      const userContext = this.securityUtilService.getFromStorge();
      if (userContext != null && userContext.isAuthenticate) {
        console.log(
          'SecurityGuard.canActivate() execued authentication is true user context found'
        );
        return true;
      } else {
        console.log(
          'SecurityGuard.canActivate() authentication is false user context not found'
        );
        this.router.navigateByUrl('/login');
        return false;
      }
    }
  }
}
