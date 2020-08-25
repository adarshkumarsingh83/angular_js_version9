# AngularReactivefromValidationHighlighterrors

### Application Generation 
* $ ng new angular-reactivefrom-validation-highlighterrors
```
? Would you like to add Angular routing? Yes
? Which stylesheet format would you like to use? 
  CSS 
❯ SCSS   [ https://sass-lang.com/documentation/syntax#scss                ] 
  Sass   [ https://sass-lang.com/documentation/syntax#the-indented-syntax ] 
  Less   [ http://lesscss.org                                             ] 
  Stylus [ http://stylus-lang.com                                         ] 
```
### To Install bootstrap and proper
* $ npm i bootstrap jquery propper --save

### Import path
* project/angular.json
    * projects->project-name->architect->build->option->style
    * projects->project-name->architect->build->option->script
```
"styles":[
     	"src/styles.scss",
     	"node_modules/bootstrap/dist/css/bootstrap.min.css"
    ],
    "scripts":[
        "node_modules/jquery/dist/jquery.min.js",
		"node_modules/bootstrap/dist/js/bootstrap.min.js"
    ]
```

### Add ReactiveFormsModule in
* project/src/app/app.module.ts
```
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';
import { InvalidUrlComponent } from './invalid-url/invalid-url.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    InvalidUrlComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

### Generate invalid url component 
* $ ng g component InvalidUrl
```
CREATE src/app/invalid-url/invalid-url.component.scss (0 bytes)
CREATE src/app/invalid-url/invalid-url.component.html (26 bytes)
CREATE src/app/invalid-url/invalid-url.component.spec.ts (657 bytes)
CREATE src/app/invalid-url/invalid-url.component.ts (295 bytes)
UPDATE src/app/app.module.ts (646 bytes)
```

### Generate the form component 
* ng g component form
```
? Would you like to share anonymous usage data about this project with the Angular Team at
Google under Google’s Privacy Policy at https://policies.google.com/privacy? For more
details and how to change this setting, see http://angular.io/analytics. No
CREATE src/app/form/form.component.scss (0 bytes)
CREATE src/app/form/form.component.html (19 bytes)
CREATE src/app/form/form.component.spec.ts (614 bytes)
CREATE src/app/form/form.component.ts (268 bytes)
UPDATE src/app/app.module.ts (546 bytes)
```

### add the form template 
* src/app/form/form.component.html
```
<div class="container">
    <div class="alert alert-primary" role="alert">
      <h4 class="display-5">WELCOME TO REACTIVE FORM MODULE</h4>
    </div>
  
    <form  [formGroup]="myForm" (ngSubmit)="postData()">
      <div class="form-group">
          <label for="exampleInputName">Name</label>
          <input type="text" class="form-control" id="exampleInputName" aria-describedby="nameHelp" formControlName="nameField">
          <small id="nameHelp" class="form-text text-muted">We'll never share your Name with anyone else.</small>
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" formControlName="emailField">
          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1" formControlName="pwdField">
        </div>
        <div class="form-group form-check">
          <input type="checkbox" class="form-check-input" id="termCheck1" formControlName="termField">
          <label class="form-check-label" for="exampleCheck1">Term & Condition</label>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
     </form>
     <h3 class="display-5">
      {{data | json }}
    </h3>
  </div>
```

### Add the requestt and form valdiation code 
* src/app/form/form.component.ts
```
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms'; 

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  myForm: FormGroup; //same form name as tempate form name

  constructor(private formBuilder: FormBuilder){
    this.myForm = formBuilder.group({
      nameField: ['', Validators.required,Validators.pattern('^[a-zA-Z]+$')],
      emailField: ['', Validators.required],
      pwdField: ['', Validators.required, Validators.minLength(5),Validators.maxLength(20)],
      termField: new FormControl()
    })
  }
  
  data;
  postData(){
    console.log(this.myForm);
    console.log(this.myForm.value);
    console.log(this.myForm.value.nameField);
    console.log(this.myForm.value.emailField);
    console.log(this.myForm.value.pwdField);
    console.log(this.myForm.value.termField);
    this.data = { "name": this.myForm.value.nameField,"email": this.myForm.value.emailField,"pwd": this.myForm.value.pwdField, "term": this.myForm.value.termField}
    console.log(this.data);
 }

  ngOnInit(): void {
  }
}
```

### add the css for error highliht 
* src/app/form/form.component.scss
```
input.ng-invalid.ng-touched{
    background-color: gold;
    border: 1px solid red;
}
```

### To add the routing 
* src/app/app.module.ts
```
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';
import { InvalidUrlComponent } from './invalid-url/invalid-url.component';

const routes: Routes = [
  { path: '' ,redirectTo: '' , pathMatch: 'full' },
  { path: 'form' , component: FormComponent},
  { path: '**' , component: InvalidUrlComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
```



### To Build the appication 
* $ ng build 

### to Execute the application 
* $ ng serve 

### Appliation Url 
* app module url 
    * http://localhost:4200
* form url 
    * http://localhost:4200/form 