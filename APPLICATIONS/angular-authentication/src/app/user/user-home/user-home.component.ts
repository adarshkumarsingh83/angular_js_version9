import { Component, OnInit } from '@angular/core';
import { SecurityUtilService } from '../../security/security-util.service';
import { AppComponent } from '../../app.component';
import { Router } from '@angular/router';
import { DataService } from '../../app-services/data.service';
import { User } from 'src/app/app-services/user';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.scss'],
})
export class UserHomeComponent implements OnInit {
  user: User;
  userName: string;
  router: Router;
  dataService: DataService;
  securityUtilService: SecurityUtilService;

  constructor(
    router: Router,
    securityUtilService: SecurityUtilService,
    appComponent: AppComponent,
    dataService: DataService
  ) {
    this.router = router;
    this.dataService = dataService;
    this.securityUtilService = securityUtilService;
    const userContext = securityUtilService.getFromStorge();
    this.userName = userContext.userName.toUpperCase();
    appComponent.setRegistrationButtonVisible(false);
    appComponent.setLogoutButtonVisible(true);
  }
  ngOnInit(): void {
    const userContext = this.securityUtilService.getFromStorge();
    this.user = this.dataService.getData(userContext.userName);
  }
}
