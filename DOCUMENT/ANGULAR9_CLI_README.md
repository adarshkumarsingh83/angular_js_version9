# ANGULAR9 CLI 
---

### To check the Angular cli version 
* ng --version 

### To Generate Angular project 
* ng new <'application-name'>

### To Generate Module 
* $ ng generate module <'module-name'> --route <'route-name'> --module <'parent-module-name'>

### To Generate the routs 
* ng generate module <'module-name'> --flat-module=app


### To Generate Component/Modules/Service/Router/Directive/Pipes/Decorator
* ng generate component <'component-name'> or ng g c <'component-name'>
* ng generate module <'module-name'> or ng g m <'module-name'>
* ng generate service <'service-name'> or ng g s <'service-name'>
* ng generate pipe <'pipe-name'> or ng g p <'pipe-name'>
* ng generate decorator <'decorator-name'> 

### To Execute the Unit Test 
* unit test are executed using karma f/w and writtin in jasmin lang.
* ng test 

### To Execute the E2E Test 
* e2e test are is executed using protractor 
* ng e2e 

### To Compile and Execute the Application 
* default port is 4200
* AOD is by default is enabled for prod env 
* ng serve 
* ng serve --port=<'portnumber'>

### To Update the Angular Cli and angular code to thee latest version from older.
* ng update 

### To Build the Angular code for final Build 
* it generate a dist dir with all the js and other file for execution 
* ng build 

### To Validation the code linting 
* To Valdiate the codeing standard and other syntax of angularjs 
* ng lint 

### Services Generations 
* Generate a Service using cli 
	* ng generate service  <'service-name'>
* Importing Service 
	* import { Injectable } from '@angular/core';
