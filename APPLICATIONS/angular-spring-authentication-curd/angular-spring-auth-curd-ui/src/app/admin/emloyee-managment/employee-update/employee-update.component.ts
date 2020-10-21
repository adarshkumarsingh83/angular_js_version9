import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../../../app-services/beans/employee';
import { Data } from '../../../app-services/beans/data';
import { EmployeeService } from '../../../app-services/employee.service';
import { AppComponent } from '../../../app.component';

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

  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeeService,
    private appComponent: AppComponent
  ) {
    console.log(`EmployeeUpdateComponent.constructor()`);
  }

  public updateEmployee(): void {
    this.employee = {
      id: this.id,
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      profession: this.profession,
    };
    console.log(`EmployeeUpdateComponent.updateEmployee()`, this.employee);
    this.employeeService.updateEmployee(this.id, this.employee).subscribe(
      (response) => {
        this.appComponent.setMessageSucess(response.message);
        console.log(`EmployeeUpdateComponent.updateEmployee() `, response);
      },
      (error) => {
        console.log(`EmployeeUpdateComponent.updateEmployee() Erros `, error);
        this.appComponent.setMessageFailure(error.error.message);
      }
    );
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log(`EmployeeUpdateComponent.ngOnInit()`, this.id);
    this.employeeService.getEmployee(this.id).subscribe(
      (response: Data<Employee>) => {
        this.id = response.data.id;
        this.firstName = response.data.firstName;
        this.lastName = response.data.lastName;
        this.email = response.data.email;
        this.profession = response.data.profession;
        this.appComponent.setMessageSucess(response.message);
        console.log(`EmployeeUpdateComponent.getEmployee() `, response);
      },
      (error) => {
        console.log(`EmployeeUpdateComponent.getEmployee() Erros `, error);
        this.appComponent.setMessageFailure(error.error.message);
      }
    );
  }
}
