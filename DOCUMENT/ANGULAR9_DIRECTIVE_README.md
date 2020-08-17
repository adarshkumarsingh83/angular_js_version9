# ANGULARJS DIRECTIVE
> 
---

### Component Directive 
* Directive for component without which application can't work 
* At least one is bare min with its own template & it can have events also .

### Structural Directive
* it help in altering sturcture or template of the view 
* ngFor, ngIf or ngSwitch

### Attribute Directive
* its passed with the elements 
* ngClass 
* ngStyle let the dom set with style properties 

### Generate a custom Directive 
* ng generate directive <'directive-name'>

---
## ngIF

* project//src/app/app.component.ts

```
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'espark-basic-application';
  showMessagge=true;

}

```

* project/src/app/app.component.html

```
<div *ngIf="showMessagge">     
    <h1 class="display-1">ESPARK ANGULARJS</h1>
</div>
```

### ngIF else

* project/src/app/app.component.html

```
<div *ngIf="showMessagge; else showElse">     
     <h1 class="display-1">ESPARK IFANGULARJS</h1>
</div>
<ng-template #showElse>
   <h1 class="display-1">ESPARK ELSE ANGULARJS</h1> 
</ng-template>

```

* project//src/app/app.component.ts

```
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'espark-basic-application';
  showMessagge=false;

}

```

### ngIf then else

* project/src/app/app.component.html

```
<div *ngIf="showMessagge; then showThen; else showElse"></div>

<ng-template #showThen>
   <h1 class="display-1">ESPARK THEN ANGULARJS</h1> 
</ng-template>

<ng-template #showElse>
   <h1 class="display-1">ESPARK ELSE ANGULARJS</h1> 
</ng-template>

```

* project//src/app/app.component.ts

```
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'espark-basic-application';
  showMessagge='';

}

```

---

## ngSwitchCase 

* project/src/app/app.component.html

```
 <div [ngSwitch]="switchValue">
	 <div *ngSwitchCase="0">0</div>
	 <div *ngSwitchCase="1">1</div>
	 <div *ngSwitchCase="2">2</div>
	 <div *ngSwitchCase="2">2</div>
<div>
```

* project//src/app/app.component.ts

```
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'espark-basic-application';
  switchValue=0;

}
```

### ngSwitchDefault

* project/src/app/app.component.html

```
 <div [ngSwitch]="switchValue">
	 <div *ngSwitchCase="0">0</div>
	 <div *ngSwitchCase="1">1</div>
	 <div *ngSwitchCase="2">2</div>
	 <div *ngSwitchCase="2">2</div>
	 <div *ngDefault> no value matched</div>
<div>

```

* project//src/app/app.component.ts

```
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'espark-basic-application';
  switchValue=-1;
}
```

---

## ngFor

* project/src/app/app.component.html

```
 <div *ngFor="let user for usersList; index as indexVal;  first as firstVal; last as lastVal; even asd evenVal; odd as oddVal">
       <div>{{indexVal}}</div>	 
       <div>{{user.id}}</div>	 
       <div>{{user.name}}</div>	 
       <div>{{ firstVal }}</div>	 
       <div>{{ lastVal }}</div>	 
       <div>{{ evenVal }}</div>	 
       <div>{{ oddVal }}</div>	 
 <div>

```

* project//src/app/app.component.ts

```
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'espark-basic-application';
  usersList=[
    {id:1,name:"adarsh"},
    {id:2,name:"radha"}
  ];
}
```

---

## ngStyle 
* help to pass the style for the elements 

* project/src/app/app.component.html

```
 <div [ngStyle]="{'color':colorVal, 'background-color':'bgColorVal'}">
       <h1>Welcome to Espark</h1>
 <div>

```

* project//src/app/app.component.ts

```
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'espark-basic-application';
  colorVal="red";
  bgColorVal="yellow"
}

```

---

## ngClass 
* class name for the element 
* we can pas string, arrays, object  


### Example with String

* project/src/app/app.component.scss
```
 .esparkStyleClass1{
 	color: blue;
 	background-color: yellow
 }

  .esparkStyleClass2{
 	color: red;
 	background-color: yellow
 }

```


* project/src/app/app.component.html

```
 <div [ngClass]="esparkStyle">
       <h1>Welcome to Espark</h1>
 <div>

```

* project//src/app/app.component.ts

```
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'espark-basic-application';
  esparkStyle="esparkStyleClass1";
  // or 
  //esparkStyle="esparkStyleClass2";
}

```

### Example with Array 

* project/src/app/app.component.scss
```
 .esparkStyleClass1{
 	color: blue;
 }

  .esparkStyleClass2{
 	background-color: yellow
 }

```


* project/src/app/app.component.html

```
 <div [ngClass]="[esparkStyle1,esparkStyle2]">
       <h1>Welcome to Espark</h1>
 <div>

```

* project//src/app/app.component.ts

```
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'espark-basic-application';
  esparkStyle1="esparkStyleClass1"; 
  esparkStyle2="esparkStyleClass2";
}

```

### Example with Expression 

* project/src/app/app.component.scss
```
 .esparkStyleClass1{
 	color: blue;
 }

  .esparkStyleClass2{
 	background-color: yellow
 }

```


* project/src/app/app.component.html

```
 <div [ngClass]="{'esparkStyle1':true,'esparkStyle2':true}">
       <h1>Welcome to Espark</h1>
 <div>

```

* project//src/app/app.component.ts

```
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'espark-basic-application';
  esparkStyle1="esparkStyleClass1"; 
  esparkStyle2="esparkStyleClass2";
}

```