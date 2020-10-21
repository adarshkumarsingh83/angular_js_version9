import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../../../app-services/beans/employee';
import { EmployeeService } from '../../../app-services/employee.service';
import { AppComponent } from '../../../app.component';

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
    private router: Router,
    private appComponent: AppComponent
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.employeeService.getEmployee(this.id).subscribe(
      (response) => {
        this.appComponent.setMessageSucess(response.message);
        this.employee = response.data;
        console.log(`EmployeeCreateComponent.getEmployee()  `, this.employee);
      },
      (error) => {
        console.log(`EmployeeCreateComponent.getEmployee() Erros `, error);
        this.appComponent.setMessageFailure(error.error.message);
      }
    );
  }
}
