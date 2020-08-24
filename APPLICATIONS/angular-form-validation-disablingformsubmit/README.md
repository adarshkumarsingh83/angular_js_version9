# AngularFormValidationDisablingformsubmit

### Application Generation 
* $ ng new angular-form-validation-disablingformsubmit
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

### Adding css for highligting error
* src/app/espark-form/espark-form.component.scss
```
input.ng-invalid.ng-touched{
    background-color: gold;
    border: 1px solid red;
}
```

### Importing FormModule in
* project/src/app/app.module.ts
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
### Adding template form
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
        <input type="text" class="form-control" id="exampleInputName" aria-describedby="nameHelp"  name="nameInput" ngModel required/>
        <small id="nameHelp" class="form-text text-muted">We'll never share your name with anyone else.</small>
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  name="emailInput" ngModel required/>
        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1"  name="pwdInput" ngModel required>
      </div>
      <div class="form-group form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1"  name="checkboxInput" ngModel required >
        <label class="form-check-label" for="exampleCheck1">Agreed on Contract</label>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    <h3 class="display-5">
      {{data | json }}
    </h3>
  </div>

```

### To buld the applicaion 
* $ ng build 

### To Execute Application 
* $ ng serve 