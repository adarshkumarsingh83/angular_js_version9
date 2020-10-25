import { Component, OnInit } from '@angular/core';
import { SecurityUtilService } from '../../security/security-util.service';
import { AppComponent } from '../../app.component';
import { EmployeeService } from '../../app-services/employee.service';
import { Employee } from 'src/app/app-services/beans/employee';
import { HeaderService, PageType } from '../../app-services/header.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.scss'],
})
export class UserHomeComponent implements OnInit {
  employeeList: Employee[];
  userName: string;

  constructor(
    private securityUtilService: SecurityUtilService,
    private headerService: HeaderService,
    private employeeService: EmployeeService
  ) {
    console.log(`UserHomeComponent.constructor()`);
    const userContext = securityUtilService.getFromStorge();
    this.userName = userContext.userName.toUpperCase();
  }
  ngOnInit(): void {
    console.log(`UserHomeComponent.ngOnInit()`);
    const userContext = this.securityUtilService.getFromStorge();
    this.headerService.calculateHeaderMenu(
      PageType.USER_HOME_PAGE,
      userContext
    );
    this.employeeService.getEmployees().subscribe(
      (response) => {
        this.employeeList = response.data;
        this.headerService.setSucsessMessage(response.message);
        console.log(`AdminHomeComponent.getEmployees()`, this.employeeList);
      },
      (error) => {
        console.log(`AdminHomeComponent.getEmployees() Errors `, error);
        this.headerService.setFailureMessage(error.error.message);
      }
    );
  }
}
