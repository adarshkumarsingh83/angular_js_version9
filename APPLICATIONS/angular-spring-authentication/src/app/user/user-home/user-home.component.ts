import { Component, OnInit } from '@angular/core';
import { SecurityUtilService } from '../../security/security-util.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.scss'],
})
export class UserHomeComponent implements OnInit {
  userName: string;

  constructor(securityUtilService: SecurityUtilService) {
    const userContext = securityUtilService.getFromStorge();
    this.userName = userContext.userName.toUpperCase();
  }

  ngOnInit(): void {}
}
