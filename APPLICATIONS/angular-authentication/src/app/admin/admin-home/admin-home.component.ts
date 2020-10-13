import { Component, OnInit } from '@angular/core';
import { SecurityUtilService } from '../../security/security-util.service';
import { AppComponent } from '../../app.component';
import { Router } from '@angular/router';
import { User } from 'src/app/app-services/user';
import { DataService } from '../../app-services/data.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss'],
})
export class AdminHomeComponent implements OnInit {
  userName: string;
  router: Router;
  userList: User[];
  dataService: DataService;

  constructor(
    router: Router,
    securityUtilService: SecurityUtilService,
    appComponent: AppComponent,
    dataService: DataService
  ) {
    this.router = router;
    this.dataService = dataService;
    const userContext = securityUtilService.getFromStorge();
    this.userName = userContext.userName.toUpperCase();
    appComponent.setRegistrationButtonVisible(false);
    appComponent.setLogoutButtonVisible(true);
  }

  ngOnInit(): void {
    this.userList = this.dataService.getAllData();
    console.debug(
      `AdminHomeComponent.ngOnInit() data fetch from db ${this.userList}`
    );
  }
}
