# AngularRoutesMultiComponentroutes

### prorject Generation 
* $ ng new angular-routes-multi-componentroutes
```
? Would you like to add Angular routing? Yes
? Which stylesheet format would you like to use? 
  CSS 
❯ SCSS   [ https://sass-lang.com/documentation/syntax#scss                ] 
  Sass   [ https://sass-lang.com/documentation/syntax#the-indented-syntax ] 
  Less   [ http://lesscss.org                                             ] 
  Stylus [ http://stylus-lang.com                                         ] 
```
### Generate invalid url component 
* $ ng g component InvalidUrl
```
CREATE src/app/invalid-url/invalid-url.component.scss (0 bytes)
CREATE src/app/invalid-url/invalid-url.component.html (26 bytes)
CREATE src/app/invalid-url/invalid-url.component.spec.ts (657 bytes)
CREATE src/app/invalid-url/invalid-url.component.ts (295 bytes)
UPDATE src/app/app.module.ts (493 bytes)
```

### To Generate Greet Module 
* $ cd src/app/
* $ ng g module Greet
```
? Would you like to share anonymous usage data about this project with the Angular Team at
Google under Google’s Privacy Policy at https://policies.google.com/privacy? For more
details and how to change this setting, see http://angular.io/analytics. No
CREATE src/app/greet/greet.module.ts (191 bytes)
```

### To Generate Compoent 
* $ cd src/app/greet/
* $ ng g component UserWish 
```
CREATE src/app/greet/user-wish/user-wish.component.scss (0 bytes)
CREATE src/app/greet/user-wish/user-wish.component.html (24 bytes)
CREATE src/app/greet/user-wish/user-wish.component.spec.ts (643 bytes)
CREATE src/app/greet/user-wish/user-wish.component.ts (287 bytes)
UPDATE src/app/greet/greet.module.ts (277 bytes)
```
### To Generate Compoent 
* $ cd src/app/greet/
* $ ng g component AdminWish 
```
REATE src/app/greet/admin-wish/admin-wish.component.scss (0 bytes)
CREATE src/app/greet/admin-wish/admin-wish.component.html (25 bytes)
CREATE src/app/greet/admin-wish/admin-wish.component.spec.ts (650 bytes)
CREATE src/app/greet/admin-wish/admin-wish.component.ts (291 bytes)
UPDATE src/app/greet/greet.module.ts (369 bytes)
```

### To Build the application 
* $ ng build 

### To Execute app 
* $ ng serve 

### application url 
* home page 
    * http://localhost:4200
* admin user page 
    * http://localhost:4200/admin
* user page 
    * http://localhost:4200/user
* invalid url page 
    * http://localhost:4200/xxxxxxxxxxx


