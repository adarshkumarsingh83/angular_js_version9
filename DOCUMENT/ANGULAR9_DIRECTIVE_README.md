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
* ngStyle

### Generate a custom Directive 
* ng generate directive <'directive-name'>

### ngIF

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