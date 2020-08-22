# Angular Routing 
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
## [ANGULAR ROUTING HASHLOCATIONSTRATEGY EXAMPLE ](https://github.com/adarshkumarsingh83/angular_js_version9/tree/master/APPLICATIONS/angular-routes-hashlocationstrategy)
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
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy} // adding hashrouting strategy 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
```
* now the application will show has url http://localhost:4200/#/
* now the application will show invalid url http://localhost:4200/#/ESPARK
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

## [ANGULAR ROUTING MODULE EXAMPLE](https://github.com/adarshkumarsingh83/angular_js_version9/tree/master/APPLICATIONS/angular-routes-modules)
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
## [ANGULAR ROUTES CONFIGURAION EXAMPLE](https://github.com/adarshkumarsingh83/angular_js_version9/tree/master/APPLICATIONS/angular-routes-multi-componentroutes)
## Route configuration 
* Path 
* component 
* redirectTo
* children 

* To Generate Wish Compoenet 
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
## [ANGULAR PATHPARAM EXAMPLE](https://github.com/adarshkumarsingh83/angular_js_version9/tree/master/APPLICATIONS/angular-routes-pathparam-routes)
## Paramertised Routes 
> routes which can take param with the urls 

* project/src/app/app.routing.module.ts
```
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Wish } from './wish/wish.component';

const routes: Routes =[
     { path: 'wish/:message' ,component: WishComponent },
     { path: 'espark/:message' ,component: WishComponent },
     { path: 'espark/:message/:name' ,component: WishComponent }
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
      {{ queryMessageParamValue }}
      {{ queryNameParamValue }}
</div>

```
* project/src/app/wish/wish.component.ts
```
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-wish-view'
  templateUrl: './wish.component.html',
  styleUrls: ['./wish.component.scss']
})
export class WishComponent {
  title = 'wish';

  queryMessageParamValue = '';
  queryNameParamValue='';
  constructor(private activatedRoutes: ActivatedRoute){
     
     this.activatedRoutes.params.subscribe(data => {
     	 this.queryMessageParamValue = data.message;
     	 this.queryNameParamValue = data.name;
     	})
  }
}

```

* url now for the 
	* http://localhost:4200/wish/welcome to espark/adarsh
	* http://localhost:4200/espark/welcome to espark/adarsh

---

## Query Param in Routes 
> key value pair in the routes or url
> http://espark.com/show?name=adarsh&messge=welcome

 * project/src/app/app.routing.module.ts
```
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Wish } from './wish/wish.component';

const routes: Routes =[
     { path: 'espark' ,component: WishComponent }
]

@NgModule(
      imports: [RouterModule.forRoot(routes)],
      exports: [RouterModule]
	)
export class AppRoutingModule{

}

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

  messageValue = '';
  nameValue='';
  constructor(private activatedRoutes: ActivatedRoute){
     
     this.activatedRoutes.queryParams.subscribe(data => {
     	 this.messageValue = data.message;
     	 this.nameValue = data.name;
     	})
  }
}

```

* project/src/app/wish/wish.component.html
```
<div>
    <h1>ESPARK ANGULARJS WISH COMPONENT</h1>
      {{ messageValue }}
      {{ nameValue }}
</div>

```

* To Hit the routes 
	* http://espark.com/show?name=adarsh&messge=welcome

---

## Redirecting Routes 
> when ever is path is empty its pointing to home path \
> then we have to provide pathMatch: 'full' its a default path \
> { path:'' , redirectTo: 'home' ,"pathMatch: 'full" }

* project/src/app/app.routing.module.ts
```
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes =[
     { path: '' ,redirectTo: 'home' , pathMach: 'full' }
]

@NgModule(
      imports: [RouterModule.forRoot(routes)],
      exports: [RouterModule]
	)
export class AppRoutingModule{

}
```

* project/src/app/home/home.component.ts
```
import { Component } from '@angular/core';

@Component({
  selector: 'app-home-view'
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  
  title = 'home';

  messageValue = 'WELCOME TO ESPARK HOME';
}
```

* project/src/app/home/home.component.html
```
<div>
    <h1>ESPARK ANGULARJS HOME COMPONENT</h1>
      {{ messageValue }}
</div>

```
* url to hit this 
	* http://localhost:4200/

---

## Wildcard Routing 
> when no url is match whtn only this will executed \
> { paht: '**' }



* project/src/app/app.routing.module.ts
```
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InvalidComponent } from './invalid/invlaid.component';

const routes: Routes =[
     { path: '' ,redirectTo: '' , pathMach: 'full' }
     { path: '**' ,component: InvalidComponent }
]

@NgModule(
      imports: [RouterModule.forRoot(routes)],
      exports: [RouterModule]
	)
export class AppRoutingModule{

}
```
* project/src/app/invalid/invalid.component.html
```
<div>
    <h1>ESPARK INVALID REQUESTED URL</h1>
</div>

```

* project/src/app/invalid/invalid.component.ts
```
import { Component } from '@angular/core';

@Component({
  selector: 'app-invalid-view'
  templateUrl: './invalid.component.html',
  styleUrls: ['./invalid.component.scss']
})
export class InvalidComponent {
  
  title = 'InvalidComponent';

}
```
* url for this 
	* http://localhost:4200/zyzkjjaldja


---

## Child Routes 

>  child path or routes for the application views 
```
    { 
     path: 'espark', children:[
 						{ path: 'message', component: MessageComponent},
 						{ path: 'wish' , component: WishComponent }
					]
	}

	http://espark.com/espark/message  -> MessageComponent
	http://espark.com/espark/wish  -> WishComponent
```

* project/src/app/app.routing.module.ts
```
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InvalidComponent } from './invalid/invlaid.component';

const routes: Routes =[
     { path: 'espark', children:[
 						{ path: 'message', component: MessageComponent},
 						{ path: 'wish' , component: WishComponent }
					]}
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

* project/src/app/message/message.component.html
```
<div>
    <h1>ESPARK ANGULARJS MESSAGE COMPONENT</h1>
</div>

```
* project/src/app/message/message.component.ts
```
import { Component } from '@angular/core';

@Component({
  selector: 'app-message-view'
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent {
  title = 'message';
}

```
* URL to hit 
	* http://espark.com/espark/message 
	* http://espark.com/espark/wish  

---

## Lazy Loading 
> by default NgModule is earger loading which loads every things as soon as app started \
> loadChildren is solution for this problem 
* ng generate module <'module-name'> --route <'route-name'> --module <'parent-module-name'>
	* Ex:  ng generate module esparkwish --route wish --module app.module

* project/src/app/app.routing.module.ts
```
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InvalidComponent } from './invalid/invlaid.component';

const routes: Routes =[
   { path: 'wish', loadChildren: () => import('./wish/wish.module').then(m => m.WishModule) }
]

@NgModule(
      imports: [RouterModule.forRoot(routes)],
      exports: [RouterModule]
	)
export class AppRoutingModule{

}
```
* it will generate the WishRoutingModule in project/src/app/wish/wish.routing.module.ts
* it will generate the WishComponent.ts in side in the project/src/app/wish/wish.component.ts
* it will generate the wish view page project/src/app/wish/wish.component.html

* Url for 
	* http://localhost:4200/wish

---

## Routes Guard
>  prevent free navigation on the routes only based on \
>  authentication and auth navigation is allowed 
>  routes guard resolved to true or false 

* ng generate guard <'guard-name'>
* inject the guard in module under provider 
* Type of Routes Guard 
	* CanActivate => can visit ?
	* CanActtivateChild => can visit child ?
	* CanDeactivate => can exit a route ?
	* Resolve => route date retrival before route activate
	* CanLoad => can route to a module that laxy loaded ?

* To Generate Admin Home Component 
	* ng g component admin-home 
* To Generate Admin Guard 
	* ng generate guard admin 
		* CanActivate is slected 
	* project/src/app/admin.guard.ts
	* project/src/app/admin.guard.spec.ts


* project/src/app/app.routing.module.ts
```
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InvalidComponent } from './invalid/invlaid.component';
import { AdminGuard } from './admin.guard';

const routes: Routes =[
   { path: 'admin', component: AdminComponent, canActivate: [AdminGuard]}
]

@NgModule(
      imports: [RouterModule.forRoot(routes)],
      exports: [RouterModule]
	)
export class AppRoutingModule{

}
```

* project/src/app/admin.guard.ts
```
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable(
      {
      	providedIn: 'root'
      }
	)
export class AdminGuard implements CanActivate{
 
  canActivate(
      next: ActivatedRouteSnapshot,
      state: RouterStateSnapshot
  	): boolean{
        
  		 // service call for valdiation authorization and authentication to the backend 

  		return true;
  	}

}
```
* Url for this 
	* http://localhost:4200/admin



