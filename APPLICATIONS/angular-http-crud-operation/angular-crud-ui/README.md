# AngularCrudUi
---

### Application Generation 
* $ ng new angular-crud-ui
```
? Would you like to add Angular routing? Yes
? Which stylesheet format would you like to use? 
  CSS 
❯ SCSS   [ https://sass-lang.com/documentation/syntax#scss                ] 
  Sass   [ https://sass-lang.com/documentation/syntax#the-indented-syntax ] 
  Less   [ http://lesscss.org                                             ] 
  Stylus [ http://stylus-lang.com                                         ] 
```

### bootstrap installtion 
* $ npm i bootstrap jquery propper --save
* project/angular.json
    * projects->project-name->architect->build->option->style
    * projects->project-name->architect->build->option->script
* Restart the app becoz for angular.json it will not do auto reload
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

### Adding header for app template 
* project/src/app.component.html

```
<div class="container">
  <div class="alert alert-primary" role="alert">
    <h4 class="display-3">WELCOME TO APP MODULE</h4>
  </div>
</div>
<router-outlet></router-outlet>
```

### Generate invalid url component
* $ ng g component InvalidUrl
```
CREATE src/app/invalid-url/invalid-url.component.scss (0 bytes)
CREATE src/app/invalid-url/invalid-url.component.html (26 bytes)
CREATE src/app/invalid-url/invalid-url.component.spec.ts (657 bytes)
CREATE src/app/invalid-url/invalid-url.component.ts (295 bytes)
UPDATE src/app/app.module.ts (628 bytes)
```
### InvalidUrl component template
* src/app/invalid-url/invalid-url.component.html

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

### Adding rout entry in app routing 
* src/app/app-routing.module.ts
```
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InvalidUrlComponent } from './invalid-url/invalid-url.component';

const routes: Routes = [
  { path: '' ,redirectTo: '' , pathMatch: 'full' },
  { path: '**' , component: InvalidUrlComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

```

---

# To Generate the ui Module 
* $ ng g module <'module-name'> --route <'route-name'> --module app.module
    * ng g module ui --route ui --module app.module
```
CREATE src/app/ui/ui-routing.module.ts (328 bytes)
CREATE src/app/ui/ui.module.ts (321 bytes)
CREATE src/app/ui/ui.component.scss (0 bytes)
CREATE src/app/ui/ui.component.html (17 bytes)
CREATE src/app/ui/ui.component.spec.ts (600 bytes)
CREATE src/app/ui/ui.component.ts (260 bytes)
UPDATE src/app/app-routing.module.ts (327 bytes)
```

### Genrate List Data Compoennt 
* $ cd src/app/ui  
* $ ng g component list-data
```
CREATE src/app/ui/list-data/list-data.component.scss (0 bytes)
CREATE src/app/ui/list-data/list-data.component.html (24 bytes)
CREATE src/app/ui/list-data/list-data.component.spec.ts (643 bytes)
CREATE src/app/ui/list-data/list-data.component.ts (287 bytes)
UPDATE src/app/ui/ui.module.ts (409 bytes)
```

### Generate Create Data Component 
* $ cd src/app/ui  
* $ ng g component create-data
```
CREATE src/app/ui/create-data/create-data.component.scss (0 bytes)
CREATE src/app/ui/create-data/create-data.component.html (26 bytes)
CREATE src/app/ui/create-data/create-data.component.spec.ts (657 bytes)
CREATE src/app/ui/create-data/create-data.component.ts (295 bytes)
UPDATE src/app/ui/ui.module.ts (505 bytes)
```

### Generate Update Data Component 
* $ cd src/app/ui  
* $ ng g component update-data
```
CREATE src/app/ui/update-data/update-data.component.scss (0 bytes)
CREATE src/app/ui/update-data/update-data.component.html (26 bytes)
CREATE src/app/ui/update-data/update-data.component.spec.ts (657 bytes)
CREATE src/app/ui/update-data/update-data.component.ts (295 bytes)
UPDATE src/app/ui/ui.module.ts (601 bytes)
```
### Export the Components for Global use 
* project/src/app/ui/ui-routing.module.ts
```
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiRoutingModule } from './ui-routing.module';
import { UiComponent } from './ui.component';
import { ListDataComponent } from './list-data/list-data.component';
import { CreateDataComponent } from './create-data/create-data.component';
import { UpdateDataComponent } from './update-data/update-data.component';

@NgModule({
  declarations: [UiComponent, ListDataComponent, CreateDataComponent, UpdateDataComponent],
  imports: [
    CommonModule,
    UiRoutingModule
  ],
  exports:[ListDataComponent, CreateDataComponent, UpdateDataComponent]
})
export class UiModule { }
```
### Generate the service for http calls 
* $ cd src/app/ui 
* $ mkdir model 
* $ ng g interface data 
```
CREATE src/app/ui/model/data.ts (26 bytes)
```

### Generate the service for http calls 
* $ cd src/app/ui 
* $ mkdir services 
* $ ng g service data 
```
CREATE src/app/ui/services/data.service.spec.ts (347 bytes)
CREATE src/app/ui/services/data.service.ts (133 bytes)
```

--- 

### Inport the Ui & Service Module into the app.component.ts 
* project/src/app/app.module.ts
```
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiModule } from './ui/ui.module';
import { ServiceModule } from './service/service.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UiModule,
    ServiceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

### To Build the appication
* $ ng build

### To Execute the application
* $ ng serve

### Appliation Url
  * app module url
  * http://localhost:4200
### form url 
  * http://localhost:4200/ui