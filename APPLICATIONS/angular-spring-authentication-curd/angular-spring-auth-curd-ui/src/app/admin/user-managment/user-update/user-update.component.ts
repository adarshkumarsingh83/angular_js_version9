import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../../app-services/beans/user';
import { Data } from '../../../app-services/beans/data';
import { UsersService } from '../../../app-services/users.service';
import { AppComponent } from '../../../app.component';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.scss'],
})
export class UserUpdateComponent implements OnInit {
  id: number;
  userName: string;
  userPwd: string;
  email: string;
  userRoles: string;
  user: User;

  constructor(
    private usersService: UsersService,
    private route: ActivatedRoute,
    private appComponent: AppComponent
  ) {}

  public updateUser(): void {
    this.user = {
      id: this.id,
      userName: this.userName,
      userPwd: this.userPwd,
      email: this.email,
      userRoles: [this.userRoles],
      isAdmin: this.userRoles == 'ADMIN',
    };

    console.log(`UserUpdateComponent.updateUser()`, this.user);
    this.usersService.updateUser(this.id, this.user).subscribe(
      (response) => {
        this.appComponent.setMessageSucess(response.message);
        console.log(`UserUpdateComponent.updateUser() `, response.message);
      },
      (error) => {
        console.log(`UserUpdateComponent.updateUser() Erros `, error);
        this.appComponent.setMessageFailure(error.error.message);
      }
    );
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.usersService.getUser(this.id).subscribe(
      (response: Data<User>) => {
        console.log(`UserUpdateComponent.getUser()  `, response);
        this.id = response.data.id;
        this.userName = response.data.userName;
        this.userPwd = response.data.userPwd;
        this.email = response.data.email;
        this.userRoles = response.data.userRoles[0];
        this.appComponent.setMessageSucess(response.message);
      },
      (error) => {
        console.log(`UserUpdateComponent.getUser() Erros `, error);
        this.appComponent.setMessageFailure(error.error.message);
      }
    );
  }
}
