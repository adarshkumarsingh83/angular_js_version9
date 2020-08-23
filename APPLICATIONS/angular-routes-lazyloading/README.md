# AngularRoutesLazyloading

### Project Generaion 
* $ ng new angular-routes-lazyloading
```
? Would you like to add Angular routing? Yes
? Which stylesheet format would you like to use? 
  CSS 
❯ SCSS   [ https://sass-lang.com/documentation/syntax#scss                ] 
  Sass   [ https://sass-lang.com/documentation/syntax#the-indented-syntax ] 
  Less   [ http://lesscss.org                                             ] 
  Stylus [ http://stylus-lang.com                                         ] 
  ```
### To Geenrate InvalidUrl Compoenent 
* $ ng g component InvalidUrl
```
CREATE src/app/invalid-url/invalid-url.component.scss (0 bytes)
CREATE src/app/invalid-url/invalid-url.component.html (26 bytes)
CREATE src/app/invalid-url/invalid-url.component.spec.ts (657 bytes)
CREATE src/app/invalid-url/invalid-url.component.ts (295 bytes)
UPDATE src/app/app.module.ts (493 bytes)
```

### Generate module admin
* $ ng g module admin --route admin --module app.module 
```
CREATE src/app/admin/admin-routing.module.ts (340 bytes)
CREATE src/app/admin/admin.module.ts (342 bytes)
CREATE src/app/admin/admin.component.scss (0 bytes)
CREATE src/app/admin/admin.component.html (20 bytes)
CREATE src/app/admin/admin.component.spec.ts (621 bytes)
CREATE src/app/admin/admin.component.ts (272 bytes)
UPDATE src/app/app-routing.module.ts (339 bytes)
    ```
### Generate module user
 $ ng g module user --route user --module app.module 
 ```
CREATE src/app/user/user-routing.module.ts (336 bytes)
CREATE src/app/user/user.module.ts (335 bytes)
CREATE src/app/user/user.component.scss (0 bytes)
CREATE src/app/user/user.component.html (19 bytes)
CREATE src/app/user/user.component.spec.ts (614 bytes)
CREATE src/app/user/user.component.ts (268 bytes)
UPDATE src/app/app-routing.module.ts (431 bytes)   
```
### To Build the code 
* $ ng build 

### To Execute the code 
* $ ng serve 

### Application Url 
* app module home page 
    * http://localhost:4200
* admin module home
    * http://localhost:4200/admin
* user module home 
    * http://localhost:4200/user
* invalid url 
    * http://localhost:4200/xxxx