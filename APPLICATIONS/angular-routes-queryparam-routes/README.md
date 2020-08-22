# AngularRoutesQueryparamRoutes

### Application Generation 
* $ ng new angular-routes-queryparam-routes
```
? Would you like to add Angular routing? Yes
? Which stylesheet format would you like to use? 
  CSS 
❯ SCSS   [ https://sass-lang.com/documentation/syntax#scss                ] 
  Sass   [ https://sass-lang.com/documentation/syntax#the-indented-syntax ] 
  Less   [ http://lesscss.org                                             ] 
  Stylus [ http://stylus-lang.com                                         ] 
  ```
### Generate Invald Url Component 
* $ cd src/app/
* ng g component InvalidUrl
```
CREATE src/app/invalid-url/invalid-url.component.scss (0 bytes)
CREATE src/app/invalid-url/invalid-url.component.html (26 bytes)
CREATE src/app/invalid-url/invalid-url.component.spec.ts (657 bytes)
CREATE src/app/invalid-url/invalid-url.component.ts (295 bytes)
UPDATE src/app/app.module.ts (493 bytes)
```

### To Generate WishComponent 
* $ ng g component Wish
```
CREATE src/app/wish/wish.component.scss (0 bytes)
CREATE src/app/wish/wish.component.html (19 bytes)
CREATE src/app/wish/wish.component.spec.ts (614 bytes)
CREATE src/app/wish/wish.component.ts (268 bytes)
UPDATE src/app/app.module.ts (567 bytes)
```

### To Build 
* ng build 

### To Execute the application 
* ng serve 

### Appliation url 
* app component home 
    * http://localhost:4200
* wish component 
    * http://localhost:4200/wish
* wish compoenent with name query param 
    * http://localhost:4200/wish?name=adarsh
* wish compoenent with name & message query param 
    * http://localhost:4200/wish?name=adarsh&message=welcome
* invalid url 
    * http://localhost:4200/xxxxx