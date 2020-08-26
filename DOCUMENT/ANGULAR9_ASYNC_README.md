
## Obseravable 
* stream of data which is emitted asynch 
* is prot of RxJS lib 
* Obserable interface in Angular 
* Observer keep track of changes or listening to Obserable 
* Observer method 
	* next()
	* error()
	* complete()
* Subscription & Subscribe
* we have to subscribe to the Obseravable 
* we can have multiple subscribers of the Obseravable
* we can unscribe from an subscriber 
* its used in below by angular 
	* Http
	* routing 
	* Event Handling 

### Example 
* src/app/observable/observable.component.ts
```
import { Component, OnInit } from '@angular/core';
import { Obseravable } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss']
})
export class ObservableComponent implements OnInit {

  status = any;
  statusObservable : Obseravable<any>
  constructor(){
  }
  
  ngOnInit(): void {   
  
    this.statusObservable =  new Obseravable(
          obseravable =>{
          	   setTimeout(()=>{
                    observable.next('started downloading');
          	   }, 20000);

          	    setTimeout(()=>{
                    observable.next('processing downloading');
          	   }, 40000);

          	    setTimeout(()=>{
                    observable.next('processing completed');
          	   }, 60000);

          	   // for error case senerio 
          	    setTimeout(()=>{
                    observable.error();
                    this.status = "error "
          	   }, 80000);

          	   setTimeout(()=>{
                    observable.complette();
          	   }, 80000);
          }
     	);

     	this.statusObservable.subscribe(val => {
     		  this.status = val;
     	});

     	this.statusObservable.subscribe(val => {
     		  console.log(val);
     	});
  }
}
```

* src/app/observable/observable.component.html
```
  <h3> {{ status }} </h3>
```

--- 

### Dependency Injection 
* ability to add the functionality of component at run time 
* services are injected to the components 
* @Injectable is used to let component know about he dependency injection 


### Services in Angular 
* services are reusable shared functionality 
* its a singleton 
* can be used to share data b/w components
* Generate a Service using cli 
	* we can geneerate services in any dir 
	* ng generate service  <'service-name'>
* Importing Service into the service to make it injectable 
	* import { Injectable } from '@angular/core';
* providedIn: 'root' mean it can be injectable in any of the module thorughout projct 

* src/app/data.service.ts
```
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class DataService {

	constructor(){
	}

	getData(){
		const dataList = [
            {id: 1, name: 'adarsh kumar'},
            {id: 2 name: 'amit kumar'},
            {id: 3, name: 'radha singh'}
		]
		return dataList;
	}
}

```	


* src/app/data/data.component.ts
```
import { Component, OnInit } from '@angular/core';
import { DataService } from './app/data.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit {

	dataList = [] ;

  constructor(private dataService: DataService){
  }
  
  ngOnInit(): void {   
  	this.dataList = this.dataService.getData();
  }

}
```

* src/app/data/data.component.html
```
<div>
   <ul>
     <li *ngFor="let data of dataList">
         {{ data.id }} &nbsp; {{ data.name }}
     </li>
   </ul>
</div>

```


### Directly Invoking Service into Component Template 

* src/app/data.service.ts
```
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class DataService {

	constructor(){
	}

	getData(){
		const dataList = [
            {id: 1, name: 'adarsh kumar'},
            {id: 2 name: 'amit kumar'},
            {id: 3, name: 'radha singh'}
		]
		return dataList;
	}

	directTemplateService(){
		console.log('invoked from component template ');
	}
}

```	

* src/app/data/data.component.ts
```
import { Component, OnInit } from '@angular/core';
import { DataService } from './app/data.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit {

	dataList = [] ;

  constructor(public dataService: DataService){
  }
  
  ngOnInit(): void {   
  	this.dataList = this.dataService.getData();
  }

}
```

* src/app/data/data.component.html
```
<div>
   <button (click)="dataService.directTemplateService()">INVOKE DIRECT SERVICE METHOD FROM TEMPLATE</button>
</div>

```

---

### HttpClient 
* client for making http request response processing 
* its avalable in @angular/common/http pkg.
* HttpClientModule need to be imported in app.mdoule 
* HttpClient provide headers and interceptors also 
* HttpClient methods 
	* get()
	* put()
	* post()
	* delete() 
	* head()
	* jsonp()
	* options()
	* patch()
* provide Observable api
* provide Http Headers in options 
* provide typed request 
* include response object 
* provide req and res interceptor 
* provide error handling 


### To setup json mock server 
* cli cmd for server installation 
	* $ npm i -g json-server 
* crate a json file for the mock server 
	* src/assets/data.json 
```
{
	"data": [
    {'id': 1, 'name': 'adarsh kumar'},
    {'id': 2  'name': 'amit kumar'},
    {'id': 3, 'name': 'radha singh'}
   ],
   "employees":[
      {'empId':1,'email':'adarsh@kumar'},
      {'empId':2,'email':'amit@kumar'},
      {'empId':3,'email':'radha@singh'}
   ]
}


```
* To start the json server with mock json file 
	* cd src/assets
	* json-server --watch ./data.json
	* To stop server press s + enter 

```
  http://localhost:3000/
  http://localhost:3000/data
  http://localhost:3000/employees

```

### Steps for HttpClient 
* Import HttpClientMOdule in app module 
* import Httpclient in our service 
* inject the Httpclient in constructor of service 
* Implmenet get/post/put/delete method 

### HttpClient get()
* To read data from server 
* header params responesType withCredentials etc can be passed 
	* options 
		* headers: type HttpHeader 
		* Params: type HttpParams
	* get('url',options:{headers:{},params:{}})
* Observable is reuturn from get() 


### Example HttpClient get()
* project/src/app/app.module.ts
```
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

```

* project/src/app/data.service.ts
```
import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class DataService {

	constructor(private httpClient: HttpClient){	
	}

	getData(){
		cosnt httpHeaders = new HttpHeaders();
		httpHeaders.append('content-type','application/json');
		return this.httpClinet.get('http://localhost:3000/data',{ headers: httpHeaders});        
	}
}
```

* src/app/data/data.component.ts
```
import { Component, OnInit } from '@angular/core';
import { DataService } from './app/data.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit {

	dataList = [] ;

  constructor(public dataService: DataService){
  }
  
  ngOnInit(): void {   
  	this.dataService.getData().subscribe( data => {
  		 this.dataList = data;
  	});
  }

}
```

* src/app/data/data.component.html
```
<div>
   <ul>
     <li *ngFor="let data of dataList">
         {{ data.id }} &nbsp; {{ data.name }}
     </li>
   </ul>
</div>

```

--- 


### HttpClient post()
* for creating resource on server 
* header params responesType withCredentials etc can be passed 
	* body 
		* can be of any json type or etc 
	* options 
		* headers: type HttpHeader 
		* Params: type HttpParams
	* post('url',body,options:{headers:{},params:{}})
* Observable is reuturn from post() 

### Example HttpClient post()
* project/src/app/app.module.ts
```
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

* project/src/app/data.service.ts
```
import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class DataService {

	constructor(private httpClient: HttpClient){	
	}

	postData(data){
		cosnt httpHeaders = new HttpHeaders();
		httpHeaders.append('content-type','application/json');
		return this.httpClinet.post('http://localhost:3000/data',data,{ headers: httpHeaders}); 
	}

	getData(){
		cosnt httpHeaders = new HttpHeaders();
		httpHeaders.append('content-type','application/json');
		return this.httpClinet.get('http://localhost:3000/data',{ headers: httpHeaders});        
	}
}
```

* src/app/data/data.component.html
```
<div>
   <h3> data form </h3>
    {{postMsg}}
    <div ng-if="!postMsg">Data Stored</div>
    <div ng-if="postMsg">Data Not Stored</div>
    <div>
    <h1>ESPARK DATA FORM</h1>
    <form #signInForm="ngForm" (ngSubmit)="savaData(signInForm)" >
	  <div class="form-group">
	    <label for="exampleInputId">User Id</label>
	    <input type="text" class="form-control" id="exampleInputId" name="idField" ngModel>
	  </div>
	  <div class="form-group">
	    <label for="exampleInputName">User Name</label>
	    <input type="text" class="form-control" id="exampleInputName" name="idField" ngModel>
	  </div>
	  <button type="submit" class="btn btn-primary">Submit</button>
   </form>
  </div>

  <h3> data list</h3>
   <ul>
     <li *ngFor="let data of dataList">
         {{ data.id }} &nbsp; {{ data.name }}
     </li>
   </ul>
</div>

```


* src/app/data/data.component.ts
```
import { Component, OnInit } from '@angular/core';
import { DataService } from './app/data.service';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms'; 

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit {

  data;
  postMsg='';
  dataList = [] ;
  myForm: FromGroup;

  constructor(public dataService: DataService){
  }
  
  ngOnInit(): void {   
  	this.dataService.getData().subscribe( data => {
  		 this.dataList = data;
  	});
  }


   savaData(){
      this.data = { "id": this.myForm.value.idField,"name": this.myForm.value.nameField}
      console.log(data);
      this.dataService.postData(data).subscribe( data => {
            this.postMsg = data;
      });
   }
}
```

--- 

### HttpClient put()
* for updating resource on server 
* header params responesType withCredentials etc can be passed 
	* body 
		* can be of any json type or etc 
	* options 
		* headers: type HttpHeader 
		* Params: type HttpParams
	* put('url',body,options:{headers:{},params:{}})
* Observable is reuturn from put() 

### Example HttpClient post()
* project/src/app/app.module.ts
```
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
```



* project/src/app/data.service.ts
```
import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class DataService {

	constructor(private httpClient: HttpClient){	
	}

	putData(id,data){
		cosnt httpHeaders = new HttpHeaders();
		httpHeaders.append('content-type','application/json');
		return this.httpClinet.put('http://localhost:3000/data/'+id,data,{ headers: httpHeaders}); 
	}

	postData(data){
		cosnt httpHeaders = new HttpHeaders();
		httpHeaders.append('content-type','application/json');
		return this.httpClinet.post('http://localhost:3000/data',data,{ headers: httpHeaders}); 
	}

	getData(){
		cosnt httpHeaders = new HttpHeaders();
		httpHeaders.append('content-type','application/json');
		return this.httpClinet.get('http://localhost:3000/data',{ headers: httpHeaders});        
	}
}
```

* src/app/data/data.component.html
```
<div>
   <h3> data form </h3>
    {{operationMsg}}
    <div ng-if="!operationMsg">Data Stored</div>
    <div ng-if="operationMsg">Data Not Stored</div>
    <div>
    <h1>ESPARK DATA FORM</h1>
    <form #signInForm="ngForm" (ngSubmit)="savaData(signInForm)" >
	  <div class="form-group">
	    <label for="exampleInputId">User Id</label>
	    <input type="text" class="form-control" id="exampleInputId" name="idField" ngModel>
	  </div>
	  <div class="form-group">
	    <label for="exampleInputName">User Name</label>
	    <input type="text" class="form-control" id="exampleInputName" name="idField" ngModel>
	  </div>
	  <button class="btn btn-primary">Create</button>
	  <button class="btn btn-primary" (click)="putData(1);" >Update</button>
   </form>
  </div>

  <h3> data list</h3>
   <ul>
     <li *ngFor="let data of dataList">
         {{ data.id }} &nbsp; {{ data.name }}
     </li>
   </ul>
</div>
```

* src/app/data/data.component.ts
```
import { Component, OnInit } from '@angular/core';
import { DataService } from './app/data.service';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms'; 

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit {

  data;
  operationMsg='';
  dataList = [] ;
  myForm: FromGroup;

  constructor(public dataService: DataService){
  }
  
  ngOnInit(): void {   
  	this.dataService.getData().subscribe( data => {
  		 this.dataList = data;
  	});
  }

   putData(id){
      this.data = { "id": this.myForm.value.idField,"name": this.myForm.value.nameField}
      console.log(data);
      this.dataService.putData(id,data).subscribe( data => {
            this.operationMsg = data;
      });
   }

   savaData(){
      this.data = { "id": this.myForm.value.idField,"name": this.myForm.value.nameField}
      console.log(data);
      this.dataService.postData(data).subscribe( data => {
            this.operationMsg = data;
      });
   }
}
```

---

### HttpClient delete()
* for delete resource on server 
* header params responesType withCredentials etc can be passed 
	* options 
		* headers: type HttpHeader 
		* Params: type HttpParams
	* delete('url',options:{headers:{},params:{}})
* Observable is reuturn from delete() 


### Example HttpClient delete()
* project/src/app/app.module.ts
```
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

* project/src/app/data.service.ts
```
import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class DataService {

	constructor(private httpClient: HttpClient){	
	}

	deleteData(id){
		return this.httpClinet.delete('http://localhost:3000/data/'+id); 
	}

	putData(id,data){
		cosnt httpHeaders = new HttpHeaders();
		httpHeaders.append('content-type','application/json');
		return this.httpClinet.put('http://localhost:3000/data/'+id,data,{ headers: httpHeaders}); 
	}

	postData(data){
		cosnt httpHeaders = new HttpHeaders();
		httpHeaders.append('content-type','application/json');
		return this.httpClinet.post('http://localhost:3000/data',data,{ headers: httpHeaders}); 
	}

	getData(){
		cosnt httpHeaders = new HttpHeaders();
		httpHeaders.append('content-type','application/json');
		return this.httpClinet.get('http://localhost:3000/data',{ headers: httpHeaders});        
	}
}
```

* src/app/data/data.component.html
```
<div>
   <h3> data form </h3>
    {{operationMsg}}
    <div ng-if="!operationMsg">Data Stored</div>
    <div ng-if="operationMsg">Data Not Stored</div>
    <div>
    <h1>ESPARK DATA FORM</h1>
    <form #signInForm="ngForm" (ngSubmit)="savaData(signInForm)" >
	  <div class="form-group">
	    <label for="exampleInputId">User Id</label>
	    <input type="text" class="form-control" id="exampleInputId" name="idField" ngModel>
	  </div>
	  <div class="form-group">
	    <label for="exampleInputName">User Name</label>
	    <input type="text" class="form-control" id="exampleInputName" name="idField" ngModel>
	  </div>
	  <button class="btn btn-primary">Create</button>
	  <button class="btn btn-primary" (click)="putData(1);" >Update</button>
	   <button class="btn btn-primary" (click)="deleteData(1);" >Update</button>
   </form>
  </div>

  <h3> data list</h3>
   <ul>
     <li *ngFor="let data of dataList">
         {{ data.id }} &nbsp; {{ data.name }}
     </li>
   </ul>
</div>
```
* src/app/data/data.component.ts
```
import { Component, OnInit } from '@angular/core';
import { DataService } from './app/data.service';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms'; 

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit {

  data;
  operationMsg='';
  dataList = [] ;
  myForm: FromGroup;

  constructor(public dataService: DataService){
  }
  
  ngOnInit(): void {   
  	this.dataService.getData().subscribe( data => {
  		 this.dataList = data;
  	});
  }

   deleteData(id){
      console.log(id);
      this.dataService.deleteData(id).subscribe( data => {
            this.operationMsg = data;
      });
   }

   putData(id){
      this.data = { "id": this.myForm.value.idField,"name": this.myForm.value.nameField}
      console.log(data);
      this.dataService.putData(id,data).subscribe( data => {
            this.operationMsg = data;
      });
   }

   savaData(){
      this.data = { "id": this.myForm.value.idField,"name": this.myForm.value.nameField}
      console.log(data);
      this.dataService.postData(data).subscribe( data => {
            this.operationMsg = data;
      });
   }
}
```

---

### HttpClient headers
* Headers are immutable 
* can be passed with 
	* get 
	* post 
	* put 
	* delete 
* common headers 
	* Content-Type
	* Authorization
* HttpHeader contains methods are below 
	* Append
	* Has
	* Get
	* Keys 
	* getAll
	* Set 
	* delete 

### Example 
```
const httpHeaders = new HttpHeaders();

httpHeaders = httpHeaders.append('Content-Type','application/json');

httpHeaders.append('Authorization','xxxxxxxxx');

httpHeaders.set('x-content-id','xxxxxxxx');

httpHeaders.has('x-content-id','');

httpHeaders.keys() // return keys of headers 


this.httpClient.get('localhost://espark.com/data',{headers: httpHeaders});

```	

---

### HttpClient param 
* Params are immutable 
* HttpParams are class to represent prams 
* can be passed with 
	* get 
	* post 
	* put 
	* delete 
* HttpParams contains methods are below 
	* Append
	* Has
	* Get
	* Keys 
	* getAll
	* Set 
	* Delete 
	* toString


### Example 
```
localhost://espark.com/data?key1=value1&key2=value2
const param = new HttpParams({
	  fromObject:{
	  	  key1: 'value1',
	  	  key2: 'value2'
	  }
});
this.httpClient.get('localhost://espark.com/data',{params: param});

localhost://espark.com/data?key1=value1&key2=value2
const param = new HttpParams({
	  fromString: `key1=${var1}&key1=${var2}`
 });
this.httpClient.get('localhost://espark.com/data',{params: param});
```

---

### HttpClient Interceptor 
* it intercept the req 
* data transformation can be done for outgoing and incoming data in next.handle(transfomredReq)
* To Generate Interceptor using cli 
	* ng genrate interceptor <'interceptor-name'>

### Example 
* project/app/logging.interceptor.ts 
```

import { Injectable } from "@angular/core";
import { HttpEvent, HttpInterceptor, HttpHandler,HttpRequest, HttpErrorResponse} from "@angular/common/http";
import { Observable } from "rxjs";
@Injectable()
export class LogginInterceptor implements HttpInterceptor {

 constructor(){}

 intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

       console.log(request)
       console.log(request.url)
      return next.handle(request);	
 }
}
```

* project/src/app/app.module.ts

```
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component
import { ReactiveFormsModule } from '@angular/forms';
import { LoadingInterceptor } from './app/logging.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }

```