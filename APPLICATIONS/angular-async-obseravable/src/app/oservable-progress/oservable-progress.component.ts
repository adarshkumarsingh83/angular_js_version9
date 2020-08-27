import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-oservable-progress',
  templateUrl: './oservable-progress.component.html',
  styleUrls: ['./oservable-progress.component.scss']
})
export class OservableProgressComponent implements OnInit {

  status: any;
  statusObservable : Observable<any>;

  constructor() { }

  ngOnInit(): void {   
  
    this.statusObservable =  new Observable(
          obseravable => {
          	   setTimeout(() => {
                obseravable.next('started downloading');
          	   }, 2000);

          	    setTimeout(() => {
                  obseravable.next('processing downloading');
          	   }, 4000);

          	    setTimeout(() => {
                  obseravable.next('processing completed');
          	   }, 6000);

          	   // for error case senerio 
          	    setTimeout(() => {
                  obseravable.error();
                    this.status = "error "
          	   }, 8000);

          	   setTimeout(() => {
                obseravable.complete();
                console.log('processing finsish');
          	   }, 10000);
          }
     	);

     	this.statusObservable.subscribe(val => {
         console.log(val);
     		  this.status = val;
     	});

     	this.statusObservable.subscribe(val => {
     		  console.log("log subscribe "+val);
     	});
  }

}
