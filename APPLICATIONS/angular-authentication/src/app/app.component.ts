import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SecurityUtilService } from './security/security-util.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-spring-authentication';
  router: Router;
  securityUtilService: SecurityUtilService;

  constructor(router: Router, securityUtilService: SecurityUtilService) {
    this.securityUtilService = securityUtilService;
    this.router = router;
  }

  logout() {
    this.securityUtilService.removeStoreage();
    this.router.navigate(['/login'], {
      queryParams: { action: 'logout' },
    });
  }
}
