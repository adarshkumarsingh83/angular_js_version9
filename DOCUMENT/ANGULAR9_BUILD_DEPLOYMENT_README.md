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


