
# Basic Angularjs Application 
---

* $ ng new espark-basic-application
* $ cd espark-basic-application/
* $ ng serve
* $ crt + c
* $ npm i bootstrap --save
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
}
```

---
$ ng serve
