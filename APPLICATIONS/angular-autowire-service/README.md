# AngularAutowireService

### project code generation
* $ ng new angular-autowire-service
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

### Generate invalid url component
* $ ng g component InvalidUrl
```
? Would you like to share anonymous usage data about this project with the Angular Team at
Google under Google’s Privacy Policy at https://policies.google.com/privacy? For more
details and how to change this setting, see http://angular.io/analytics. No
CREATE src/app/invalid-url/invalid-url.component.scss (0 bytes)
CREATE src/app/invalid-url/invalid-url.component.html (26 bytes)
CREATE src/app/invalid-url/invalid-url.component.spec.ts (657 bytes)
CREATE src/app/invalid-url/invalid-url.component.ts (295 bytes)
UPDATE src/app/app.module.ts (572 bytes)
```

### InvalidUrl component template 
* src/app/invalid-url/invalid-url.component.html
```
<p>requested url {{href}} is invalid!</p>
```

### InvalidUrl component  
* src/app/invalid-url/invalid-url.component.ts 
```
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-invalid-url',
  templateUrl: './invalid-url.component.html',
  styleUrls: ['./invalid-url.component.scss']
})
export class InvalidUrlComponent implements OnInit {

  public href: string = "";

  constructor(private router: Router) {}

  ngOnInit() {
      this.href = this.router.url;
      console.log(this.router.url);
  }
}
```

### Generating service module 
*  ng generate module service
```
CREATE src/app/service/service.module.ts (193 bytes)
```

### Generating Data Service in service module 
* cd src/app/service
* ng g service Data
```
CREATE src/app/service/data.service.spec.ts (347 bytes)
CREATE src/app/service/data.service.ts (133 bytes)
```
### Installing local storage service 
* npm install --save ngx-webstorage-service

### Data Service 
* src/app/service/data.service.ts
```
import { Injectable, Inject } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  dataList: any;
  public storageKey = "espark";
  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) { }


  public storeOnLocalStorage(data: object): void{
    console.log(`DataService.storeOnLocalStorage()  `+ JSON.stringify(data));
    this.storage.set(this.storageKey, data);
  }

  public getFromLocalStorage(): object{
     this.dataList = this.storage.get(this.storageKey) || [];
     console.log(`DataService.getFromLocalStorage()   `+JSON.stringify(this.dataList));
     return this.dataList;
  }
}
```

### Generating UI module 
* $ ng generate module ui
```
CREATE src/app/ui/ui.module.ts (188 bytes)
```
### Generating Form Component in Ui module 
* cd src/app/ui
* ng generate component Form 
```
CREATE src/app/ui/form/form.component.scss (0 bytes)
CREATE src/app/ui/form/form.component.html (19 bytes)
CREATE src/app/ui/form/form.component.spec.ts (614 bytes)
CREATE src/app/ui/form/form.component.ts (268 bytes)
UPDATE src/app/ui/ui.module.ts (255 bytes)
```

### Form component teamplate 
* src/app/ui/form/form.component.html
```
<div class="container">
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
```

### Form component  
* src/app/ui/form/form.component.ts
```
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
```

### ui module import formcompoent browser and service module 
* src/app/ui/ui.module.ts
```
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {ServiceModule} from '../service/service.module';

@NgModule({
  declarations: [FormComponent],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    ServiceModule
  ]
})
export class UiModule { }
```

### Import local storage module 
* src/app/service/service.module.ts
```
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StorageServiceModule } from 'ngx-webstorage-service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StorageServiceModule
  ]
})
export class ServiceModule { }
```

### To add the routing 
* src/app/app.module.ts
```
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InvalidUrlComponent } from './invalid-url/invalid-url.component';
import {UiModule} from './ui/ui.module';
import {ServiceModule} from './service/service.module';
import { StorageServiceModule } from 'ngx-webstorage-service';

@NgModule({
  declarations: [
    AppComponent,
    InvalidUrlComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    UiModule,
    ServiceModule,
    StorageServiceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

* src/app/app-routing.module.ts 
```
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InvalidUrlComponent } from './invalid-url/invalid-url.component';
import { FormComponent } from './ui/form/form.component';

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