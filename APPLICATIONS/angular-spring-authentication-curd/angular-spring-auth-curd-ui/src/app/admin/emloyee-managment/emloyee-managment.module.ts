import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmployeeCreateComponent } from './employee-create/employee-create.component';
import { EmployeeUpdateComponent } from './employee-update/employee-update.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeListComponent } from './employee-list/employee-list.component';

@NgModule({
  declarations: [
    EmployeeCreateComponent,
    EmployeeUpdateComponent,
    EmployeeDetailsComponent,
    EmployeeListComponent,
  ],
  imports: [CommonModule, FormsModule, EmployeeRoutingModule],
})
export class EmloyeeManagmentModule {}
