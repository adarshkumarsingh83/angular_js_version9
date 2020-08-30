# Angular Testing 
--- 

### Unit Testing 
* smaller independent modules service pipes unit testing 
* f/w used are jasmine and karma 
* xxx.spect.ts for unit test script file 

### Jasmine F/w 
* it has navtive support for synch testing 
* it support spy objectt 
* Example 
```
   describe('appComponent',()=>{
   	      it('it should navigate',()=>{
   	      	    console.log("navigate to page ");
   	      	})
   	})
```

### Karma f/w 
* inbuld test f/w for running test case
* karma config file src/karma.config.js 

### cmd to execute unit test 
* $ ng test 


### End to End Testing 
* Automating the entrie end to end functionalithy flow 
* Protractor f/w 
* src/e2e where all the e2e test script 
* e2e-spec.ts is the file 

### Protractor f/w 
* e2e testing f/w 
* build on webdrivers 
* protractor config file e2e/protractor.conf.js 


----

# E2E Test 

* Angular uses Protractor for running the e2e tests 
* Protractor is build on the top of web drivers 
* projct/e2e where all the e2e test spec file will be avaliable 
* for configuration project/e2e/ protractor.conf.js 
* By default it uses chrome driver 

### To Execute the E2E Test 
* ng e2e 

### Skps Tests 
* for new application 
	* ng new <'project-name'> --skipTests
* for existing application 
	* Not to generate more test case for existing projct for new components or services or others 
		* project/angular.json projects -> schematics -> SkipTests:true
		```
		"schematics": {
	        "@schematics/angular:component": {
	          "style": "scss",
	          skipTests: true
	        }
       }
		```
	* Disabling the existing generated test case prefix the 
		* xdescribe 
		 ```
		 xdescribe('AppComponent', () => {
                xxxx
          });
		 ```
		* xit 
         ```
         xit('should display welcome message', () => {
                xxxxx
		 });
         ```

### Only Executing Specific Test 
* Focus Test Case which will be executed only 
		* fdescribe 
		 ```
		 fdescribe('AppComponent', () => {
                xxxx
          });
		 ```
		* fit 
         ```
         fit('should display welcome message', () => {
                xxxxx
		 });
* For E2E 
	* project/e2e/protractor.conf.js mentioned in confi file 
	```
	exports.config = {
         xxxxxxxx
	  specs: [
	    './src/**/*.e2e-spec.ts',  // execute every thing 
	    './src/**/name.e2e-spec.ts' // execute only specific file 
	  ],
	    xxxxxxxxx
	 }
	```
