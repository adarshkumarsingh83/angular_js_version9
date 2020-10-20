import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/app-services/beans/user';
import { UsersService } from '../../../app-services/users.service';
import { AppComponent } from '../../../app.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  message: string;
  usersList: User[];

  constructor(
    private usersService: UsersService,
    private appComponent: AppComponent
  ) {}

  deleteUsers(userId: number): void {
    console.log(`UserListComponent.deleteUsers()`);
  }

  ngOnInit(): void {
    this.appComponent.setCommonHomeVisible(true);
    this.appComponent.setLogoutButtonVisible(true);
    this.appComponent.setRegistrationButtonVisible(false);
    this.usersService.getUsers().subscribe(
      (response) => {
        this.usersList = response.data;
        this.message = response.message;
        console.log(`UserListComponent.getUsers()`, this.usersList);
      },
      (error) => {
        console.log(`UserListComponent.getUsers() Errors `, error);
      }
    );
  }
}
