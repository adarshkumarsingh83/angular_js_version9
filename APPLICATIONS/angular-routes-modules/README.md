# AngularRoutesModules

### Application Creation 
* $ ng new angular-routes-modules
```
? Would you like to add Angular routing? Yes
? Which stylesheet format would you like to use? 
  CSS 
❯ SCSS   [ https://sass-lang.com/documentation/syntax#scss                ] 
  Sass   [ https://sass-lang.com/documentation/syntax#the-indented-syntax ] 
  Less   [ http://lesscss.org                                             ] 
  Stylus [ http://stylus-lang.com                                         ] 
```

### To Generate InvlidUrl component 
* $ cd src/app
* $ ng g component InvalidUrl
```
 Would you like to share anonymous usage data about this project with the Angular Team at
Google under Google’s Privacy Policy at https://policies.google.com/privacy? For more
details and how to change this setting, see http://angular.io/analytics. No
CREATE src/app/invalid-url/invalid-url.component.scss (0 bytes)
CREATE src/app/invalid-url/invalid-url.component.html (26 bytes)
CREATE src/app/invalid-url/invalid-url.component.spec.ts (657 bytes)
CREATE src/app/invalid-url/invalid-url.component.ts (295 bytes)
UPDATE src/app/app.module.ts (493 bytes)
```
### To Build the app 
* $ ng build 

### To Generate Module 
* $ ng generate module wish
```
CREATE src/app/wish/wish.module.ts (190 bytes)
```

### Generate Wish Component 
* $ cd /src/app/wish
*  $ ng g component Greet
```
CREATE src/app/wish/greet/greet.component.scss (0 bytes)
CREATE src/app/wish/greet/greet.component.html (20 bytes)
CREATE src/app/wish/greet/greet.component.spec.ts (621 bytes)
CREATE src/app/wish/greet/greet.component.ts (272 bytes)
UPDATE src/app/wish/wish.module.ts (267 bytes)
```

### TO BUILD THE APPLICATION 
* $ ng build 

### TO EXECUTE THE APPLICATION 
* $ ng serve 

### Urls 
* http://localhost:4200
* http://localhost:4200/greet