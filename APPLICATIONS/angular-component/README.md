# Angular Component 
> basic angularjs component example 
---

### To Create project 
* $ ng new angular-component

### To install bootsrap 
* $ npm i bootstrap --save

### To Create Basic Component inside the app module 
* $ cd src/app/   
* $ ng generate component wish
```
CREATE src/app/wish/wish.component.scss (0 bytes)
CREATE src/app/wish/wish.component.html (19 bytes)
CREATE src/app/wish/wish.component.spec.ts (614 bytes)
CREATE src/app/wish/wish.component.ts (268 bytes)
UPDATE src/app/app.module.ts (467 bytes)
```
* src/app/app-routing.module.ts
* add the routes 
```
import { WishComponent } from './wish/wish.component';

const routes: Routes = [
  { path: 'wish' , component: WishComponent}
];
```
* src/app/wish/wish.component.html
```
<div>
    <h1 class="display-3">
        ESPARK WISH COMPONENT
    </h1>    
</div>
```
### To execute 
* $ ng serve

### To hit the Wish Component 
* http://localhost:4200/wish
