import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmployeeCreateComponent } from './employee-create/employee-create.component';
import { EmployeeUpdateComponent } from './employee-update/employee-update.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';

@NgModule({
  declarations: [
    EmployeeCreateComponent,
    EmployeeUpdateComponent,
    EmployeeDetailsComponent,
  ],
  imports: [CommonModule, FormsModule],
})
export class EmloyeeManagmentModule {}
