# Data Binding 
> Binding data from view to controller and to component class 
---

## One Way Databinding 
* Component To View Unidirection Binding 
	* Interpolation 
	* Property Binding 
	* Style Binding 
	* Attrivute Binding 

* View to Component 
	* Event Binding Unidirection Binding 

## Two Way Databinding 
* Component To Vew or View To Component Biidirection Binding 

----

### Component To View Unidirection Binding 
	
---

* Interpolation 
	* bindign data from component to view 
	* we use {{ xxx }}
	* integer, string, arrays object and other can be bind 
	* one way data flow in this process 
* Example 
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
  name= "adarsh kumar";
  age="30";
  user={ id: 1,name:"adarsh kumar"};
}

```
* project/src/app.component.html
```
<div>
    <h1>{{name}}</h1>
    <h1>{{age}}</h1>
    <h1>{{user.id}}</h1>
    <h1>{{user.name}}</h1>
</div>
```

---

* Property Binding 
	* [property]="expression"

* Example 
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
  paraText="hi how r u";
  placeholderValue="Enter the Input Value";
}

```

* project/src/app.component.html
```
<div>
	<div [ngStyle]="{color:colorVal}">
	    <h1>welcome to espark</h1>
	</div>
	<p [innerHTML]='paraText'></p>
	<input [placeholder]="placeholderValue">
</div>

```

---

* Attrivute Binding
	* [attr.attribute_name]="'expression'"

* Example 	
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
  hrefVal="http://espark.com";
  esparkLInk="http://esparkinnovation.com";
  esparkProps="adarsh-radha";
}

```

* project/src/app.component.html
```
<div>
	<a [href]="hrefVal" [attr.esparkLink]='esparkLInk' [attr.esparkProps]='esparkProps'>Espark</a>
</div>

```

