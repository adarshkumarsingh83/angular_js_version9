import { Component, OnInit } from '@angular/core';
import { SecurityUtilService } from '../../security/security-util.service';
import { AppComponent } from '../../app.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss'],
})
export class AdminHomeComponent implements OnInit {
  userName: string;
  message: string;

  constructor(
    private router: Router,
    private securityUtilService: SecurityUtilService,
    private appComponent: AppComponent
  ) {
    console.log(`AdminHomeComponent.constructor()`);
    const userContext = securityUtilService.getFromStorge();
    this.userName = userContext.userName.toUpperCase();
  }

  public employees(): void {
    console.log(`AdminHomeComponent.employees()`);
    this.router.navigate(['/admin/employees-mgmt/employees'], {
      queryParams: { action: 'employees-mgmt' },
    });
  }

  public users(): void {
    console.log(`AdminHomeComponent.users()`);
    this.router.navigate(['/admin/users-mgmt/users'], {
      queryParams: { action: 'users-mgmt' },
    });
  }

  ngOnInit(): void {}
}
