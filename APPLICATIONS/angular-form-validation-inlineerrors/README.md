# AngularFormValidationInlineerrors

### Application Generation 
* $ ng new angular-form-validation-inlineerrors
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

### To Generate Form Component
* $ ng g component EsparkForm
```
? Would you like to share anonymous usage data about this project with the Angular Team at
Google under Google’s Privacy Policy at https://policies.google.com/privacy? For more
details and how to change this setting, see http://angular.io/analytics. No
CREATE src/app/espark-form/espark-form.component.scss (0 bytes)
CREATE src/app/espark-form/espark-form.component.html (26 bytes)
CREATE src/app/espark-form/espark-form.component.spec.ts (657 bytes)
CREATE src/app/espark-form/espark-form.component.ts (295 bytes)
UPDATE src/app/app.module.ts (493 bytes)
```

### Adding Route to 
* src/app/app-routing.module.ts 
```
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EsparkFormComponent } from './espark-form/espark-form.component';

const routes: Routes = [
  { path: '' ,redirectTo: '' , pathMatch: 'full' },
  { path: 'form' , component: EsparkFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
```

### Importing FormModule 
* src/app/app.module.ts
```
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { EsparkFormComponent } from './espark-form/espark-form.component';

@NgModule({
  declarations: [
    AppComponent,
    EsparkFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

### Adding Form Templae 
* src/app/espark-form/espark-form.component.html
```
<div class="container">
    <!-- Content here -->
    <div class="alert alert-primary" role="alert">
      <h4 class="display-5"> WELCOME TO FORM MODULE</h4>
    </div>
    <form #myForm="ngForm" (ngSubmit)="savaData(myForm)">
      <div class="form-group">
        <label for="exampleInputName">Name </label>
        <input type="text" class="form-control" id="exampleInputName" aria-describedby="nameHelp"  name="nameInput" ngModel required #nameInput="ngModel"/>
        <small id="nameHelp" class="form-text text-muted" *ngIf="nameInput.touched && !nameInput.valid">Enter the Name Field Value </small>
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  name="emailInput" ngModel required #emailInput="ngModel"/>
        <small id="emailHelp" class="form-text text-muted" *ngIf="emailInput.touched && !emailInput.valid">Enter the Email Field Value</small>
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1" aria-describedby="pwdHelp" name="pwdInput" ngModel required #pwdInput="ngModel">
        <small id="pwdHelp" class="form-text text-muted" *ngIf="pwdInput.touched && !pwdInput.valid">Enter the Password Field Value</small>
      </div>
      <div class="form-group form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1"  aria-describedby="checkBoxHelp" name="checkboxInput" ngModel required #checkboxInput="ngModel" >
        <label class="form-check-label" for="exampleCheck1">Agreed on Contract</label>
        <small id="checkBoxHelp" class="form-text text-muted" *ngIf="checkboxInput.touched && !checkboxInput.valid">Check the Agreement </small>
      </div>
      <button type="submit" class="btn btn-primary" [disabled]="!myForm.valid">Submit</button>
    </form>
    <h3 class="display-5">
      {{data | json }}
    </h3>
  </div>

```

### Adding Request handling 
* src/app/espark-form/espark-form.component.ts 
```
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-espark-form',
  templateUrl: './espark-form.component.html',
  styleUrls: ['./espark-form.component.scss']
})
export class EsparkFormComponent implements OnInit {

  constructor() { }

  data;
  savaData(myForm: NgForm){
    console.log(myForm);
    console.log(myForm.value.nameInput);
		console.log(myForm.value.emailInput);
		console.log(myForm.value.pwdInput);
    console.log(myForm.value.checkboxInput);
    this.data = { "name": myForm.value.nameInput,"email": myForm.value.emailInput, "pwd": myForm.value.pwdInput, "term": myForm.value.checkboxInput}
    console.log(this.data);
	}
  ngOnInit(): void {
  }
}
```

### To Build the application 
* $ ng build 

### To Execute the Application 
* ng serve 

### Application Url 
* app module url 
    * http://localhost:4200
* form url 
    * http://localhost:4200/form 


