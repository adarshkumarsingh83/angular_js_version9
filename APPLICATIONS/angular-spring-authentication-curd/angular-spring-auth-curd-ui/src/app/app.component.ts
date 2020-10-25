import { Component, OnInit } from '@angular/core';
import { SecurityUtilService } from './security/security-util.service';
import { HeaderService, PageType } from './app-services/header.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'angular-spring-auth-curd-ui';

  constructor(
    private headerService: HeaderService,
    private securityUtilService: SecurityUtilService
  ) {
    console.log(`AppComponent.constructor()`);
  }

  ngOnInit() {
    console.log(`AppComponent.ngOnInit()`);
    let userContext = this.securityUtilService.getFromStorge();
    this.headerService.calculateHeaderMenu(
      PageType.COMMON_HOME_PAGE,
      userContext
    );
  }
}
