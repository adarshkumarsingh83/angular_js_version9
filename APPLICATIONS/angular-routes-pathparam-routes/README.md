# AngularRoutesPathparamRoutes

### Aplication Creation 
* $ ng new angular-routes-pathparam-routes
```
? Would you like to add Angular routing? Yes
? Which stylesheet format would you like to use? 
  CSS 
❯ SCSS   [ https://sass-lang.com/documentation/syntax#scss                ] 
  Sass   [ https://sass-lang.com/documentation/syntax#the-indented-syntax ] 
  Less   [ http://lesscss.org                                             ] 
  Stylus [ http://stylus-lang.com                                         ] 
  ```

### InvalidUrl Compoent 
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
### Wish Compoent 
* $ ng g component Wish  
```
CREATE src/app/wish/wish.component.scss (0 bytes)
CREATE src/app/wish/wish.component.html (19 bytes)
CREATE src/app/wish/wish.component.spec.ts (614 bytes)
CREATE src/app/wish/wish.component.ts (268 bytes)
UPDATE src/app/app.module.ts (567 bytes)
```

### To Buld 
* $ ng bulid 

### to Execue 
* $ ng serve 

### Urls 
* app component url 
    * http://localhost:4200
* Wish compoent url without param 
    * http://localhost:4200/wish
* Wish compoent url with message param 
    * http://localhost:4200/wish/welcome%20to%20espark
* Wish compoent url with message & name param 
    * http://localhost:4200/wish/welcome%20to%20espark/adarsh
* invalid url 
    * http://localhost:4200/xxxxx
