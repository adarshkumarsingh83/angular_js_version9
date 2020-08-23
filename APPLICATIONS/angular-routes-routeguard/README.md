# AngularRoutesRouteguard

### To Generate the application 
* $ ng new angular-routes-routeguard
```
? Would you like to add Angular routing? Yes
? Which stylesheet format would you like to use? 
  CSS 
❯ SCSS   [ https://sass-lang.com/documentation/syntax#scss                ] 
  Sass   [ https://sass-lang.com/documentation/syntax#the-indented-syntax ] 
  Less   [ http://lesscss.org                                             ] 
  Stylus [ http://stylus-lang.com                                         ] 
```

### To Generate InvalidUrl Component 
* $ ng g component InvalidUrl
```
REATE src/app/invalid-url/invalid-url.component.scss (0 bytes)
CREATE src/app/invalid-url/invalid-url.component.html (26 bytes)
CREATE src/app/invalid-url/invalid-url.component.spec.ts (657 bytes)
CREATE src/app/invalid-url/invalid-url.component.ts (295 bytes)
UPDATE src/app/app.module.ts (493 bytes)
```
### To generate admin Module 
* $ ng g module admin 
```
CREATE src/app/admin/admin.module.ts (191 bytes)
```
### To Generate adminhome component 
* $ cd src/app/admin
* $ ng g component AdminHome
```
CREATE src/app/admin/admin-home/admin-home.component.scss (0 bytes)
CREATE src/app/admin/admin-home/admin-home.component.html (25 bytes)
CREATE src/app/admin/admin-home/admin-home.component.spec.ts (650 bytes)
CREATE src/app/admin/admin-home/admin-home.component.ts (291 bytes)
UPDATE src/app/admin/admin.module.ts (281 bytes)
```

### To generate user Module 
* $ ng g module user 
```
CREATE src/app/user/user.module.ts (190 bytes)
```

### To genrate userhome component 
* $ /src/app/user
* $ ng g component UserHome
```
CREATE src/app/user/user-home/user-home.component.scss (0 bytes)
CREATE src/app/user/user-home/user-home.component.html (24 bytes)
CREATE src/app/user/user-home/user-home.component.spec.ts (643 bytes)
CREATE src/app/user/user-home/user-home.component.ts (287 bytes)
UPDATE src/app/user/user.module.ts (276 bytes)
```
### To Generate the RouteGurd 
* $ ng generate guard security
```
? Which interfaces would you like to implement? (Press <space> to select, <a> to toggle all, <i> to invert selection)
❯◉ CanActivate
 ◯ CanActivateChild
 ◯ CanDeactivate
 ◯ CanLoad

 ? Which interfaces would you like to implement? CanActivate
CREATE src/app/security.guard.spec.ts (351 bytes)
CREATE src/app/security.guard.ts (460 bytes)
 ```

### To Buld 
* $ ng build 

### To Execute 
* $ ng serve 

### Application Url 
* app module url 
    * http://localhost:4200
* admin home 
    * http://localhost:4200/admin?valid=true
    * http://localhost:4200/admin?valid=false
* user home 
    * http://localhost:4200/user?valid=true
    * http://localhost:4200/user?valid=false
* invalid url 
    * http://localhost:4200/xxxx