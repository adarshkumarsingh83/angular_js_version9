# Angular Forms 
---
## BootStrap in Angular 

## [ANGULAR BOOTSTRAP CDN EXAMPLE ](https://github.com/adarshkumarsingh83/angular_js_version9/tree/master/APPLICATIONS/angular-form-bootstrap-cdn)
* From CDN
	* vist to https://getbootstrap.com/
	* find link for CSS
	* find link for Js 
	* Copy link for CSS & JS in the project/src/index.html
	* use bootstrap component into the applcation 

## [ANGULAR BOOTSTRAP NPM EXAMPLE ](https://github.com/adarshkumarsingh83/angular_js_version9/tree/master/APPLICATIONS/angular-form-bootstrap-npm)
* From Npm 
	* Install bootstrap 
		* npm i bootstrap@3 --save 
		* import bootstrap style and script we have to do manually otherwise it will not work
	* Install using npm in single command 
		* latest version 
			* npm i bootstrap jquery propper --save 
		* To specific version 
			* npm i bootstrap@x jquery@x propper@x --save 

* NOTE IMPORT THE PATH 
* project/angular.json tag where we have to add path for importing 
	* projects->project-name->architect->build->option->style
	* projects->project-name->architect->build->option->script
	* projects->project-name->test->build->option->style
	* projects->project-name->test->build->option->script
    
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

---
## [ANGULAR BASIC FORM WITH BOOTSTRAP EXAMPLE](https://github.com/adarshkumarsingh83/angular_js_version9/tree/master/APPLICATIONS/angular-form-basicfrom)
## Form in Angular 
* Type of Form 
	* Template Form 
		* import FormsModule
		* valdiation and form are defined in template file. 
		* good for static and fixed elements
	* Reactive Form 
		* import ReactiveFormsModule 
		* form element and validation are handle in component 
		* formGroup and formcConroll will be used 
		* regular expression pattern of error handling 
		* for dynamic form and advance vallidations 


## Form Validation in Template Form 
* Angular state information 
	* ng-touched 
	* ng-untouched 
	* ng-dirty
	* ng-pristne
	* ng-valid
	* ng-invalid 


## [ANGULAR FORM TEMPLATE EXAMPLE ](https://github.com/adarshkumarsingh83/angular_js_version9/tree/master/APPLICATIONS/angular-form-templateform)
## Template Form 
	
* import form module 
* To Generate a form 
	* ng g c form 

* Import the FormModule in app.modules
* project/src/app/app.module.ts
```
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

* Add the routes with form compoent
* project/src/app/app.routing.module.ts
```
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';

const routes: Routes =[
     { path: '' ,redirectTo: 'rnroll' , pathMach: 'full' },
     { path: 'form' , component: FormComponent},
     { path: '**' ,redirectTo: 'rnroll' , pathMach: 'full' }
]

@NgModule(
      imports: [RouterModule.forRoot(routes)],
      exports: [RouterModule]
	)
export class AppRoutingModule{

}
```

* Add the html5  & bootstrap form into the form.comonent.html 
* #signInForm="ngForm" (ngSubmit)="savaData(signInForm)" add into the form 
* name="emailField" ngModel for fields in form 
* project/src/app/form/form.component.html
* copy forom http://getbootstrap.com simple form 
```
<div>
    <h1>ESPARK ANGULARJS FORM COMPONENT</h1>
    <form #signInForm="ngForm" (ngSubmit)="savaData(signInForm)" >
	  <div class="form-group">
	    <label for="exampleInputEmail1">Email address</label>
	    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="emailField" ngModel>
	    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
	  </div>
	  <div class="form-group">
	    <label for="exampleInputPassword1">Password</label>
	    <input type="password" class="form-control" id="exampleInputPassword1" name="passwordField" ngModel>
	  </div>
	  <div class="form-group form-check">
	    <input type="checkbox" class="form-check-input" id="exampleCheck1" name="termsField" ngModel>
	   <label class="form-check-label" for="exampleCheck1">Term & Condition</label>
	  </div>
	  <button type="submit" class="btn btn-primary">Submit</button>
   </form>
</div>

```

* Add the submit method into the form.component.ts for handlign request
* project/src/app/form/form.component.ts
```
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-view'
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit{
  title = 'form';

	savaData(signInForm: NgForm){
		console.log(signInForm);
		console.log(signInForm.value.emailField);
		console.log(signInForm.value.passwordField);
		console.log(signInForm.value.termsField);
	}

	ngOnInit():void{
  	
    }
 
}

```
* Template Form 
	* input type="text"
	* input type="radio"
	* input type="checkbox"
	* input type="email"
	* Textarea 
	* Selectt Drop Down 

---

* Highlight the erros 
 ```
input.ng-invalid.ng-touched{
    background-color: gold;
    border: 1px solid red;
}
 ``` 
* Disabling the submit button 
	* [disabled]="!formName.valid"
* Show Hidden inline error msg 
	* <span *ngIf="name.touched && !name.valie"> plese ener name</span>


### Example of Highlight the erros 
## [ANGULAR VALIDATION HIGHLIGHT ERROR EXAMPLE ](https://github.com/adarshkumarsingh83/angular_js_version9/tree/master/APPLICATIONS/angular-form-validation-highlighterros)
* project/src/app/form/form.component.html
* copy forom http://getbootstrap.com simple form 
```
<div>
    <h1>ESPARK ANGULARJS FORM COMPONENT</h1>
    <form #signInForm="ngForm" (ngSubmit)="savaData(signInForm)" >
	  <div class="form-group">
	    <label for="exampleInputEmail1">Email address</label>
	    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="emailField" ngModel required>
	    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
	  </div>
	  <div class="form-group">
	    <label for="exampleInputPassword1">Password</label>
	    <input type="password" class="form-control" id="exampleInputPassword1" name="passwordField" ngModel required>
	  </div>
	  <div class="form-group form-check">
	    <input type="checkbox" class="form-check-input" id="exampleCheck1" name="termsField" ngModel required>
	    <label class="form-check-label" for="exampleCheck1">Term & Condition</label>
	  </div>
	  <button type="submit" class="btn btn-primary">Submit</button>
   </form>
</div>

```

* project/src/app/form/form.component.scss
```
input.ng-invalid.ng-touched{
    background-color: gold;
    border: 1px solid red;
}
```

### Example Disabling the submit button 
## [ANGULAR FORM VALIDATION DISABLING SUBMIT BUTTON EXAMPLE ](https://github.com/adarshkumarsingh83/angular_js_version9/tree/master/APPLICATIONS/angular-form-validation-disablingformsubmit)

* 
* project/src/app/form/form.component.html
* copy forom http://getbootstrap.com simple form 
```
<div>
    <h1>ESPARK ANGULARJS FORM COMPONENT</h1>
    <form #signInForm="ngForm" (ngSubmit)="savaData(signInForm)" >
	  <div class="form-group">
	   <span *ngIf="emailField.touched && !emailField.valie"> plese enter emailField</span>
	    <label for="exampleInputEmail1">Email address</label>
	    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="emailField"  ngModel required>
	    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
	  </div>
	  <div class="form-group">
	    <span *ngIf="passwordField.touched && !passwordField.valie"> plese enter passwordField</span>
	    <label for="exampleInputPassword1">Password</label>
	    <input type="password" class="form-control" id="exampleInputPassword1" name="passwordField"  ngModel required>
	  </div>
	  <div class="form-group form-check">
	   <span *ngIf="termsField.touched && !termsField.valie"> plese select  termsField</span>
	    <input type="checkbox" class="form-check-input" id="exampleCheck1" name="termsField"  ngModel required>
	   <label class="form-check-label" for="exampleCheck1">Term & Condition</label>
	  </div>
	  <button type="submit" class="btn btn-primary" [disabled]="!signInForm.valid" >Submit</button>
   </form>
</div>

```

## [ANGULAR INLINE VALIDATION ERROS EXAMPLE ](https://github.com/adarshkumarsingh83/angular_js_version9/tree/master/APPLICATIONS/angular-form-validation-inlineerrors)
### Example Show Hidden inline error msg 

* project/src/app/form/form.component.html
* copy forom http://getbootstrap.com simple form 
```
<div>
    <h1>ESPARK ANGULARJS FORM COMPONENT</h1>
    <form #signInForm="ngForm" (ngSubmit)="savaData(signInForm)" >
	  <div class="form-group">
	    <label for="exampleInputEmail1">Email address</label>
	    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailError" name="emailField" ngModel required #emailField="ngModel">
	    <small id="emailError" class="form-text text-muted" *ngIf="emailField.touched && !emailField.valid">Ener the Email Field Value </small>
	  </div>
	  <div class="form-group">
	    <label for="exampleInputPassword1">Password</label>
	    <input type="password" class="form-control" id="exampleInputPassword1" aria-describedby="pwdError" name="passwordField" ngModel required #passwordField="ngModel">
 		<small id="pwdError" class="form-text text-muted" *ngIf="passwordField.touched && !passwordField.valid">Ener the Pwd Field Value </small>
	  </div>
	  <div class="form-group form-check">
	    <input type="checkbox" class="form-check-input" id="exampleCheck1" name="termsField" ngModel required #termsField="ngModel">
	   <label class="form-check-label" for="exampleCheck1">Term & Condition</label>
	  </div>
	  <button type="submit" class="btn btn-primary" [disabled]="!signInForm.valid" >Submit</button>
   </form>
</div>

NOTE: template binding #emailField="ngModel" , #passwordField="ngModel" ,  #termsField="ngModel"
```

---
## [ANGULAR REACTIVE BASIC FORM EXAMPLE](https://github.com/adarshkumarsingh83/angular_js_version9/tree/master/APPLICATIONS/angular-form-reactive-basic)
## Reactive Form 
* import the ReactiveFormMOdule in the app.module.ts 
* crate a from in app.component.html 
* FormGroup for form directive 
* formControllGroup for fields in form 
* To Generate a form component
	* ng g component form

* add the routes with component
* project/src/app/app.routing.module.ts
```
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';

const routes: Routes =[
     { path: '' ,redirectTo: '' , pathMach: 'full' },
     { path: 'form' , component: FormComponent},
     { path: '**' ,redirectTo: 'rnroll' , pathMach: 'full' }
]

@NgModule(
      imports: [RouterModule.forRoot(routes)],
      exports: [RouterModule]
	)
export class AppRoutingModule{

}
```	
* import the reactive app module 
* project/src/app/app.module.ts
```
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './espark-form/espark-form.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent
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

* create a form in the html 
* assigne a form group to the form  [formGroup]="myForm"
* project/src/app/form/form.component.html
```
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

```

* project/src/app/form/form.component.ts

```
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms'; 

@Component({
  selector: 'app-form-view'
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit{
  
  myForm: FromGroup; //same form name as tempate form name 

  constructor(private formBuilder: FormBuilder){
    this.myForm = formBuilder.group({
      nameField: new FormControl(),
      emailField: new FormControl(),
      pwdField: new FormControl(),
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

  ngOnInit():void{

  }
}
```

---

### Validaton on Reactive Form 



* Highlight the erros 
	*  add the css for error highliht 
		* src/app/form/form.component.scss
	```
	input.ng-invalid.ng-touched{
	    background-color: gold;
	    border: 1px solid red;
	}
	```
	* Add the requestt and form valdiation code 
		* src/app/form/form.component.ts
 ```

  constructor(private formBuilder: FormBuilder){
    this.myForm = formBuilder.group({
      nameField: ['', Validators.required,Validators.pattern('^[a-zA-Z]+$')],
      emailField: ['', Validators.required],
      pwdField: ['', Validators.required, Validators.minLength(5),Validators.maxLength(20)],
      termField: new FormControl()
    })
  }

 ``` 

---

* Disabling the submit button 
	* [disabled]="!formName.valid"
* Show Hidden inline error msg 
	* <span *ngIf="myForm.get('name').hasErros('required')"> plese ener name</span>


### Example Highlight the erros 
### [ANGULAR REACTIVE FORM HIGHLIGHT ERROR EXAMPLE](https://github.com/adarshkumarsingh83/angular_js_version9/tree/master/APPLICATIONS/angular-reactivefrom-validation-highlighterrors)
* add the form template 
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

* project/src/app/form/form.component.scss
```
input.ng-invalid.ng-touched{
    background-color: gold;
    border: 1px solid red;
}
```
* project/src/app/form/form.component.ts

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
      termField: ['', Validators.requiredTrue]
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

### Example Disabling the submit button 
### [ANGULARJS DISABLING FORM SUBMIT BUTTON EXAMPLE](https://github.com/adarshkumarsingh83/angular_js_version9/tree/master/APPLICATIONS/angular-reactivefrom-validation-disablingsubmit)

* project/src/app/form/form.component.html
```
<div>
    <h1>ESPARK ANGULARJS REACTIVE FORM COMPONENT</h1>
    <form  [formGroup]="myForm" (ngSubmit)="postData()">
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
	  <button type="submit" class="btn btn-primary" [disabled]="!myForm.valid">Submit</button>
   </form>
</div>
```

* project/src/app/form/form.component.scss
```
 input.ng-touched.ng-invalid{
 	border:ipx solid red;
 }
```
* project/src/app/form/form.component.ts

```
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms'; 

@Component({
  selector: 'app-form-view'
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit{
  
  myForm: FromGroup; //same form name as tempate form name 


  constructor(private formBulder: FormBulder){
  	this.myForm = formbuilder.group({
  		emailField: ['', Validators.requried],
        pwdField: ['', Validators.requried],
        termField: ['', Validators.requriedTrue]
  	})
  }

  postData(){
  	 console.log(this.myForm);
  	 console.log(this.myForm.value);
  	 console.log(this.myForm.value.emailField);
  	 console.log(this.myForm.value.pwdField);
  	 console.log(this.myForm.value.termField);
  }

  ngOnInit():void{

  }
}
```

### [ANGULAR INLINE FIELDS VALIDATION ERRORS EXAMPLE](https://github.com/adarshkumarsingh83/angular_js_version9/tree/master/APPLICATIONS/angular-reactivefrom-validation-inlineerrors)

### Example Custom Field level Validation 

* project/src/app/form/form.component.html
```
<div>
    <h1>ESPARK ANGULARJS REACTIVE FORM COMPONENT</h1>
    <form  [formGroup]="myForm" (ngSubmit)="postData()">
	  <div class="form-group">
	    <label for="exampleInputEmail1">Email address</label>
	    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" formControlName="emailField">
	    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
	    <span *ngIf="myForm.get('emailField').touched && myForm.get('emailField').haserror('required')"> Enter the Email </span>
	    <span *ngIf="myForm.get('emailField').touched && myForm.get('emailField').haserror('email')"> Enter Valid Email </span>
	  </div>
	  <div class="form-group">
	    <label for="exampleInputPassword1">Password</label>
	    <input type="password" class="form-control" id="exampleInputPassword1" formControlName="pwdField">
	    <span *ngIf="myForm.get('pwdField').touched && myForm.get('pwdField').haserror('required')"> Enter the Password </span>
	     <span *ngIf="myForm.get('pwdField').touched && myForm.get('pwdField').haserror('minLength')"> Enter min 5 char Password </span>
         <span *ngIf="myForm.get('pwdField').touched && myForm.get('pwdField').haserror('maxLength')"> Enter max 30 char Password </span>
	  </div>
	  <div class="form-group form-check">
	    <input type="checkbox" class="form-check-input" id="termCheck1" formControlName="termField">
	    <label class="form-check-label" for="exampleCheck1">Term & Condition</label>
	  </div>
	  <button type="submit" class="btn btn-primary" [disabled]="!myForm.valid">Submit</button>
   </form>
</div>
```

* project/src/app/form/form.component.scss
```
 input.ng-touched.ng-invalid{
 	border:ipx solid red;
 }
```
* project/src/app/form/form.component.ts

```
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms'; 

@Component({
  selector: 'app-form-view'
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit{
  
  myForm: FromGroup; //same form name as tempate form name 


  constructor(private formBulder: FormBulder){
  	 // FIELD_KEY: [INITIAL_VALUE, [LIST_OF_VALIDATORS]]
  	this.myForm = formbuilder.group({
  		emailField: ['', [Validators.requried,Validators.email]],
        pwdField: ['', [Validators.requried,Validators.minLength(5),Validators.minLength(30)]],
        termField: ['', Validators.requriedTrue]
  	})
  }

  postData(){
  	 console.log(this.myForm);
  	 console.log(this.myForm.value);
  	 console.log(this.myForm.value.emailField);
  	 console.log(this.myForm.value.pwdField);
  	 console.log(this.myForm.value.termField);
  }

  ngOnInit():void{

  }
}
```
---

### [ANGULAR REACTIVEFORM GETVALUE EXAMPLE ](https://github.com/adarshkumarsingh83/angular_js_version9/tree/master/APPLICATIONS/angular-reactivefrom-setValue-getValue-resetValue)
### From Group Get Value 

* project/src/app/form/form.component.html
```
<div>
    <h1>ESPARK ANGULARJS REACTIVE FORM COMPONENT</h1>
    <form  [formGroup]="myForm" (ngSubmit)="postData()">
	  <div class="form-group">
	    <label for="exampleInputEmail1">Email address</label>
	    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" formControlName="emailField">
	    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
	     <span *ngIf="myForm.get('emailField').touched && myForm.get('emailField').haserror('required')"> Enter the Email </span>
	  </div>
	  <div class="form-group">
	    <label for="exampleInputPassword1">Password</label>
	    <input type="password" class="form-control" id="exampleInputPassword1" formControlName="pwdField">
	    <span *ngIf="myForm.get('pwdField').touched && myForm.get('pwdField').haserror('required')"> Enter the Password </span>
	  </div>
	  <div class="form-group form-check">
	    <input type="checkbox" class="form-check-input" id="termCheck1" formControlName="termField">
	    <label class="form-check-label" for="exampleCheck1">Term & Condition</label>
	  </div>
	  <button type="submit" class="btn btn-primary" >Submit</button>
   </form>
</div>
```

* project/src/app/form/form.component.ts

```
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms'; 

@Component({
  selector: 'app-form-view'
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit{
  
  myForm: FromGroup; //same form name as tempate form name 


  constructor(private formBulder: FormBulder){
  	this.myForm = formbuilder.group({
  		emailField: ['', Validators.requried],
        pwdField: ['', Validators.requried],
        termField: ['', Validators.requriedTrue]
  	})
  }

  postData(){
  	 console.log(this.myForm);
  	 console.log(this.myForm.value);
  	 console.log(this.myForm.value.emailField);
  	 console.log(this.myForm.value.pwdField);
  	 console.log(this.myForm.value.termField);


  }

  ngOnInit():void{

  }
}
```
### [ANGULAR REACTIVEFORM SETVALUE EXAMPLE ](https://github.com/adarshkumarsingh83/angular_js_version9/tree/master/APPLICATIONS/angular-reactivefrom-setValue-getValue-resetValue)
### From Group Set Value 
* Form Group setValue()
	* set value for all the fields in the form 
```

  ngOnInit():void{
     this.myForm.setValue(

     	{
          emailField: 'adarsh@kumar',
          pwdField: 'xxxx'
          term: false;
      	}
     );
  }
```
* From Group pathValue()
	* set value for partial fields in the form 
```
  ngOnInit():void{
     this.myForm.patchValue(
     	{
          emailField: 'adarsh@kumar',
          pwdField: 'xxxx'
      	}
     );
  }
```


* project/src/app/form/form.component.html
```
<div>
    <h1>ESPARK ANGULARJS REACTIVE FORM COMPONENT</h1>
    <form  [formGroup]="myForm" (ngSubmit)="postData()">
	  <div class="form-group">
	    <label for="exampleInputEmail1">Email address</label>
	    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" formControlName="emailField">
	    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
	     <span *ngIf="myForm.get('emailField').touched && myForm.get('emailField').haserror('required')"> Enter the Email </span>
	  </div>
	  <div class="form-group">
	    <label for="exampleInputPassword1">Password</label>
	    <input type="password" class="form-control" id="exampleInputPassword1" formControlName="pwdField">
	    <span *ngIf="myForm.get('pwdField').touched && myForm.get('pwdField').haserror('required')"> Enter the Password </span>
	  </div>
	  <div class="form-group form-check">
	    <input type="checkbox" class="form-check-input" id="termCheck1" formControlName="termField">
	    <label class="form-check-label" for="exampleCheck1">Term & Condition</label>
	  </div>
	  <button type="submit" class="btn btn-primary" >Submit</button>
   </form>
</div>
```


* project/src/app/form/form.component.ts

```
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms'; 

@Component({
  selector: 'app-form-view'
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit{
  
  myForm: FromGroup; //same form name as tempate form name 


  constructor(private formBulder: FormBulder){
  	this.myForm = formbuilder.group({
  		emailField: ['', Validators.requried],
        pwdField: ['', Validators.requried],
        termField: ['', Validators.requriedTrue]
  	})
  }

  postData(){
  	 console.log(this.myForm);
  	 console.log(this.myForm.value);
  	 console.log(this.myForm.value.emailField);
  	 console.log(this.myForm.value.pwdField);
  	 console.log(this.myForm.value.termField);
  }


  ngOnInit():void{
     this.myForm.setValue(

     	{
          emailField: 'adarsh@kumar',
          pwdField: 'xxxx'
          term: false;
      	}
     );

      // or 

     this.myForm.patchValue(
     	{
          emailField: 'adarsh@kumar',
          pwdField: 'xxxx'
      	}
     );
  }
}
```

---

### [ANGULAR REACTIVEFORM RESET FORM EXAMPLE ](https://github.com/adarshkumarsingh83/angular_js_version9/tree/master/APPLICATIONS/angular-reactivefrom-setValue-getValue-resetValue)

### Form Clearing or Reset Form 
* FormGroup reset()
	* this.form.reset()

* project/src/app/form/form.component.html
```
<div>
    <h1>ESPARK ANGULARJS REACTIVE FORM COMPONENT</h1>
    <form  [formGroup]="myForm" (ngSubmit)="postData()">
	  <div class="form-group">
	    <label for="exampleInputEmail1">Email address</label>
	    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" formControlName="emailField">
	    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
	     <span *ngIf="myForm.get('emailField').touched && myForm.get('emailField').haserror('required')"> Enter the Email </span>
	  </div>
	  <div class="form-group">
	    <label for="exampleInputPassword1">Password</label>
	    <input type="password" class="form-control" id="exampleInputPassword1" formControlName="pwdField">
	    <span *ngIf="myForm.get('pwdField').touched && myForm.get('pwdField').haserror('required')"> Enter the Password </span>
	  </div>
	  <div class="form-group form-check">
	    <input type="checkbox" class="form-check-input" id="termCheck1" formControlName="termField">
	    <label class="form-check-label" for="exampleCheck1">Term & Condition</label>
	  </div>
	  <button type="submit" class="btn btn-primary" >Submit</button>
	  <button type="button " class="btn btn-primary" (click)="resetForm();">Clear</button>
   </form>
</div>
```

* project/src/app/form/form.component.ts

```
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms'; 

@Component({
  selector: 'app-form-view'
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit{
  
  myForm: FromGroup; //same form name as tempate form name 


  constructor(private formBulder: FormBulder){
  	this.myForm = formbuilder.group({
  		emailField: ['', Validators.requried],
        pwdField: ['', Validators.requried],
        termField: ['', Validators.requriedTrue]
  	})
  }

  postData(){
  	 console.log(this.myForm);
  	 console.log(this.myForm.value);
  	 console.log(this.myForm.value.emailField);
  	 console.log(this.myForm.value.pwdField);
  	 console.log(this.myForm.value.termField);
  }


  ngOnInit():void{ 
  }

  resetForm(){
    this.myForm.reset();  	
  }
}
```

---

### Value Changes in Form Group 
* FormControl FormGroup FormArray 
	* Observable valueChnages()
	* we need to Subscribe to Observable to read value changes 
	* valueChanges is a property in AbstractControl
	* valueChange it will emit the event 

* Individual Form Control 
```
   this.formName.get('email').valueChanges.subscribe(data => {
   	 Console.log(data);
   	})
```

* Entrire Form Conrol 
```
  this.formName.valueChanges.subscribe(data => {
  	  Console.log(data);
  })

```

### [ANGULAR INDIVISUAL ELEMENT FORM VALUE CHANGES EXAMPLE ](https://github.com/adarshkumarsingh83/angular_js_version9/tree/master/APPLICATIONS/angular-reactivefrom-valuechange-individual-elements)
### Example Individual Form Control 

* project/src/app/form/form.component.html
```
<div>
    <h1>ESPARK ANGULARJS REACTIVE FORM COMPONENT</h1>
    <form  [formGroup]="myForm" (ngSubmit)="postData()">
	  <div class="form-group">
	    <label for="exampleInputEmail1">Email address</label>
	    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" formControlName="emailField">
	    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
	     <span *ngIf="myForm.get('emailField').touched && myForm.get('emailField').haserror('required')"> Enter the Email </span>
	  </div>
	  <div class="form-group">
	    <label for="exampleInputPassword1">Password</label>
	    <input type="password" class="form-control" id="exampleInputPassword1" formControlName="pwdField">
	    <span *ngIf="myForm.get('pwdField').touched && myForm.get('pwdField').haserror('required')"> Enter the Password </span>
	  </div>
	  <div class="form-group form-check">
	    <input type="checkbox" class="form-check-input" id="termCheck1" formControlName="termField">
	    <label class="form-check-label" for="exampleCheck1">Term & Condition</label>
	  </div>
	  <button type="submit" class="btn btn-primary" >Submit</button>
   </form>
   <div>
         {{ emailValue }} &nbsp; {{ pwdValue }}
   </div>
</div>
```

* project/src/app/form/form.component.ts
```
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms'; 

@Component({
  selector: 'app-form-view'
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit{
  
  myForm: FromGroup; //same form name as tempate form name 
  emailValue='';
  pwdValue='';

  constructor(private formBulder: FormBulder){
  	this.myForm = formbuilder.group({
  		emailField: ['', Validators.requried],
        pwdField: ['', Validators.requried],
        termField: ['', Validators.requriedTrue]
  	})
  }

  postData(){
  	 console.log(this.myForm);
  	 console.log(this.myForm.value);
  	 console.log(this.myForm.value.emailField);
  	 console.log(this.myForm.value.pwdField);
  	 console.log(this.myForm.value.termField);
  }


  ngOnInit():void{ 
  	this.myForm.get('emailField').valueChanges.subscribe(data =>{
  		   Console.log(data);
  		   this.emailValue=data;
  	})

  	this.myForm.get('pwdField').valueChanges.subscribe(data =>{
  		   Console.log(data);
  		   this.pwdValue=data;
  	})
  }
}
```

### Example Entrire Form Conrol 

* project/src/app/form/form.component.html
```
<div>
    <h1>ESPARK ANGULARJS REACTIVE FORM COMPONENT</h1>
    <form  [formGroup]="myForm" (ngSubmit)="postData()">
	  <div class="form-group">
	    <label for="exampleInputEmail1">Email address</label>
	    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" formControlName="emailField">
	    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
	     <span *ngIf="myForm.get('emailField').touched && myForm.get('emailField').haserror('required')"> Enter the Email </span>
	  </div>
	  <div class="form-group">
	    <label for="exampleInputPassword1">Password</label>
	    <input type="password" class="form-control" id="exampleInputPassword1" formControlName="pwdField">
	    <span *ngIf="myForm.get('pwdField').touched && myForm.get('pwdField').haserror('required')"> Enter the Password </span>
	  </div>
	  <div class="form-group form-check">
	    <input type="checkbox" class="form-check-input" id="termCheck1" formControlName="termField">
	    <label class="form-check-label" for="exampleCheck1">Term & Condition</label>
	  </div>
	  <button type="submit" class="btn btn-primary" >Submit</button>
   </form>
   <div>
         {{ emailValue }} &nbsp; {{ pwdValue }}
   </div>
</div>
```

* project/src/app/form/form.component.ts
```
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms'; 

@Component({
  selector: 'app-form-view'
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit{
  
  myForm: FromGroup; //same form name as tempate form name 
  emailValue='';
  pwdValue='';

  constructor(private formBulder: FormBulder){
  	this.myForm = formbuilder.group({
  		emailField: ['', Validators.requried],
        pwdField: ['', Validators.requried],
        termField: ['', Validators.requriedTrue]
  	})
  }

  postData(){
  	 console.log(this.myForm);
  	 console.log(this.myForm.value);
  	 console.log(this.myForm.value.emailField);
  	 console.log(this.myForm.value.pwdField);
  	 console.log(this.myForm.value.termField);
  }


  ngOnInit():void{ 
  	this.myForm.valueChanges.subscribe(data =>{
  		   Console.log(data);
  		   this.emailValue = data.emailField;
  		   this.pwdValue = data.pwdField;
  	})
  }
}
```

---

### Form Status Changes 
* FromControl, FormGroup and FormArray has statusChanges()
	* Observable statusChanges()
	* we need to Subscribe to Observable to read value changes 
	* statusChanges is a property in AbstractControl
	* statusChanges it will emit the event when ever change in valdiatin statuso of the control 
	* we can use for indivisual form controll or for entire form 


* Individual Form Control 
```
   this.formName.get('email').statusChanges.subscribe(data => {
   	 Console.log(data);
   	})
```

* Entire Form Conrol 
```
  this.formName.statusChanges.subscribe(data => {
  	  Console.log(data);
  })

```

## Example Individual Form Control
* project/src/app/form/form.component.html

```
<div>
    <h1>ESPARK ANGULARJS REACTIVE FORM COMPONENT</h1>
    <form  [formGroup]="myForm" (ngSubmit)="postData()">
	  <div class="form-group">
	    <label for="exampleInputEmail1">Email address</label>
	    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" formControlName="emailField">
	    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
	     <span *ngIf="myForm.get('emailField').touched && myForm.get('emailField').haserror('required')"> Enter the Email </span>
	  </div>
	  <div class="form-group">
	    <label for="exampleInputPassword1">Password</label>
	    <input type="password" class="form-control" id="exampleInputPassword1" formControlName="pwdField">
	    <span *ngIf="myForm.get('pwdField').touched && myForm.get('pwdField').haserror('required')"> Enter the Password </span>
	  </div>
	  <div class="form-group form-check">
	    <input type="checkbox" class="form-check-input" id="termCheck1" formControlName="termField">
	    <label class="form-check-label" for="exampleCheck1">Term & Condition</label>
	  </div>
	  <button type="submit" class="btn btn-primary" >Submit</button>
   </form>
   <div>
         {{ emailValue }} &nbsp; {{ pwdValue }}
   </div>
</div>
```

* project/src/app/form/form.component.ts
```
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms'; 

@Component({
  selector: 'app-form-view'
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit{
  
  myForm: FromGroup; //same form name as tempate form name 
  emailValue='';
  pwdValue='';

  constructor(private formBulder: FormBulder){
  	this.myForm = formbuilder.group({
  		emailField: ['', Validators.requried],
        pwdField: ['', Validators.requried],
        termField: ['', Validators.requriedTrue]
  	})
  }

  postData(){
  	 console.log(this.myForm);
  	 console.log(this.myForm.value);
  	 console.log(this.myForm.value.emailField);
  	 console.log(this.myForm.value.pwdField);
  	 console.log(this.myForm.value.termField);
  }


  ngOnInit():void{ 
  	this.myForm.get('emailField').statusChanges.subscribe(data =>{
  		   Console.log(data);
  		   this.emailValue=data;
  	})

  	this.myForm.get('pwdField').statusChanges.subscribe(data =>{
  		   Console.log(data);
  		   this.pwdValue=data;
  	})
  }
}
```

## Example Entire Form Conrol
* project/src/app/form/form.component.html

```
<div>
    <h1>ESPARK ANGULARJS REACTIVE FORM COMPONENT</h1>
    <form  [formGroup]="myForm" (ngSubmit)="postData()">
	  <div class="form-group">
	    <label for="exampleInputEmail1">Email address</label>
	    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" formControlName="emailField">
	    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
	     <span *ngIf="myForm.get('emailField').touched && myForm.get('emailField').haserror('required')"> Enter the Email </span>
	  </div>
	  <div class="form-group">
	    <label for="exampleInputPassword1">Password</label>
	    <input type="password" class="form-control" id="exampleInputPassword1" formControlName="pwdField">
	    <span *ngIf="myForm.get('pwdField').touched && myForm.get('pwdField').haserror('required')"> Enter the Password </span>
	  </div>
	  <div class="form-group form-check">
	    <input type="checkbox" class="form-check-input" id="termCheck1" formControlName="termField">
	    <label class="form-check-label" for="exampleCheck1">Term & Condition</label>
	  </div>
	  <button type="submit" class="btn btn-primary" >Submit</button>
   </form>
   <div>
         {{ emailValue }} &nbsp; {{ pwdValue }}
   </div>
</div>
```

* project/src/app/form/form.component.ts
```
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms'; 

@Component({
  selector: 'app-form-view'
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit{
  
  myForm: FromGroup; //same form name as tempate form name 
  emailValue='';
  pwdValue='';

  constructor(private formBulder: FormBulder){
  	this.myForm = formbuilder.group({
  		emailField: ['', Validators.requried],
        pwdField: ['', Validators.requried],
        termField: ['', Validators.requriedTrue]
  	})
  }

  postData(){
  	 console.log(this.myForm);
  	 console.log(this.myForm.value);
  	 console.log(this.myForm.value.emailField);
  	 console.log(this.myForm.value.pwdField);
  	 console.log(this.myForm.value.termField);
  }


  ngOnInit():void{ 
  	this.myForm.statusChanges.subscribe(data =>{
  		   Console.log(data);
  		   this.emailValue = data.emailField;
  		   this.pwdValue = data.pwdField;
  	})
  }
}
```

---

## Form Array (Dynamic Element Form )
* for dynamic itesm which are render inot the form 
* group mulitple conrtol and form into the group 
* dynamically add or remove row into the form array via grom group 
* FormArray  aggregte the value of hee child formControll into an array 
* stat of FormArray is calculated by reducing the status of its child 
* entire array will be invalid if any control is invalid 
* Props and method of array 
	* myArray.value
	* myArray.status 
	* myArray.length
	* myArray.setValue(['name','lastName'])
	* myArray.patchValue(['name','lastName'])
	* myArray.reset(['name,'lastName'])
	* myArray.clear()

### Detils of Terminology 
* Element in the form is FormConroll eg textboox checkbox button 
* When mulitple formconroll is grouped in single unit its a FormGroup
* From Array is collectons of FromGroups 


### Simple For Array
```

<div fromArrayName="items">
     <div *ngFor="let conrol of myForm.conrols.items['conrols'] let i=index;">
         <input type="textt" [formConrolName]="i" id="itemId{{i}}"/>
     </div>
</div>

 this.myFrom. = formBuilder.group({
 	   items: this.formbuilder.array([
           new FromControl('xxx'),
           new FormConrol('xxxx'),
           new FormConrol('xxxx'),
           new FormConrol('xxxx')
 	   	])
 });
```

### Example Simple Form 

* project/src/app/form/form.component.html

```
<div>
    <h1>ESPARK ANGULARJS REACTIVE FORM COMPONENT</h1>
    <form  [formGroup]="myForm" (ngSubmit)="postData()">
	  <div class="form-group">
	    <label for="exampleInputEmail1">Email address</label>
	    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" formControlName="emailField">
	    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
	     <span *ngIf="myForm.get('emailField').touched && myForm.get('emailField').haserror('required')"> Enter the Email </span>
	  </div>
	  <div class="form-group">
	    <label for="exampleInputPassword1">Password</label>
	    <input type="password" class="form-control" id="exampleInputPassword1" formControlName="pwdField">
	    <span *ngIf="myForm.get('pwdField').touched && myForm.get('pwdField').haserror('required')"> Enter the Password </span>
	  </div>
	  <div class="form-group form-check">
	    <input type="checkbox" class="form-check-input" id="termCheck1" formControlName="termField">
	    <label class="form-check-label" for="exampleCheck1">Term & Condition</label>
	  </div>

	<div fromArrayName="items">
	     <div *ngFor="let conrol of myForm.conrols.items['conrols'] let i=index;">
	         <input type="text" [formConrolName]="i" id="task{{i}}"/>
	     </div>
	</div>

	  <button type="submit" class="btn btn-primary" >Submit</button>
   </form>
   <div>
         {{ emailValue }} &nbsp; {{ pwdValue }}
   </div>
</div>
```

* project/src/app/form/form.component.ts
```
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms'; 

@Component({
  selector: 'app-form-view'
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit{
  
  myForm: FromGroup; //same form name as tempate form name 
  emailValue='';
  pwdValue='';

  constructor(private formBulder: FormBulder){
  	this.myForm = formbuilder.group({
  		emailField: ['', Validators.requried],
        pwdField: ['', Validators.requried],
        termField: ['', Validators.requriedTrue],
        items: this.formbuilder.array([
           new FromControl('xxx'),
           new FormConrol('xxxx'),
           new FormConrol('xxxx'),
           new FormConrol('xxxx')
 	   	])
  	})
  }

  postData(){
  	 console.log(this.myForm);
  	 console.log(this.myForm.value);
  	 console.log(this.myForm.value.emailField);
  	 console.log(this.myForm.value.pwdField);
  	 console.log(this.myForm.value.termField);
  }


  ngOnInit():void{ 
  	this.myForm.statusChanges.subscribe(data =>{
  		   Console.log(data);
  		   this.emailValue = data.emailField;
  		   this.pwdValue = data.pwdField;
  	})
  }
}
```

---

### Example Complex Form 

* project/src/app/form/form.component.html

```
<div>
    <h1>ESPARK ANGULARJS REACTIVE FORM COMPONENT</h1>
    <form  [formGroup]="myForm" (ngSubmit)="postData()">
	  <div class="form-group">
	    <label for="exampleInputEmail1">Email address</label>
	    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" formControlName="emailField">
	    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
	     <span *ngIf="myForm.get('emailField').touched && myForm.get('emailField').haserror('required')"> Enter the Email </span>
	  </div>
	  <div class="form-group">
	    <label for="exampleInputPassword1">Password</label>
	    <input type="password" class="form-control" id="exampleInputPassword1" formControlName="pwdField">
	    <span *ngIf="myForm.get('pwdField').touched && myForm.get('pwdField').haserror('required')"> Enter the Password </span>
	  </div>
	  <div class="form-group form-check">
	    <input type="checkbox" class="form-check-input" id="termCheck1" formControlName="termField">
	    <label class="form-check-label" for="exampleCheck1">Term & Condition</label>
	  </div>

	<div fromArrayName="items">
	     <div *ngFor="let conrol of myForm.conrols.items['conrols'] let i=index;" [fromGroupName]="i">
	         <input type="textt" formConrolName="itemId" id="task{{i}}"/>
	          <input type="textt" formConrolName="itemName" id="task{{i}}"/>
	           <input type="textt" formConrolName="itemDesc" id="task{{i}}"/>
               <input type"checkbox" formControlName="itemDone">
	     </div>
	</div>

	  <button type="submit" class="btn btn-primary" >Submit</button>
   </form>
   <div>
         {{ emailValue }} &nbsp; {{ pwdValue }}
   </div>
</div>
```

* project/src/app/form/form.component.ts
```
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms'; 

@Component({
  selector: 'app-form-view'
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit{
  
  myForm: FromGroup; //same form name as tempate form name 
  emailValue='';
  pwdValue='';

  constructor(private formBulder: FormBulder){
  	this.myForm = formbuilder.group({
  		emailField: ['', Validators.requried],
        pwdField: ['', Validators.requried],
        termField: ['', Validators.requriedTrue],
        items: this.formbuilder.array([
                 itemId: [''],
                 itemName: [''],
                 itemDesc: [],
                 itemDone:['',Validators.requriedTrue]
        	])
  	})
  }

  postData(){
  	 console.log(this.myForm);
  	 console.log(this.myForm.value);
  	 console.log(this.myForm.value.emailField);
  	 console.log(this.myForm.value.pwdField);
  	 console.log(this.myForm.value.termField);
  }


  ngOnInit():void{ 
  	this.myForm.statusChanges.subscribe(data =>{
  		   Console.log(data);
  		   this.emailValue = data.emailField;
  		   this.pwdValue = data.pwdField;
  	})
  }
}
```

----

## Add / Remove Dynamic Row to the FormArrays 
* Dynamically adding/removing  rows to the form 
* FormArray 
	* From Group
	* Form Control 

### Aadding Row to the from 
* project/src/app/form/form.component.html
```
<div>
    <h1>ESPARK ANGULARJS REACTIVE FORM COMPONENT</h1>
    <form  [formGroup]="myForm" (ngSubmit)="postData()">
	  <div class="form-group">
	    <label for="exampleInputEmail1">Email address</label>
	    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" formControlName="emailField">
	    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
	     <span *ngIf="myForm.get('emailField').touched && myForm.get('emailField').haserror('required')"> Enter the Email </span>
	  </div>
	  <div class="form-group">
	    <label for="exampleInputPassword1">Password</label>
	    <input type="password" class="form-control" id="exampleInputPassword1" formControlName="pwdField">
	    <span *ngIf="myForm.get('pwdField').touched && myForm.get('pwdField').haserror('required')"> Enter the Password </span>
	  </div>

	  <div class="form-group form-check">
	    <input type="checkbox" class="form-check-input" id="termCheck1" formControlName="termField">
	    <label class="form-check-label" for="exampleCheck1">Term & Condition</label>
	  </div>

	  	<div fromArrayName="items">
	     <div *ngFor="let conrol of myForm.conrols.items['conrols'] let i=index;" [fromGroupName]="i">
	         <input type="textt" formConrolName="itemId" id="task{{i}}"/>
	          <input type="textt" formConrolName="itemName" id="task{{i}}"/>
	           <input type="textt" formConrolName="itemDesc" id="task{{i}}"/>
               <input type"checkbox" formControlName="itemDone">
	     </div>
	   </div>

	  <button type="submit" class="btn btn-primary" >Submit</button>
	  <button type="button " class="btn btn-primary" (click)="addRowItem();">add row</button>
   </form>
</div>
```

* project/src/app/form/form.component.ts
```
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms'; 

@Component({
  selector: 'app-form-view'
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit{
  
  myForm: FromGroup; //same form name as tempate form name 
  emailValue='';
  pwdValue='';

  constructor(private formBulder: FormBulder){
  	this.myForm = formbuilder.group({
  		emailField: ['', Validators.requried],
        pwdField: ['', Validators.requried],
        termField: ['', Validators.requriedTrue],
        items: this.formBuilder.array([
        	      this.formBuilder.group({
        	      	     itemId: ['1'],
        	      	     itemName: ['ABC'],
        	      	     itemDesc: ['help'],
        	      	     itemDone: ['',Validators.requiredTrue]
        	      	})
           
        	])
  	})
  }

  postData(){
  	 console.log(this.myForm);
  	 console.log(this.myForm.value);
  	 console.log(this.myForm.value.emailField);
  	 console.log(this.myForm.value.pwdField);
  	 console.log(this.myForm.value.termField);
  }


  ngOnInit():void{ 
  	this.myForm.statusChanges.subscribe(data =>{
  		   Console.log(data);
  		   this.emailValue = data.emailField;
  		   this.pwdValue = data.pwdField;
  	})

    // get value from aray  
  	Console.log(this.myForm.get('items').value.length);
  	Console.log(this.myForm.get('items').value);
  	const itemsValue = this.myForm.get('items').value;
  	Console.log(itemsValue[0].itemId)
  	Console.log(itemsValue[0].itemName)

    //resetting the items 
  	this.myForm.get('items').reset();

  	// set a value for arrays
  	this.myForm.get('items').setValue([{
  		itemId: ['100'],
  		itemName: ['espark'],
  		itemDesc: ['sample'],
  		itemDone: ['',Validators.requiredTrue]
  		}]);
  	
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
  
}


```

### Removing Row to the from 
* using indexAt() we can point to the items we want to remove or hide or fredge 
* in form.component.html 
```
  <div>
    <label > items</lable>
    <div formArrayName="itesm">
       <div *ngFor" let items of myForm.conrols.items['conrols']; let i=index" [forGroupName]="i">
         <a (click)="removeItem(i)">remove Row</a>
          <input type"text"  formConrolName="itemId" id="task{{i}}" >
          <input type"text"  formConrolName="itemName" id="task{{i}}" >
          <input type"text"  formConrolName="itemDesc" id="task{{i}}" >
          <input type="checkbox" formConrolName="iemDone"> 
       </div>
    </idv>
  </div>
```
* form.component.ts 
```
 removeItem(index){
 	const arrayItem = this.items.length;
 	this.items.removeAt(index);
 }
```

---


	




