import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from '../../app-services/authentication.service';
import { Router } from '@angular/router';
import { AppComponent } from '../../app.component';
import { User } from 'src/app/app-services/beans/user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  user: User;
  messageSucess: String;
  messageFailure: String;

  constructor(
    private router: Router,
    private appComponent: AppComponent,
    private authenticationService: AuthenticationService
  ) {
    this.appComponent.setLogoutButtonVisible(false);
    this.appComponent.setRegistrationButtonVisible(false);
  }

  registerUser(myForm: NgForm) {
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
        this.messageSucess = response.message;
        console.log(`RegistrationComponent.registerUser()`, this.user);
      },
      (error) => {
        console.log(`RegistrationComponent.registerUser() Erros `, error);
        this.messageFailure = error.error.message;
      }
    );
    console.log(this.user);
    this.appComponent.setLogoutButtonVisible(false);
    this.appComponent.setRegistrationButtonVisible(true);
    this.router.navigate(['/login'], {
      queryParams: { action: 'new-registration' },
    });
  }

  cancelRegistrattion() {
    this.appComponent.setLogoutButtonVisible(false);
    this.appComponent.setRegistrationButtonVisible(true);
    this.router.navigate(['/login'], {
      queryParams: { action: 'cancel-registration' },
    });
  }

  ngOnInit(): void {}
}
