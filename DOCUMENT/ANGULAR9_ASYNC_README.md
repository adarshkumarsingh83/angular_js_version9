---

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