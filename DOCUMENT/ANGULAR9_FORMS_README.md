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



### Template Form 
	
* import form module 
* To Generate a form 
	* ng g c form 
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

* add the routes 
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
	    <label class="form-check-label" for="exampleCheck1">Check me out</label>
	  </div>
	  <button type="submit" class="btn btn-primary">Submit</button>
   </form>
</div>

```
* project/src/app/form/form.component.ts
```
import { Component } from '@angular/core';

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
 
}

```

