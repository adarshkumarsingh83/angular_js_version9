import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../../../app-services/beans/employee';
import { EmployeeService } from '../../../app-services/employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss'],
})
export class EmployeeDetailsComponent implements OnInit {
  id: number;
  responseMsg: string;
  employee: Employee;

  constructor(
    public employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.employeeService.getEmployee(this.id).subscribe(
      (response) => {
        this.responseMsg = response.message;
        this.employee = response.data;
      },
      (error) => {
        console.log(`EmployeeCreateComponent.savaEmployee() Erros `, error);
      }
    );
  }
}
