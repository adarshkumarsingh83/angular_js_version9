
# Basic Angularjs Application 
---

* $ ng new espark-basic-application

```
$ want routing configuration in prject y/n
$ select the type of css => SCCS 
```

* To Install the bootstrap to angularjs 
	* $ npm i bootstrap --save

* To Start the application 
	* $ cd espark-basic-application/
	* $ ng serve
	* $ ng serve --port=<4300>

* To access the application 
	* http://localhost:420

* To Stop Server
	* $ crt + c

---

* project/src/app/app.component.scss
```
@import '~bootstrap/dist/css/bootstrap.min.css';
```

* project/src/app.component.html
* clear all content then add below code 
```
<div class="container">
    <h1 class="display-1">ESPARK ANGULARJS</h1>
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
}
```

---
$ ng serve
