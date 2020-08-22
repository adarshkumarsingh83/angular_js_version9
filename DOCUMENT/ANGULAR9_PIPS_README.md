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
## [ANGULR BUILTIN PIPES EXAMPLE ](https://github.com/adarshkumarsingh83/angular_js_version9/tree/master/APPLICATIONS/angular-pipes-builtin)
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


     <h1>{{ person | json }}</h1>
</div>
```

* project/src/app/app.component.ts
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
	  firstName:"adarsh",
	  lastName:"kumar",
	  dob:"09/13/1983",
      salary:"1000.589",
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


---

## Pipe Chaining 
	* using mulitple pipes in chain for data transformton 
	* {{ dob | date | uppercase }}


* Example 
* project/src/app.component.html
```
<div>
     <h1>{{ person.dob | date | uppercase }}</h1>
</div>
```

* project/src/app/app.component.ts
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
	  firstName:"adarsh",
	  lastName:"kumar",
	  dob:"09/13/1983",
      salary:"1000.589",
  }
  
}

```

---

## Custom Pipe 
	* ng generate pipe <'pipe-name'> 
	* pipe will be added to module if generated via cli otherise add it manually 
	* import Pipe and PipeTransform from @angular/core 
	* its declared with @pipe and provide the selector name 

* Example 
* $ ng generate pipe hightlight

* project/src/app/highlightpip.ts
```
import {Pipe,PipeTransform} from '@angular/core';

@Pipe(
      {
      	name:'hightlight'
      }
	)
export class HighlightPipe implements PipeTransform{

	transform(value: string, city: string): string{
         return 'City Name : '+city;
	}
}
```

* project/src/app/app.component.ts
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
	  city="dallas";
  }
  
}

```

* project/src/app.component.html
```
<div>
    <h1>{{ person.firstName }}</h1>
     <h1>{{ person.lastName }}</h1>
     <h1>{{ person.city | hightlight: person.city }}</h1>
</div>
```


* Example 
* $ ng generate pipe hightlight

* project/src/app/highlightpip.ts
```
import {Pipe,PipeTransform} from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';

@Pipe(
      {
      	name:'hightlight'
      }
	)
export class HighlightPipe implements PipeTransform{

	constructor(private sanitizeer: DomSanitizer){

	}

	transform(value: string, city: string): string{
         return this.sanitizeer.bypassSecurityTrustHtml('<div style="backgroud-color:yellow">'+city+'<div>');
	}
}
```

* project/src/app.component.html
```
<div>
    <h1>{{ person.firstName }}</h1>
     <h1>{{ person.lastName }}</h1>
     <div [innerHTML]="person.city | highlight:person.city"></div> 
</div>
```

* project/src/app/app.component.ts
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
	  city="dallas";
  }
  
}

```
---