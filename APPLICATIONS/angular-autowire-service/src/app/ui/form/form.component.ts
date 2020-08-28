import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {DataService} from '../../service/data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor(private daaService: DataService) { }

  data;
  savaData(myForm: NgForm){
    const dataSample = { "name": myForm.value.nameInput,"email": myForm.value.emailInput, "pwd": myForm.value.pwdInput, "term": myForm.value.checkboxInput}
    console.log(`FormComponent.savaData() before daaService.storeOnLocalStorage()  `+ JSON.stringify(dataSample));
    this.daaService.storeOnLocalStorage(dataSample);
    this.data = this.daaService.getFromLocalStorage();
    console.log(`FormComponent.savaData() after daaService.getFromLocalStorage()   `+ JSON.stringify(this.data));
  }
  
  ngOnInit(): void {
  }

}
