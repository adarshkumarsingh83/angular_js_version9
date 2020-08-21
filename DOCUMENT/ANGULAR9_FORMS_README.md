# Angular Forms 
---
## BootStrap in Angular 
* From CDN
	* vist to https://getbootstrap.com/
	* find link for CSS
	* find link for Js 
	* Copy link for CSS & JS in the project/src/index.html
	* use bootstrap component into the applcation 
* From Npm 
	* Install bootstrap 
		* npm i bootstrap@3 --save 
		* import bootstrap style and script we have to do manually otherwise it will not work
	* Install using npm in single command 
		* latest version 
			* npm i boostrap jquery propper --save 
		* To specific version 
			* npm i boostrap@x jquery@x propper@x --save 

* NOTE IMPORT THE PATH 
* project/angular.json tag where we have to add path for importing 
	* projects->project-name->architect->build->option->style
	* projects->project-name->architect->build->option->script
	* projects->project-name->test->build->option->style
	* projects->project-name->test->build->option->script
    
```
        "styles":[
         	"scr/styles.scess",
         	"node_modules/bootstrap/dist/css/bootstrap.min.css"
        ],
        "scripts":[
            "node_modules/jquery/dist/jquery.min.js",
 			"node_modules/bootstrap/dist/js/bootstrap.min.js"
        ]

```

---

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
  	background-color:red
  }	
 ``` 
* Disabling the submit button 
	* [disabled]="!formName.valid"
* Show Hidden inline error msg 
	* <span *ngIf="name.touched && !name.valie"> plese ener name</span>

### Example of Highlight the erros 

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
 input.ng-touched.ng-invalid{
 	border:ipx solid red;
 }
```



### Example Disabling the submit button 

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

### Example Show Hidden inline error msg 

* project/src/app/form/form.component.html
* copy forom http://getbootstrap.com simple form 
```
<div>
    <h1>ESPARK ANGULARJS FORM COMPONENT</h1>
    <form #signInForm="ngForm" (ngSubmit)="savaData(signInForm)" >
	  <div class="form-group">
	    <label for="exampleInputEmail1">Email address</label>
	    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="emailField" ngModel required #emailField="ngModel">
	    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
	  </div>
	  <div class="form-group">
	    <label for="exampleInputPassword1">Password</label>
	    <input type="password" class="form-control" id="exampleInputPassword1" name="passwordField" ngModel required #passwordField="ngModel">
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
* import the reactive app module 
* project/src/app/app.module.ts
```
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
```

* create a form in the html 
* assigne a form group to the form  [formGroup]="myForm"
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
	  <button type="submit" class="btn btn-primary">Submit</button>
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
  		emailField: new FormControl(),
        pwdField: new FormControl(),
        termField: new FormControl() 
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

### Validaton on Reactive Form 
* Highlight the erros 
 ```
  input.ng-invalid.ng-touched{
  	background-color:red
  }	

  this.myForm = formbuilder.group({
  		emailField: [", Validators.requried],
        pwdField: [", Validators.minLength(5),
        			   Validators.maxLength(20),
        			   Validators.parttern('^[a-zA-Z]+$'),
                      Validators.requried],
        termField: new FormControl() 
  	})
 ``` 
* Disabling the submit button 
	* [disabled]="!formName.valid"
* Show Hidden inline error msg 
	* <span *ngIf="myForm.get('name').hasErros('required')"> plese ener name</span>

### Example Highlight the erros 
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

### Example Disabling the submit button 

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

* Entrire Form Conrol 
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

## Example Entrire Form Conrol
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




