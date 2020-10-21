import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../../../app-services/beans/employee';
import { Data } from '../../../app-services/beans/data';
import { EmployeeService } from '../../../app-services/employee.service';

@Component({
  selector: 'app-employee-update',
  templateUrl: './employee-update.component.html',
  styleUrls: ['./employee-update.component.scss'],
})
export class EmployeeUpdateComponent implements OnInit {
  id: Number;
  firstName: String;
  lastName: String;
  email: String;
  profession: String;
  employee: Employee;
  responseMsg: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private employeeService: EmployeeService
  ) {}

  public updateEmployee(): void {
    this.employee = {
      id: this.id,
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      profession: this.profession,
    };
    console.log(``, this.employee);
    this.employeeService.updateEmployee(this.id, this.employee).subscribe(
      (response) => {
        this.responseMsg = response.message;
      },
      (error) => {
        console.log(`FormComponent.savaData() Erros `, error);
      }
    );
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.employeeService
      .getEmployee(this.id)
      .subscribe((response: Data<Employee>) => {
        this.id = response.data.id;
        this.firstName = response.data.firstName;
        this.lastName = response.data.lastName;
        this.email = response.data.email;
        this.profession = response.data.profession;
      });
  }
}
