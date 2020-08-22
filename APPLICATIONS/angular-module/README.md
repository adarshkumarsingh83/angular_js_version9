# AngularModule

### To Create a project using 'ng new cmd'
* $ ng new angular-module
```
? Would you like to add Angular routing? Yes
? Which stylesheet format would you like to use? 
  CSS 
❯ SCSS   [ https://sass-lang.com/documentation/syntax#scss                ] 
  Sass   [ https://sass-lang.com/documentation/syntax#the-indented-syntax ] 
  Less   [ http://lesscss.org                                             ] 
  Stylus [ http://stylus-lang.com  
```

### Add bootstrap into the projectt
* $ npm i bootstrap --save
* add import to the file src/styles.scss
```
@import '~bootstrap/dist/css/bootstrap.min.css';

```
### To generate module 
* $ ng generate module wish
```
CREATE src/app/wish/wish.module.ts
```
### Create Component in WishModule 
* $ cd src/app/wish
* $ ng generate component greet
```
CREATE src/app/wish/greet/greet.component.scss (0 bytes)
CREATE src/app/wish/greet/greet.component.html (20 bytes)
CREATE src/app/wish/greet/greet.component.spec.ts (621 bytes)
CREATE src/app/wish/greet/greet.component.ts (272 bytes)
UPDATE src/app/wish/wish.module.ts (266 bytes)
```

### Add the Routing Entry for GreetCompoent 
* src/app/app-routing.module.ts
```
import { GreetComponent } from './wish/greet/greet.component'

const routes: Routes = [
  {path: 'wishGreet', component: GreetComponent}
];
```

### To Execute 
* $ ng serve 

### To Access the application 
* http://localhost:4200/wishGreet


