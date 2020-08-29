import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  responseMsg;
  responseData;

  constructor(private daaService: DataService) {
    console.log(`FormComponent constructor()`);
  }

  ngOnInit(): void {
    console.log(`FormComponent.ngOnInit()`);
    this.fetchData();
  }

  savaData(myForm: NgForm) {
    const dataSample = {
      userName: myForm.value.nameInput,
      email: myForm.value.emailInput,
      userPwd: myForm.value.pwdInput,
      term: myForm.value.checkboxInput,
    };
    console.log(`FormComponent.savaData()`, JSON.stringify(dataSample));
    this.daaService.storeOnStorage(dataSample).subscribe(
      (response) => {
        this.responseMsg = response.message;
      },
      (error) => {
        console.log(`FormComponent.savaData() Erros `, error);
      }
    );

    this.fetchData();
    console.log(`FormComponent.savaData() `, JSON.stringify(this.responseData));
  }

  fetchData() {
    this.daaService.getDataList().subscribe(
      (response) => {
        this.responseData = response.data;
        this.responseMsg = response.message;
        console.log(`FormComponent.fetchData()`,this.responseData);
      },
      (error) => {
        console.log(`FormComponent.fetchData() Erros `, error);
      }
    );
  }

  deleteUser(id: string) {
    console.log(`FormComponent.deleteUser() ${id}`);
    this.daaService.deleteFromStorage(id);
    this.fetchData();
  }

  updateUser(id: string, data: object) {
    console.log(`FormComponent.updateUser() ${id}`);
  }

  clearFields(myForm: NgForm) {
    console.log(`FormComponent.clearFields()`);
    myForm.reset();
  }
}
