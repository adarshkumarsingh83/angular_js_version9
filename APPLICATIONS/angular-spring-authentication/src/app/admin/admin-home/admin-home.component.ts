import { Component, OnInit } from '@angular/core';
import { SecurityUtilService } from '../../security/security-util.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss'],
})
export class AdminHomeComponent implements OnInit {
  userName: string;

  constructor(securityUtilService: SecurityUtilService) {
    const userContext = securityUtilService.getFromStorge();
    this.userName = userContext.userName.toUpperCase();
  }

  ngOnInit(): void {}
}
