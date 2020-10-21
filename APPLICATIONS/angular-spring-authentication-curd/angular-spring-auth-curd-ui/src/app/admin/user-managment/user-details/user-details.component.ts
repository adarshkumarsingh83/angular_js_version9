import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppComponent } from '../../../app.component';
import { User } from '../../../app-services/beans/user';
import { UsersService } from '../../../app-services/users.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent implements OnInit {
  id: number;
  user: User;

  constructor(
    private userService: UsersService,
    private route: ActivatedRoute,
    private router: Router,
    private appComponent: AppComponent
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.userService.getUser(this.id).subscribe(
      (response) => {
        this.appComponent.setMessageSucess(response.message);
        this.user = response.data;
        console.log(`UserDetailsComponent.getUser() `, this.user);
      },
      (error) => {
        console.log(`UserDetailsComponent.getUser() Erros `, error);
        this.appComponent.setMessageFailure(error.error.message);
      }
    );
  }
}
