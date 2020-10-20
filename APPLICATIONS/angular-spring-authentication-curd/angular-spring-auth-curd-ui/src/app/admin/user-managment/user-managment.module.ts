import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserUpdateComponent } from './user-update/user-update.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserRoutingModule } from './user-routing.module';
import { UserListComponent } from './user-list/user-list.component';

@NgModule({
  declarations: [
    UserCreateComponent,
    UserUpdateComponent,
    UserDetailsComponent,
    UserListComponent,
  ],
  imports: [CommonModule, FormsModule, UserRoutingModule],
})
export class UserManagmentModule {}
