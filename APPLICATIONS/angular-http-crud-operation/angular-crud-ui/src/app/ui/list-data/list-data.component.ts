import { Component, OnInit } from '@angular/core';
import {DataService} from '../services/data.service';
import { Data } from '../model/data';
import { User } from '../model/user';

@Component({
  selector: 'app-list-data',
  templateUrl: './list-data.component.html',
  styleUrls: ['./list-data.component.scss']
})
export class ListDataComponent implements OnInit {

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

}
