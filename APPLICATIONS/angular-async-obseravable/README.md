# AngularAsyncObseravable

### application Generation 
* $ ng new angular-async-obseravable
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
* src/app/invalid-url/invalid-url.component.html
```
<p>requested url {{href}} is invalid!</p>
```
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

### To Generate OservableProgress Component 
* $ ng g component OservableProgress
```
? Would you like to share anonymous usage data about this project with the Angular Team at
Google under Google’s Privacy Policy at https://policies.google.com/privacy? For more
details and how to change this setting, see http://angular.io/analytics. No
CREATE src/app/oservable-progress/oservable-progress.component.scss (0 bytes)
CREATE src/app/oservable-progress/oservable-progress.component.html (33 bytes)
CREATE src/app/oservable-progress/oservable-progress.component.spec.ts (706 bytes)
CREATE src/app/oservable-progress/oservable-progress.component.ts (323 bytes)
UPDATE src/app/app.module.ts (521 bytes)
```

### To add the routing 
* src/app/app.module.ts
```
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InvalidUrlComponent } from './invalid-url/invalid-url.component';
import {  OservableProgressComponent } from './oservable-progress/oservable-progress.component';

const routes: Routes = [
  { path: '' ,redirectTo: '' , pathMatch: 'full' },
  {path: 'progress', component: OservableProgressComponent},
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
    * http://localhost:4200/progress