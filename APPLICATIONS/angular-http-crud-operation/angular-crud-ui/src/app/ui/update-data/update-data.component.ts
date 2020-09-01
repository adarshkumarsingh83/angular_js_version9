import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-data',
  templateUrl: './update-data.component.html',
  styleUrls: ['./update-data.component.scss']
})
export class UpdateDataComponent implements OnInit {

  constructor() { }

  id='';
  name='';
  email='';
  pwd='';
  checkbox='';
  updateData(){

    console.log(`formValue =>  ${this.id} ${this.name} ${this.email} ${this.pwd} ${this.checkbox}`)

  }

  ngOnInit(): void {
  }

}
