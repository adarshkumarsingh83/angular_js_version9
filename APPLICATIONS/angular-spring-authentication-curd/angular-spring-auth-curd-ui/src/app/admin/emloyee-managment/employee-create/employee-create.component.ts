import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from '../../../app-services/beans/employee';
import { EmployeeService } from '../../../app-services/employee.service';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.scss'],
})
export class EmployeeCreateComponent implements OnInit {
  responseMsg: string;
  employee: Employee;

  constructor(private employeeService: EmployeeService) {}

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
        this.responseMsg = response.message;
      },
      (error) => {
        console.log(`EmployeeCreateComponent.savaEmployee() Erros `, error);
      }
    );
  }

  clearFields(myForm: NgForm) {
    console.log(`EmployeeCreateComponent.clearFields()`);
    myForm.reset();
  }

  ngOnInit(): void {}
}
