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


