import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from '../services/data.service';
import { User } from '../model/user';

@Component({
  selector: 'app-create-data',
  templateUrl: './create-data.component.html',
  styleUrls: ['./create-data.component.scss'],
})
export class CreateDataComponent implements OnInit {
  constructor(private daaService: DataService) {}

  responseMsg;
  user: User;

  savaData(myForm: NgForm) {
    this.user = {
      id: -1,
      userName: myForm.value.nameInput,
      email: myForm.value.emailInput,
      userPwd: myForm.value.pwdInput,
      term: myForm.value.checkboxInput,
    };

    console.log(`FormComponent.savaData()`, JSON.stringify(this.user));
    this.daaService.saveData(this.user).subscribe(
      (response) => {
        this.responseMsg = response.message;
      },
      (error) => {
        console.log(`FormComponent.savaData() Erros `, error);
      }
    );
  }
  
  clearFields(myForm: NgForm) {
    console.log(`CreateDataComponent.clearFields()`);
    myForm.reset();
  }

  ngOnInit(): void {}
}
