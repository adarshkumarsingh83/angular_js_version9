import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from '../../../app-services/beans/employee';
import { EmployeeService } from '../../../app-services/employee.service';
import { AppComponent } from '../../../app.component';
import { HeaderService } from '../../../app-services/header.service';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.scss'],
})
export class EmployeeCreateComponent implements OnInit {
  employee: Employee;

  constructor(
    private employeeService: EmployeeService,
    private headerService: HeaderService
  ) {
    console.log(`EmployeeCreateComponent.constructor()`);
  }

  public savaEmployee(myForm: NgForm): void {
    this.employee = {
      id: 0,
      firstName: myForm.value.inputFirstName,
      lastName: myForm.value.inputLastName,
      email: myForm.value.emailInput,
      profession: myForm.value.professionInput,
    };
    console.log(
      `EmployeeCreateComponent.savaEmployee()`,
      JSON.stringify(this.employee)
    );
    this.employeeService.saveEmployee(this.employee).subscribe(
      (response) => {
        this.headerService.setSucsessMessage(response.message);
        console.log(`EmployeeCreateComponent.savaEmployee() `, response);
      },
      (error) => {
        console.log(`EmployeeCreateComponent.savaEmployee() Erros `, error);
        this.headerService.setFailureMessage(error.error.message);
      }
    );
  }

  public clearFields(myForm: NgForm): void {
    console.log(`EmployeeCreateComponent.clearFields()`);
    myForm.reset();
  }

  ngOnInit(): void {}
}
