import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms'; 

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  //same form name as tempate form name
  myForm: FormGroup; 
  formStatus='';

  constructor(private formBuilder: FormBuilder){
    this.myForm = formBuilder.group({
      nameField: ['', Validators.required],
      emailField: ['', [Validators.required,Validators.email]],
      pwdField: ['', Validators.required],
      termField: ['', Validators.requiredTrue],
      items: this.formBuilder.array([
        this.formBuilder.group({
          itemId: ['1'],
          itemName: ['some name'],
          itemDesc: ['some description'],
          itemDone: ['',Validators.requiredTrue]
        })
      ])
    });
  }
  
  data;
  postData(){
    console.log(this.myForm.value.items);
    this.data = { "name": this.myForm.value.nameField,"email": this.myForm.value.emailField,"pwd": this.myForm.value.pwdField, "term": this.myForm.value.termField,"items": this.myForm.value.items}
    console.log(this.data);
 }

  ngOnInit(): void {
    
  }

  removeItem(index){
    const arrayItem = this.items.length;
    this.items.removeAt(index);
  }
  
  get items(){
    return this.myForm.get('items') as FormArray;
  }

 addRowItem(){
       const itemId  = this.items.length; 
       const newItem =  this.formBuilder.group({
                     itemId: [itemId+1],
                     itemName: [''],
                     itemDesc: [''],
                     itemDone: ['',Validators.requiredTrue]
                })

    this.items.push(newItem);  	      	
 }

  resetForm(){
    this.myForm.reset();  
  }
}