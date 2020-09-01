import { Component, OnInit } from '@angular/core';
import {DataService} from './services/data.service';
import { User } from './model/user';

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.scss']
})
export class UiComponent implements OnInit {

  responseMsg;
  responseData: User[];

  constructor(private daaService: DataService) {
    console.log(`FormComponent constructor()`);
  }

  ngOnInit(): void {
    console.log(`ListDataComponent.ngOnInit()`);
    this.fetchData();
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

  deleteUser(id: number){
    this.daaService.deleteData(id).subscribe(
      (response) => {
        this.responseMsg = response.message;
        console.log(`FormComponent.fetchData()`,this.responseData);
      },
      (error) => {
        console.log(`FormComponent.fetchData() Erros `, error);
      }
    );
    this.fetchData();
  }

}
