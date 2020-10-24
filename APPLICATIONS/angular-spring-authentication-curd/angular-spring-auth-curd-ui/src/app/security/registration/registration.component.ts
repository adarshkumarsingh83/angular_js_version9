import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from '../../app-services/authentication.service';
import { Router } from '@angular/router';
import { User } from 'src/app/app-services/beans/user';
import { HeaderService, PageType } from '../../app-services/header.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  user: User;

  constructor(
    private router: Router,
    private headerService: HeaderService,
    private authenticationService: AuthenticationService
  ) {}

  public registerUser(myForm: NgForm): void {
    console.log(`RegistrationComponent.registerUser()`);
    this.user = {
      id: 0,
      userName: myForm.value.nameInput,
      email: myForm.value.emailInput,
      userPwd: myForm.value.pwdInput,
      isAdmin: false,
      userRoles: ['GUEST'],
    };
    this.authenticationService.registerUser(this.user).subscribe(
      (response) => {
        this.user = response.data;
        console.log(`RegistrationComponent.registerUser()`, response);
        this.headerService.setSucsessMessage(response.message);
      },
      (error) => {
        console.log(`RegistrationComponent.registerUser() Erros `, error);
        this.headerService.setFailureMessage(error.error.message);
      }
    );
    this.headerService.calculateHeaderMenu(PageType.LOGIN_PAGE, null);
    this.router.navigate(['/login'], {
      queryParams: { action: 'new-registration' },
    });
  }

  cancelRegistrattion() {
    this.headerService.setInfoMessage('Registration Cancel');
    console.log(`RegistrationComponent.cancelRegistrattion()`);
    this.headerService.calculateHeaderMenu(PageType.LOGIN_PAGE, null);
    this.router.navigate(['/login'], {
      queryParams: { action: 'cancel-registration' },
    });
  }

  ngOnInit(): void {}
}
