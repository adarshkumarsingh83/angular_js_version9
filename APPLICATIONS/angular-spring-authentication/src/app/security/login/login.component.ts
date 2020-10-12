import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from '../../app-services/data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  dataService: DataService;
  router: Router;

  constructor(dataService: DataService, router: Router) {
    this.dataService = dataService;
    this.router = router;
  }

  data;
  login(myForm: NgForm) {
    this.data = { name: myForm.value.nameInput, pwd: myForm.value.pwdInput };
    const user = this.dataService.getFromStorge(
      myForm.value.nameInput,
      myForm.value.pwdInput
    );
    if (user != null) {
      console.log(user);
      if (user.isAdmin == true) {
        console.log(user.isAdmin);
        this.router.navigate(['/admin'], { queryParams: { valid: 'true' } });
      } else {
        console.log(user.isAdmin);
        this.router.navigate(['/user'], { queryParams: { valid: 'true' } });
      }
    } else {
      this.router.navigate(['/login']);
    }
  }
  ngOnInit(): void {}
}
