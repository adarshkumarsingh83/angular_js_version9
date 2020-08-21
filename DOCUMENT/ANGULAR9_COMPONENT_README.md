# Angularjs Compoents
> its a unit of the funtionality which is reusable accross application. 
> it contains a granular level functionality 

---
# [ANGULARJS COMPONENT EXAMPLE CODE](https://github.com/adarshkumarsingh83/angular_js_version9/tree/master/APPLICATIONS/angular-component)

```
APPLICATION STARTUP FLOW 

project/src/main.ts 
 AppModule is imported and 
 configured to bootstrap first in the application. 

project/src/app/app.module.ts
 AppComponent is configured in @NgModule( xxx, bootstrap:[AppComponent],xxx )
 is configured to load 

project/src/app/app.component.ts
 in side this 

 import { Compoents } from '@angular/core';

 @Compoent({
 	// which is the tag in the 'project/src/index.html' file to link this AppCompoent to the tag in html  
 	selector: 'app-root' ,
 	// its a template which has to be replace with the tag in html file. 
 	temlate: '<h1> welcome to the espark {{title}}</h1>', 
 	or 
 	templateUrl: './app.compoent.html',
    // scss which has to applied to the tag in the 'project/src/index.html' <app-root> tag
 	styleUrls:['./app.components.scss']
 	})
 export class AppCompoent{
 	
 	title='ESPARK-application-name'
      
 }
```

### Generate a Component
* get inside the module where we want to generate the component
* or if we generate at the project root level then it will be crated in app.module 
* parent module will be updated with the entry of the compoents 
* ng g c <'component-name'>


### Nested Compoent 
* import the module where the component exist in the module-name.module.ts file with import statement if the component is from differnt module 
* if the component is from different module then in @NgModule(xxx, import:[ComponentName],xxxx) also has to be mentioned.
* take the selector name and add into the module-name.compoent.html with tag 
* <'selector-name'></'selector-name'>



