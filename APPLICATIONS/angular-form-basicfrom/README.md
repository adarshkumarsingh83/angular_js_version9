
# AngularFormBasicfrom

### Application Generation 
* $ ng new angular-form-basicfrom
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
     	"scr/styles.scss",
     	"node_modules/bootstrap/dist/css/bootstrap.min.css"
    ],
    "scripts":[
        "node_modules/jquery/dist/jquery.min.js",
		"node_modules/bootstrap/dist/js/bootstrap.min.js"
    ]
```
### Add the html form in app.component.html 
* src/app/app.component.html 
```
<div class="container">
  <!-- Content here -->
  <div class="alert alert-primary" role="alert">
    <h4 class="display-3"> WELCOME TO THE APP MODULE</h4>
  </div>
  <form #myForm="ngForm" (ngSubmit)="savaData(myForm)">
    <div class="form-group">
      <label for="exampleInputName">Name </label>
      <input type="text" class="form-control" id="exampleInputName" aria-describedby="nameHelp" ngModel name="nameInput" />
      <small id="nameHelp" class="form-text text-muted">We'll never share your name with anyone else.</small>
    </div>
    <div class="form-group">
      <label for="exampleInputEmail1">Email address</label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" ngModel name="emailInput" />
      <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Password</label>
      <input type="password" class="form-control" id="exampleInputPassword1" ngModel name="pwdInput">
    </div>
    <div class="form-group form-check">
      <input type="checkbox" class="form-check-input" id="exampleCheck1" ngModel name="checkboxInput" />
      <label class="form-check-label" for="exampleCheck1">Agreed on Contract</label>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
  <h3 class="display-5">
    {{data | json }}
  </h3>
</div>
<router-outlet></router-outlet>
```

### import the FromModule in app.module.ts
* src/app/app.module.ts 
```
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent
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
### add the form request handling in projec/src/app/app.component.ts
* project/src/app/app.component.ts
```
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-form-basicfrom';

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
}
```