import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../../app-services/employee.service';
import { Employee } from 'src/app/app-services/beans/employee';
import { AppComponent } from '../../../app.component';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss'],
})
export class EmployeeListComponent implements OnInit {
  message: string;
  employeeList: Employee[];
  constructor(
    private employeeService: EmployeeService,
    private appComponent: AppComponent
  ) {}

  deleteEmployee(employeeId: number): void {
    console.log(`EmployeeListComponent.deleteEmployee()`);
    this.employeeService.deleteEmployee(employeeId).subscribe(
      (response) => {
        this.message = response.message;
        console.log(`EmployeeListComponent.getEmployees()`, this.employeeList);
        this.loadEmployees();
      },
      (error) => {
        console.log(`EmployeeListComponent.getEmployees() Errors `, error);
      }
    );
  }

  ngOnInit(): void {
    this.appComponent.setCommonHomeVisible(true);
    this.appComponent.setLogoutButtonVisible(true);
    this.appComponent.setRegistrationButtonVisible(false);
    this.loadEmployees();
  }

  public loadEmployees(): void {
    this.employeeService.getEmployees().subscribe(
      (response) => {
        this.employeeList = response.data;
        this.message = response.message;
        console.log(`EmployeeListComponent.getEmployees()`, this.employeeList);
      },
      (error) => {
        console.log(`EmployeeListComponent.getEmployees() Errors `, error);
      }
    );
  }
}
