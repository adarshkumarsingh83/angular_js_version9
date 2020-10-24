import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../../../app-services/beans/employee';
import { EmployeeService } from '../../../app-services/employee.service';
import { HeaderService } from '../../../app-services/header.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss'],
})
export class EmployeeDetailsComponent implements OnInit {
  id: number;
  employee: Employee;

  constructor(
    public employeeService: EmployeeService,
    private route: ActivatedRoute,
    private headerService: HeaderService
  ) {}

  ngOnInit(): void {
    console.log(`EmployeeCreateComponent.ngOnInit() `);
    this.id = this.route.snapshot.params['id'];
    this.employeeService.getEmployee(this.id).subscribe(
      (response) => {
        this.headerService.setSucsessMessage(response.message);
        this.employee = response.data;
        console.log(`EmployeeCreateComponent.getEmployee()  `, response);
      },
      (error) => {
        console.log(`EmployeeCreateComponent.getEmployee() Erros `, error);
        this.headerService.setFailureMessage(error.error.message);
      }
    );
  }
}
