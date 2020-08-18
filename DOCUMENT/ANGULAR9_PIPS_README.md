# Pipes 
> its used for data transformation its uses | operator 

---

## Type of Pipes 

	*  Built in Pipes 
		* Lowercase 
		* Uppercase
		* Currency 
		* Date
		* Percentage
		* JSON

	* Paramerrized Pipes 
		* take one or more param 

	* Chaining Pipes 
		* conect muliple pips for data input 

	* Custom Pipes 
		* custom pipe for data formatting 

---

### Lowercase InBuilt Pipe 
### Uppercase InBuilt Pipe 
### date InBuilt Pipe 
### currency InBuilt Pipe 
### JSON InBuilt Pipe 

* Example 
* project/src/app.component.html
```
<div>

    <h1>{{ person.firstName | lowercase}}</h1>
     <h1>{{ person.lastName | uppercase}}</h1>
     
     <h1>{{ person.dob | date }}</h1>
     <h1>{{ person.dob | date: 'MMM dd'}}</h1>
     
     <h1>{{ person.salary | currency }}</h1>
     <h1>{{ person.salary | currency:'USD' }}</h1>
     <h1>{{ person.salary | currency:'USD':'code' }}</h1>
     <h1>{{ person.salary | currency:'INR' }}</h1>
     <h1>{{ person.salary | currency:'INR':'code' }}</h1>
     <h1>{{ person.salary | currency:'INR':'INR':'3.0-0' }}</h1>
     <h1>{{ person.salary | currency:'INR':'INR':'3.1-1' }}</h1>


     <h1>{{ person | JSON }}</h1>
</div>
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
  
  person={
	  firstName="adarsh";
	  lastName="kumar";	
	  dob="09/13/1983";
	  salary="1000.589";
  }
  
}

```
---

## Paramerrized Pipes 
	* we can one or more pass param to pipes 
	* we have to use ":" symbol for param 
	* currency 
		* currency symbol 
		* currency code 
		* currency digit variation 
	* date 
		* short
		* medium
		* long 
		* full 
		* shortDate
		* fullDate
		* mediumDate
		* shortTime
		* fullTime
		* longTime 



