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
* create a json file inside the dir which is created earlier 
	* data $ touch dtatbase.json 
	```
    {
        "employee":[
             {"id":1,"name":"adarsh kumar"},
             {"id":2,"name":"radha singh"},
             {"id":3,"name":"amit kumar"}
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

## Generate the Module 
* $ ng g module <'module-name'>

## To Generate Component 
* $ cd <'module-name'>
* $ ng g component <'component-name'>

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



