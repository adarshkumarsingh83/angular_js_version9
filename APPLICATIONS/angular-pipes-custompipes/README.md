# AngularPipesCustompipes

### To Create Project 
* $ ng new angular-pipes-custompipes
```
? Would you like to add Angular routing? Yes
? Which stylesheet format would you like to use? 
  CSS 
❯ SCSS   [ https://sass-lang.com/documentation/syntax#scss                ] 
  Sass   [ https://sass-lang.com/documentation/syntax#the-indented-syntax ] 
  Less   [ http://lesscss.org                                             ] 
  Stylus [ http://stylus-lang.com                                         ] 
```
### To Create Custom pipes 
* $ cd src/app/
* $ ng generate pipe highlight
```
? Would you like to share anonymous usage data about this project with the Angular Team at
Google under Google’s Privacy Policy at https://policies.google.com/privacy? For more
details and how to change this setting, see http://angular.io/analytics. No
CREATE src/app/highlight.pipe.spec.ts (199 bytes)
CREATE src/app/highlight.pipe.ts (223 bytes)
UPDATE src/app/app.module.ts (462 bytes)
```
* $ ng g pipe highlightcolor
```
CREATE src/app/highlightcolor.pipe.spec.ts (219 bytes)
CREATE src/app/highlightcolor.pipe.ts (233 bytes)
UPDATE src/app/app.module.ts (546 bytes)
```

### To Execute 
* $ ng serve 

### Url 
* http://localhost:4200

