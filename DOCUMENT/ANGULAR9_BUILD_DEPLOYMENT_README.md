# Angular Build and Deployment 

---

### Build 
* Compile Type script code -> convert to java script -> project/dist/  
* application builder uses *webpack build tool* with defualt config in projc/angular.json 

### Deployments 
* all the file in projectt/dist file after compilation  must be deploying to server root dir for execution 



### AOT Ahead of Time compilation 
* angular code need to be understand by browser 
* angular is written in type script -> whixh is compile -> then translated to java script or ES6 
* Advantage 
	* fast rendering 
	* fewer asynchronous request 
	* smaller angular f/w download size 
	* Detect template erros 
	* Better security 

* Angular Way of Compiling 
	* Just in time 
		* compiles app in the browser at runtime till angular 8 
	* Ahead of Time 
		* which compiles app lib at build time started from angular 9 

* AOT 
	* phase 1 
		* code analysis - ts compiler and aot collector create a representaion of the soruce and meta data collected from @xxxx 
	* phase 2 
		* code generation - compiler static reflector interprets the metadata collected in phase 1 (TypeScript code -> ES6 Code )
	* phase 3 
		* template type checking - angular template compiler uses the ts compile tto validats the binding expression in template  


* Build Cli Cmd 
	* ng build --base-href 
	* ng build --aot
	* ng build --outputPath=<'new path'>
	* ng build --prod=true
	* ng build --index=index
	* ng build --deployUrl=xxxxx


### Angular Multi project 
```
    espark-project // main proejct 
         |---project1  // sub project
    	 |---project2  // sub project
    	 |---project3  // sub project
```
* Build Project Cmd 
	* $ ng build --project=<'project_name'> --baseHref=http://<'host-name'>:<'port-number'>/<'project_name'>/
	

