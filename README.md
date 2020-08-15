
# Angular Installation
### To Check Node version 
* $ node -v 

### To install Angular Cli 
* $ npm i @agnular/cli

### To Check Angular Version 
* $ ng --version 

# Basic Application Development 
### To Create Angular Project 
* ng new <project-name>
```
$ want routing configuration in prject y/n
$ select the type of css => SCCS 
$ 
```
### To Execute the Angular project
* $ ng serve 
* $ ng serve --port=<4300>

### To access the application 
* http://localhost:4200

### To Stop Server 
* crt + c

---

# Bootstrap in angularjs 
### installation to angularjs 
* $ npm i bootstrap --save

### import the boot srap in angularjs application 
* project/src/app/app.component.html which is starting point for the angular  
```
clean the file and only leave the <router-outlet></project-name>router-outlet> tag 
add the custom tag <h1 class="display-1"> WELCOME TO ESPARK</h1>
```
* @import '~bootstrap/dist/css/bootstrap.min.css'; has to be added into the  project/src/style.cass 

---

# Angular Directory Structures
### Directory Structure 

* project/e2e 
- * this contains the protracctor test cases end to end for the angularjs 
- * karma runnuer and jasmin is lang to wire the unit test script

* project/src 
- * project/src/app where the js files will be their components, moduiles, services, routers and directive etc.
- * app.component.ts its a components 
- * app.module.ts its a module 
- * app.service.ts its a service
- * app.component.spect.ts its a unit test file 

* project/src/assets 
- * which contains images, style sheets, icon and etc

* project/src/enviroments 
- * file contains the env configurations like var, urls or piplelines 

* project/src/polyfills.ts 
- * this will help for backward compatablity if client browser is outdates ES6 funtionality enabled 

* project/src/main.ts 
- * booting the angular js  application its a main file 

* project/src/style.css
- * global style sheet for the project it shoudl containe common and generic styles 

* project/src/test.ts 
- * test script for the booting process 

* project/angular.json
- * contains the  setttings and configurations for angular project 

* project/karma.conf.js
- * karma runner for the unit test in application 

* project/tsconfig.json
- * build and compilation for angular application 

* project/tslint.json 
- * linting and coading standard 

* project/package.json

* project/package-lock.json

---









