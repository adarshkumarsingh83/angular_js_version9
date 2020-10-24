import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/app-services/beans/user';
import { UsersService } from '../../../app-services/users.service';
import { HeaderService } from '../../../app-services/header.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  usersList: User[];

  constructor(
    private usersService: UsersService,
    private headerService: HeaderService
  ) {
    console.log(`UserListComponent.constructor()`);
  }

  public deleteUsers(userId: number): void {
    console.log(`UserListComponent.deleteUsers()`);
    this.usersService.deleteUser(userId).subscribe(
      (response) => {
        this.headerService.setSucsessMessage(response.message);
        console.log(`UserListComponent.deleteUser()`, response.data);
        this.loadUsers();
      },
      (error) => {
        console.log(`EmployeeListComponent.getEmployees() Errors `, error);
        this.headerService.setFailureMessage(error.error.message);
      }
    );
  }

  ngOnInit(): void {
    console.log(`UserListComponent.ngOnInit()`);
    this.loadUsers();
  }

  public loadUsers(): void {
    console.log(`UserListComponent.loadUsers()`);
    this.usersService.getUsers().subscribe(
      (response) => {
        this.usersList = response.data;
        this.headerService.setSucsessMessage(response.message);
        console.log(`UserListComponent.loadUsers()`, response);
      },
      (error) => {
        console.log(`UserListComponent.loadUsers() Errors `, error);
        this.headerService.setFailureMessage(error.error.message);
      }
    );
  }
}
