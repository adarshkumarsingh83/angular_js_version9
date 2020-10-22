import { Component, OnInit } from '@angular/core';
import { SecurityUtilService } from '../../security/security-util.service';
import { AppComponent } from '../../app.component';
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

  constructor(
    private securityUtilService: SecurityUtilService,
    private appComponent: AppComponent,
    private employeeService: EmployeeService
  ) {
    console.log(`UserHomeComponent.constructor()`);
    const userContext = securityUtilService.getFromStorge();
    this.userName = userContext.userName.toUpperCase();
    appComponent.setRegistrationButtonVisible(false);
    appComponent.setLogoutButtonVisible(true);
  }
  ngOnInit(): void {
    console.log(`UserHomeComponent.ngOnInit()`);
    this.employeeService.getEmployees().subscribe(
      (response) => {
        this.employeeList = response.data;
        this.appComponent.setMessageSucess(response.message);
        console.log(`AdminHomeComponent.getEmployees()`, this.employeeList);
      },
      (error) => {
        console.log(`AdminHomeComponent.getEmployees() Errors `, error);
        this.appComponent.setMessageFailure(error.error.message);
      }
    );
  }
}
