

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

* project/src/style.css
- * global style sheet for the project it shoudl containe common and generic styles 



* project/angular.json
- * contains the  setttings and configurations for angular project 

* project/karma.conf.js
- * karma runner for the unit test in application 

* project/tsconfig.json
- * build and compilation for angular application 

* project/tslint.json 
- * linting and coading standard 

* project/src/main.ts 
- * booting the angular js  application its a main file 
```
 its first file which angular will search to start the application 
 it contains the app module as the starting module 
 bootstrap module will start the application which is first module which init the appliation 
 we can write our own custom module and load it by usign bootstrap module .
```

* project/src/test.ts 
- * test script for the booting process 
```
 here all the boot strap of the module and application is tested 
```

* project/package.json
```
{
  "name":"xxx",
  "version":xxx,
  "script":{
  	// npm scripts commands for build and piplelines 
  	// we can customized the script and cmd for execution
  },
  "dependency":{
  	// required modules and lib required for exceution 
  },
  "devvDependency":{
  	// dev dependency for application development 
  }

}
```

* project/package-lock.json
```
{
	// its required for the production modes 
	// where to fetch the dependency and subdependency files and realated inter dependecy 
	// without which application won't work in prod mode 
}
```




