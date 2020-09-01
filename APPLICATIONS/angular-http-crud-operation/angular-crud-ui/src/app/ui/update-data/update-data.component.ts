import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../model/user';
import { Data } from '../model/data';

@Component({
  selector: 'app-update-data',
  templateUrl: './update-data.component.html',
  styleUrls: ['./update-data.component.scss'],
})
export class UpdateDataComponent implements OnInit {
  id: number;
  name: string;
  email: string;
  pwd: string;
  term: boolean;
  user: User;
  responseMsg;

  constructor(
    public dataService: DataService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  updateData() {
      this.user = {
        id: this.id,
        userName: this.name,
        email: this.email,
        userPwd: this.pwd,
        term: this.term,
      }
      console.log(`${this.user}`);
      console.log(`FormComponent.savaData()`, JSON.stringify(this.user));
      this.dataService.updateData(this.id,this.user).subscribe(
        (response) => {
          this.responseMsg = response.message;
        },
        (error) => {
          console.log(`FormComponent.savaData() Erros `, error);
        }
      );
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.dataService.getData(this.id).subscribe((response: Data<User>) => {
      this.id = response.data.id;
      this.name = response.data.userName;
      this.email = response.data.email;
      this.pwd = response.data.userPwd;
      this.term = response.data.term;
    });
  }
}
