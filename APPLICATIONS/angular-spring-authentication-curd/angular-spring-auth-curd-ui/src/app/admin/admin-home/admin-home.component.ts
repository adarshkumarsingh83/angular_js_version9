import { Component, OnInit } from '@angular/core';
import { SecurityUtilService } from '../../security/security-util.service';
import { AppComponent } from '../../app.component';
import { Router } from '@angular/router';
import { Employee } from 'src/app/app-services/employee';
import { EmployeeService } from '../../app-services/employee.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss'],
})
export class AdminHomeComponent implements OnInit {
  userName: string;
  message: string;
  router: Router;
  employeeList: Employee[];
  employeeService: EmployeeService;

  constructor(
    router: Router,
    securityUtilService: SecurityUtilService,
    appComponent: AppComponent,
    employeeService: EmployeeService
  ) {
    this.router = router;
    this.employeeService = employeeService;
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
