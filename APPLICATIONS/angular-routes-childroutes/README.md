# AngularRoutesChildroutes

### Application Generation 
* $ ng new angular-routes-childroutes
```
? Would you like to add Angular routing? Yes
? Which stylesheet format would you like to use? 
  CSS 
❯ SCSS   [ https://sass-lang.com/documentation/syntax#scss                ] 
  Sass   [ https://sass-lang.com/documentation/syntax#the-indented-syntax ] 
  Less   [ http://lesscss.org                                             ] 
  Stylus [ http://stylus-lang.com                                         ] 
```

### Generate InvalidUrl component 
* $ cd src/app
* $ ng g component InvalidUrl
```
? Would you like to share anonymous usage data about this project with the Angular Team at
Google under Google’s Privacy Policy at https://policies.google.com/privacy? For more
details and how to change this setting, see http://angular.io/analytics. No
CREATE src/app/invalid-url/invalid-url.component.scss (0 bytes)
CREATE src/app/invalid-url/invalid-url.component.html (26 bytes)
CREATE src/app/invalid-url/invalid-url.component.spec.ts (657 bytes)
CREATE src/app/invalid-url/invalid-url.component.ts (295 bytes)
UPDATE src/app/app.module.ts (493 bytes)
```

### Generate Wish Module 
* $ ng generate module wish
```
CREATE src/app/wish/wish.module.ts (190 bytes)
```
### Generate Wish Home Component inside wish module 
* $ cd /src/app/wish/
* $ ng g component WishHome
```
CREATE src/app/wish/wish-home/wish-home.component.scss (0 bytes)
CREATE src/app/wish/wish-home/wish-home.component.html (24 bytes)
CREATE src/app/wish/wish-home/wish-home.component.spec.ts (643 bytes)
CREATE src/app/wish/wish-home/wish-home.component.ts (287 bytes)
UPDATE src/app/wish/wish.module.ts (464 bytes)
```

### Generate AdminGreet Component inside wish module 
* $ cd /src/app/wish/
* $ ng g component AdminGreet
```
CREATE src/app/wish/admin-greet/admin-greet.component.scss (0 bytes)
CREATE src/app/wish/admin-greet/admin-greet.component.html (26 bytes)
CREATE src/app/wish/admin-greet/admin-greet.component.spec.ts (657 bytes)
CREATE src/app/wish/admin-greet/admin-greet.component.ts (295 bytes)
```
### Generate UserGreet Component inside wish module 
* $ cd /src/app/wish/
* $ ng g component UserGreet
```
CREATE src/app/wish/user-greet/user-greet.component.scss (0 bytes)
CREATE src/app/wish/user-greet/user-greet.component.html (25 bytes)
CREATE src/app/wish/user-greet/user-greet.component.spec.ts (650 bytes)
CREATE src/app/wish/user-greet/user-greet.component.ts (291 bytes)
UPDATE src/app/wish/wish.module.ts (376 bytes)
```
### To Buld the application 
* $ ng build 

### To Execute the application 
* $ ng serve 

### Application Urls 
* application app component 
    * http://localhost:4200
* application wish component 
    * http://localhost:4200/espark 
* application wish admin component url 
    * http://localhost:4200/espark/wish/admin 
* application wish user component url 
    * http://localhost:4200/espark/wish/user 

