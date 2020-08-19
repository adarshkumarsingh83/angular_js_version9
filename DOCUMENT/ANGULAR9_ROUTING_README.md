# Angular Routingg 
> its a technique to mange the path and routs for application 
*  @angular/router package for router 
* Router array contains all routes in application 
* Router has states 
* Router is singleton per appliation. 
* handle routes 
	* routes to component 
	* getting query param 
	* getting url segments 
	* loading child routes for modules 
	* laxy loading 
	* handling wild card routes 
	* handling defulat routes 
	* handling 404 routes 
---

## Routing Strategy
* PathLocationStrategy 
	* its default strategy 
	* /home
	* /search 
---

* HashLocationStrategy 
	* /#/home
	* /#/search 

* while application creation option for the routing option 
* ng new <'project-name'>
```
$ want routing configuration in prject y/n => y 
$ select the type of css => SCCS 
```
* project/src/app/app.module.ts
```
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LocationStrategy, MashLocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    { provide: LocationStrategy, useClass: MashLocationStrategy} // adding hashrouting strategy 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
```
* now the application will show has url http://localhost:4200/#/
* $ ng serve

---

## Base HREF 
> base href is "/" for root dir 
* Its present in project/src/index.html as <base href="/"> 
* Building code in defualt dir 
	* ng build // to build the code in root dir
* Setting the differnt dir for build
	* ng build --base-href"/espark/" // now it will build the code in espark dir 

---

## Routing Modules 
> module to hold all the routing configuration into one single module 
* We can generate app routing module 
	* ng generate module <'app-routing'> --flat-module=app 

* project/src/app/app.routing.module.ts
```
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes =[
     { path: '' ,redirectTo: 'rnroll' , pathMach: 'full' }
     { path: '**' ,redirectTo: 'rnroll' , pathMach: 'full' }
]

@NgModule(
      imports: [RouterModule.forRoot(routes)],
      exports: [RouterModule]
	)
export class AppRoutingModule{


}
```
* project/src/app/app.module.ts
```
import { AppRoutingModule } from './app/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LocationStrategy, MashLocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

```

---

## Router 
> it lets define where the output should be displayed. \
> it can be difined in app module or in indivisual module 

* /src/app/app.component.html
```
 <router-outlet> </router-outlet>

 NOTE: output of component will be loaded into this <router-outlet> </router-outlet> 
 based on the routes mentioned into the router routs arrays 
```

---

## Rout configuration 
* Path 
* component 
* redirectTo
* children 

* ng g component wish 
* project/src/app/wish/wish.component.html
```
<div>
    <h1>ESPARK ANGULARJS WISH COMPONENT</h1>
</div>

```
* project/src/app/wish/wish.component.ts
```
import { Component } from '@angular/core';

@Component({
  selector: 'app-wish-view'
  templateUrl: './wish.component.html',
  styleUrls: ['./wish.component.scss']
})
export class WishComponent {
  title = 'wish';
}

```

* project/src/app/app.routing.module.ts
```
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Wish } from './wish/wish.component';

const routes: Routes =[
     { path: 'wish' ,component: WishComponent },
     { path: 'espark' ,component: WishComponent }
]

@NgModule(
      imports: [RouterModule.forRoot(routes)],
      exports: [RouterModule]
	)
export class AppRoutingModule{


}
```
* project/src/app/app.module.ts
```
import { AppRoutingModule } from './app/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LocationStrategy, MashLocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

```
* url to access 
	* http://localhost:4200/wish
	* http://localhost:4200/espark

* project/src/app.component.html
```
<div>
<ul>
    <li><a href='wish'> wish </a> </li>
    <li><a href='espark'> espark</a></li>
 <ul>   
</div>

```
* url to access 
	* http://localhost:4200 


--- 

## Paramertised Routes 
> routes which can take param with the urls 

* project/src/app/app.routing.module.ts
```
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Wish } from './wish/wish.component';

const routes: Routes =[
     { path: 'wish/:message' ,component: WishComponent },
     { path: 'espark/:message' ,component: WishComponent }
]

@NgModule(
      imports: [RouterModule.forRoot(routes)],
      exports: [RouterModule]
	)
export class AppRoutingModule{

}

```

* project/src/app/wish/wish.component.html
```
<div>
    <h1>ESPARK ANGULARJS WISH COMPONENT</h1>
      {{ queryParamValue }}
</div>

```
* project/src/app/wish/wish.component.ts
```
import { Component } from '@angular/core';

@Component({
  selector: 'app-wish-view'
  templateUrl: './wish.component.html',
  styleUrls: ['./wish.component.scss']
})
export class WishComponent {
  title = 'wish';

  queryParamValue = '';
  constructor(private activatedRoutes: ActivatedRoute){
     
     this.activatedRoutes.params.subscribe(data => {

     	 this.queryParamValue = data.message;
     	})
  }
}

```

* url now for the 
	* http://localhost:4200/wish/welcome to espark
	* http://localhost:4200/espark/welcome to espark




