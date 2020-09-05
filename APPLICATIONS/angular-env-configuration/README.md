# AngularEnvConfiguration

### To Generate Application 
* $ ng new angular-env-configuration
```
? Would you like to add Angular routing? Yes
? Which stylesheet format would you like to use? 
  CSS 
❯ SCSS   [ https://sass-lang.com/documentation/syntax#scss                ] 
  Sass   [ https://sass-lang.com/documentation/syntax#the-indented-syntax ] 
  Less   [ http://lesscss.org                                             ] 
  Stylus [ http://stylus-lang.com                                         ] 
  ```

### To bootstrap installtion
* $ npm i bootstrap jquery propper --save
* project/angular.json
    * projects->project-name->architect->build->option->style
    * projects->project-name->architect->build->option->script
* restart the app becoz for angular.json it will not do auto reload
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

### configuration in env files 
* project/enviroments/enviorement.ts 
```
export const environment = {
  production: false,
  message: "welcome to defalt profile"
};
```
* project/enviroments/enviorement.prod.ts 
```
export const environment = {
  production: true,
  message: "welcome to prod profile"
};

```

### Config reading in app.module.ts 
```
import { Component } from '@angular/core';
import { environment}  from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-env-configuration';
  message = environment.message;
}
```

### show in app.component.html 
```
 <h5 class="display-5">{{message}}</h5>
```

### To Execute
* ng serve
### app url
* http://localhost:4200/

## on prod env 
* ng build --production
* ng serve --configuration production