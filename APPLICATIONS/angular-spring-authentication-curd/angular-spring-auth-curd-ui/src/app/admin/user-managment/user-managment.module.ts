import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserUpdateComponent } from './user-update/user-update.component';
import { UserDetailsComponent } from './user-details/user-details.component';

@NgModule({
  declarations: [
    UserCreateComponent,
    UserUpdateComponent,
    UserDetailsComponent,
  ],
  imports: [CommonModule, FormsModule],
})
export class UserManagmentModule {}
