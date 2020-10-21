import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../../../app-services/beans/user';
import { UsersService } from '../../../app-services/users.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss'],
})
export class UserCreateComponent implements OnInit {
  responseMsg: string;
  user: User;

  constructor(private userService: UsersService) {}

  public savaEmployee(myForm: NgForm): void {
    this.user = {
      id: 0,
      userName: myForm.value.inputUserName,
      userPwd: myForm.value.inputUserPwd,
      email: myForm.value.emailInput,
      userRoles: [myForm.value.userRoleInput],
      isAdmin: myForm.value.userRoleInput == 'ADMIN',
    };
    console.log(
      `EmployeeCreateComponent.savaEmployee()`,
      JSON.stringify(this.user)
    );
    this.userService.saveUser(this.user).subscribe(
      (response) => {
        this.responseMsg = response.message;
      },
      (error) => {
        console.log(`UserCreateComponent.savaEmployee() Erros `, error);
      }
    );
  }

  clearFields(myForm: NgForm) {
    console.log(`UserCreateComponent.clearFields()`);
    myForm.reset();
  }

  ngOnInit(): void {}
}
