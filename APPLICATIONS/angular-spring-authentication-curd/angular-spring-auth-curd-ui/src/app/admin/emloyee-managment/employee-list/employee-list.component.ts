import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../../app-services/employee.service';
import { Employee } from 'src/app/app-services/beans/employee';
import { HeaderService } from '../../../app-services/header.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss'],
})
export class EmployeeListComponent implements OnInit {
  employeeList: Employee[];
  constructor(
    private employeeService: EmployeeService,
    private headerService: HeaderService
  ) {}

  public deleteEmployee(employeeId: number): void {
    console.log(`EmployeeListComponent.deleteEmployee()`);
    this.employeeService.deleteEmployee(employeeId).subscribe(
      (response) => {
        this.headerService.setSucsessMessage(response.message);
        console.log(`EmployeeListComponent.deleteEmployee()`, response);
        this.loadEmployees();
      },
      (error) => {
        console.log(`EmployeeListComponent.deleteEmployee() Errors `, error);
        this.headerService.setFailureMessage(error.error.message);
      }
    );
  }

  ngOnInit(): void {
    console.log(`EmployeeListComponent.ngOnInit()`);
    this.loadEmployees();
  }

  public loadEmployees(): void {
    console.log(`EmployeeListComponent.loadEmployees()`);
    this.employeeService.getEmployees().subscribe(
      (response) => {
        this.employeeList = response.data;
        this.headerService.setSucsessMessage(response.message);
        console.log(`EmployeeListComponent.loadEmployees()`, response);
      },
      (error) => {
        this.headerService.setFailureMessage(error.error.message);
        console.log(`EmployeeListComponent.loadEmployees() Errors `, error);
      }
    );
  }
}
