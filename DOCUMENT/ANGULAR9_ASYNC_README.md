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
