# Angular Crud Operation 

--- 

## Create a new Angular app 
* $ ng new <'projct-name'> 
```
? Would you like to add Angular routing? Yes
? Which stylesheet format would you like to use? 
  CSS 
❯ SCSS   [ https://sass-lang.com/documentation/syntax#scss                ] 
  Sass   [ https://sass-lang.com/documentation/syntax#the-indented-syntax ] 
  Less   [ http://lesscss.org                                             ] 
  Stylus [ http://stylus-lang.com 
 ```

## Install the Json Mock Serve 
* $ npm -i --save json-server 

* create a dir to store the json file for mock data in location  project/src/assets 
	* $ mkdir data 

* For Image 
	* copy the images under the assets dir 
	* eg 1img.jpg, 2img.jpg ... 
	
* create a json file inside the dir which is created earlier 
	* data $ touch dtatbase.json 
	```
    {
        "employee":[
             {"id":1,"name":"adarsh kumar","image":"http://localhost:4200/assetts/1img.jpg"},
             {"id":2,"name":"radha singh","image":"http://localhost:4200/assetts/2img.jpg"},
             {"id":3,"name":"amit kumar","image":"http://localhost:4200/assetts/3img.jpg"},
          ],
          "user":[
              {"id":1,"type":"admin"},
              {"id":2,"type":"user"}
          ]
    }
	```
* to execute the json serer 
	* json-server --watch ./data/datbase.json 



## Install the Bootstrap 
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

* project/src/app/app.component.html
```
<div class="container">
  <div class="alert alert-primary" role="alert">
    <h4 class="display-3">WELCOME TO APP MODULE</h4>
  </div>
</div>
<router-outlet></router-outlet>
```

---

## Approach with eager loading 


### Generate the Module 
* $ ng g module <'module-name'>
* src/app/xxx/xxxx.module.ts
```
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class XxxxxModule { }
```

### To Generate Component 
* $ cd <'module-name'>
* $ ng g component <'component-name'>
* project/src/app/xxx/xxxx.component.ts
```
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class XxxxxComponent implements OnInit {

  constructor() {
   }
  
  ngOnInit(): void {
  }

}

```
### Export the component  for global use 
* src/app/xxx/xxxx.module.ts
```
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { XxxxxComponent} from '../xxx/xxx.component';

@NgModule({
  declarations: [XxxxxComponent],
  imports: [
    CommonModule
  ],
  exports:[
    XxxxxComponent
  ]
})
export class XxxxxModule { }
```

### Import the new module to the app module 
* src/app/app.module.ts
```

import { NgModule } from '@angular/core';
import { XxxxModule } from './xxx/xxx.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    XxxxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```

### To show the compoenent to app.component.html 
* take the selector name form the component and use it in the template 
* project/src/app/xxx/xxxx.component.ts
```
@Component({
  selector: 'app-xxxx',
})
```

* project/src/app/app.component.html

```
<div class="container">
  <div class="alert alert-primary" role="alert">
    <h4 class="display-3">WELCOME TO APP MODULE</h4>
  </div>
</div>
<h3> <app-xxx> </app-xxx> </h3>

<router-outlet></router-outlet>
```

### Generate the module with lazy loading 

---

## Appraoch with lazy loading 

## [ANGULAR CRUD EXAMPLE](https://github.com/adarshkumarsingh83/angular_js_version9/tree/master/APPLICATIONS/angular-http-crud-operation)

### Generate module 
* $ ng g module <'module-name'> --route <'route-name'> --module app.module 
* src/app/xxx/xxxx.module.ts
```
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class XxxxxModule { }
```

### To Generate Component 
* $ cd <'module-name'>
* $ ng g component <'component-name'>
* project/src/app/xxx/xxxx.component.ts
```
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class XxxxxComponent implements OnInit {

  constructor() {
   }
  
  ngOnInit(): void {
  }
}
```

### Export the component for global use 
* src/app/xxx/xxxx.module.ts
```
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { XxxxxComponent} from '../xxx/xxx.component';

@NgModule({
  declarations: [XxxxxComponent],
  imports: [
    CommonModule
  ],
  exports:[
    XxxxxComponent
  ]
})
export class XxxxxModule { }
``` 

### Import the new module to the app module
* src/app/app.module.ts
```
import { NgModule } from '@angular/core';
import { XxxxModule } from './xxx/xxx.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    XxxxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```


### Adding routes for the components 
* project/src/app/xxx/xxx-routing.module.ts
```
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Xxxxomponent } from './xxx/xxxx.component';

const routes: Routes = [
  { path: 'form' , component: Xxxxomponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class XxxxRoutingModule { }
```
---


### Creating a Interface for uniformity of data model 
* $ ng generate interface <'intrface-name'>

```
export interface XxxInterface {
	id: number;
	name: string;
	email: string;
	active: boolean;
	xxxx
}
```

* In service class while calling the http methods 
* Strict Type Binding for response type 
```

 export class DataService {
   createXxx(xxxBody):Obserable<XxxxInterface>{
   	  this.httpClient.post<XxxInterface>(url,xxxBody);
   }

   updateXxx(xxxBody):Obserable<XxxxInterface>{
   	 this.httpClient.put<XxxInterface>(url,xxxBody);
   }

   getXxx(xxxId):Obserable<XxxxInterface>{
   	 this.httpClient.get<XxxInterface>(url);
   }

   deletexx(xxxId):Obserable<XxxxInterface>{
   	 this.httpClient.delete<XxxInterface>(url);
   }
}
```

* xxx.component.ts
```
export class XxxxComponent implements OnInit {

     // auto matically list of Xxx Type will be binded 
	 dataList: XxxInterface;

     constructor(private daaService: DataService) {}

	 ngOnInit(): void { 
         
	     this.daaService.getDataList().subscribe(
	      (response) => {
	        this.dataList = response.data;
	      },
	      (error) => {
	        console.log(`FormComponent.fetchData() Erros `, error);
	      }
	    );
    }
}
```

* xxx.component.html 
```
<tr *ngFor="let dataItem of dataList">
	  <td>{{dataItem.id}}</td>
      <td>{{dataItem.name}}</td>
      <td>{{dataItem.email}}</td>
<tr>

```






