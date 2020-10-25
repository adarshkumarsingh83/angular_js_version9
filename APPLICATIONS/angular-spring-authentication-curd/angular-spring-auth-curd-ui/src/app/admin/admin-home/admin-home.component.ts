import { Component, OnInit } from '@angular/core';
import { SecurityUtilService } from '../../security/security-util.service';
import { HeaderService, PageType } from '../../app-services/header.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss'],
})
export class AdminHomeComponent implements OnInit {
  userName: string;

  constructor(
    private headerService: HeaderService,
    private securityUtilService: SecurityUtilService
  ) {
    console.log(`AdminHomeComponent.constructor()`);
    const userContext = securityUtilService.getFromStorge();
    this.userName = userContext.userName.toUpperCase();
  }

  ngOnInit(): void {
    let userContext = this.securityUtilService.getFromStorge();
    this.headerService.calculateHeaderMenu(
      PageType.ADMIN_HOME_PAGE,
      userContext
    );
  }
}
