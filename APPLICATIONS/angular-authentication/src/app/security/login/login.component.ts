import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from '../../app-services/data.service';
import { Router } from '@angular/router';
import { SecurityUtilService } from '../security-util.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  dataService: DataService;
  router: Router;
  securityUtilService: SecurityUtilService;

  constructor(
    dataService: DataService,
    router: Router,
    securityUtilService: SecurityUtilService
  ) {
    this.dataService = dataService;
    this.router = router;
    this.securityUtilService = securityUtilService;
  }

  data;
  login(myForm: NgForm) {
    const requestedUrl = this.router.url;
    this.data = { name: myForm.value.nameInput, pwd: myForm.value.pwdInput };
    const user = this.dataService.getFromStorge(
      myForm.value.nameInput,
      myForm.value.pwdInput
    );
    if (user != null) {
      console.log(user);
      this.securityUtilService.storeOnLocalStorage({
        userName: user.userName,
        email: user.email,
        isAdmin: user.isAdmin,
        isAuthenticate: true,
      });

      if (user.isAdmin == true) {
        console.log(user.isAdmin);
        this.router.navigate(['/admin'], {
          queryParams: { name: user.userName },
        });
      } else if (user.isAdmin == false) {
        console.log(user.isAdmin);
        this.router.navigate(['/user'], {
          queryParams: { name: user.userName },
        });
      }
    } else {
      this.router.navigate(['/login']);
    }
  }
  ngOnInit(): void {}
}
