import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    private appComponent: AppComponent
  ) {
    console.log(`UserDetailsComponent.constructor() `);
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.userService.getUser(this.id).subscribe(
      (response) => {
        console.log(`UserDetailsComponent.getUser() `, response);
        this.appComponent.setMessageSucess(response.message);
        this.user = response.data;
      },
      (error) => {
        console.log(`UserDetailsComponent.getUser() Erros `, error);
        this.appComponent.setMessageFailure(error.error.message);
      }
    );
  }
}
