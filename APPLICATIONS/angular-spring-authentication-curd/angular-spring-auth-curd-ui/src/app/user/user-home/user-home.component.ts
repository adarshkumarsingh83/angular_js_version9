import { Component, OnInit } from '@angular/core';
import { SecurityUtilService } from '../../security/security-util.service';
import { AppComponent } from '../../app.component';
import { Router } from '@angular/router';
import { EmployeeService } from '../../app-services/employee.service';
import { Employee } from 'src/app/app-services/beans/employee';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.scss'],
})
export class UserHomeComponent implements OnInit {
  employeeList: Employee[];
  userName: string;
  message: string;
  router: Router;
  employeeService: EmployeeService;
  securityUtilService: SecurityUtilService;

  constructor(
    router: Router,
    securityUtilService: SecurityUtilService,
    appComponent: AppComponent,
    employeeService: EmployeeService
  ) {
    this.router = router;
    this.employeeService = employeeService;
    this.securityUtilService = securityUtilService;
    const userContext = securityUtilService.getFromStorge();
    this.userName = userContext.userName.toUpperCase();
    appComponent.setRegistrationButtonVisible(false);
    appComponent.setLogoutButtonVisible(true);
  }
  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe(
      (response) => {
        this.employeeList = response.data;
        this.message = response.message;
        console.log(`AdminHomeComponent.getEmployees()`, this.employeeList);
      },
      (error) => {
        console.log(`AdminHomeComponent.getEmployees() Errors `, error);
      }
    );
  }
}
