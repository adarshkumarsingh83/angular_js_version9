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

	