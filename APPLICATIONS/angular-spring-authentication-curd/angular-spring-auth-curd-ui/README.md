# AngularSpringAuthCurdUi

- \$ ng new angular-spring-auth-curd-ui

```
? Would you like to add Angular routing? Yes
? Which stylesheet format would you like to use?
  CSS
❯ SCSS   [ https://sass-lang.com/documentation/syntax#scss                ]
  Sass   [ https://sass-lang.com/documentation/syntax#the-indented-syntax ]
  Less   [ http://lesscss.org                                             ]
  Stylus [ http://stylus-lang.com                                         ]
```

### To generate the local storage service

- \$ npm install --save ngx-webstorage-service

---

### To Install bootstrap and proper

- \$ npm i bootstrap jquery propper --save

### Import path

- project/angular.json
  - projects->project-name->architect->build->option->style
  - projects->project-name->architect->build->option->script

```
"styles":[
     	"src/styles.scss",
     	"node_modules/bootstrap/dist/css/bootstrap.min.css"
    ],
    "scripts":[
        "node_modules/jquery/dist/jquery.min.js",
		"node_modules/bootstrap/dist/js/bootstrap.min.js"
    ]
```

### To install Fash message

- npm install angular2-flash-messages --save

---

### To generate a layout module

- cd src/app
- ng g module layout

```
CREATE src/app/layout/layout.module.ts (192 bytes)
```

### To genrate header component

- cd src/app/layout
- ng g component header

```
CREATE src/app/layout/header/header.component.scss (0 bytes)
CREATE src/app/layout/header/header.component.html (21 bytes)
CREATE src/app/layout/header/header.component.spec.ts (628 bytes)
CREATE src/app/layout/header/header.component.ts (276 bytes)
UPDATE src/app/layout/layout.module.ts (268 bytes)
```

### To generate footer component

- cd src/app/layout
- ng g component footer

```
CREATE src/app/layout/footer/footer.component.scss (0 bytes)
CREATE src/app/layout/footer/footer.component.html (21 bytes)
CREATE src/app/layout/footer/footer.component.spec.ts (628 bytes)
CREATE src/app/layout/footer/footer.component.ts (276 bytes)
UPDATE src/app/layout/layout.module.ts (346 bytes)
```

---

### To generate admin Module

- \$ cd src/app

* \$ ng g module admin

```
CREATE src/app/admin/admin.module.ts (191 bytes)
```

### To Generate adminhome component

- \$ cd src/app/admin
- \$ ng g component AdminHome

```
CREATE src/app/admin/admin-home/admin-home.component.scss (0 bytes)
CREATE src/app/admin/admin-home/admin-home.component.html (25 bytes)
CREATE src/app/admin/admin-home/admin-home.component.spec.ts (650 bytes)
CREATE src/app/admin/admin-home/admin-home.component.ts (291 bytes)
UPDATE src/app/admin/admin.module.ts (281 bytes)
```

### To Generate Employee Module under Admin

- cd proj/src/app/admin
- ng g module emloyee-managment

```
CREATE src/app/admin/emloyee-managment/emloyee-managment.module.ts (202 bytes)
```

### To Generate EmployeeList component

- cd src/app/admin/emloyee-managment
- ng g component EmployeeList

```
CREATE src/app/admin/emloyee-managment/employee-list/employee-list.component.scss (0 bytes)
CREATE src/app/admin/emloyee-managment/employee-list/employee-list.component.html (28 bytes)
CREATE src/app/admin/emloyee-managment/employee-list/employee-list.component.spec.ts (671 bytes)
CREATE src/app/admin/emloyee-managment/employee-list/employee-list.component.ts (303 bytes)
UPDATE src/app/admin/emloyee-managment/emloyee-managment.module.ts (804 bytes)
```

### To Generate EmployeeCreate component

- cd src/app/admin/emloyee-managment
- ng g component EmployeeCreate

```
CREATE src/app/admin/emloyee-managment/employee-create/employee-create.component.scss (0 bytes)
CREATE src/app/admin/emloyee-managment/employee-create/employee-create.component.html (30 bytes)
CREATE src/app/admin/emloyee-managment/employee-create/employee-create.component.spec.ts (685 bytes)
CREATE src/app/admin/emloyee-managment/employee-create/employee-create.component.ts (311 bytes)
UPDATE src/app/admin/emloyee-managment/emloyee-managment.module.ts (312 bytes)
```

### To Generate EmployeeUpdate component

- cd src/app/admin/emloyee-managment
- ng g component EmployeeUpdate

```
CREATE src/app/admin/emloyee-managment/employee-update/employee-update.component.scss (0 bytes)
CREATE src/app/admin/emloyee-managment/employee-update/employee-update.component.html (30 bytes)
CREATE src/app/admin/emloyee-managment/employee-update/employee-update.component.spec.ts (685 bytes)
CREATE src/app/admin/emloyee-managment/employee-update/employee-update.component.ts (311 bytes)
UPDATE src/app/admin/emloyee-managment/emloyee-managment.module.ts (424 bytes)
```

### To Generate EmployeeDetails component

- cd src/app/admin/emloyee-managment
- ng g component EmployeeDetails

```
CREATE src/app/admin/emloyee-managment/employee-details/employee-details.component.scss (0 bytes)
CREATE src/app/admin/emloyee-managment/employee-details/employee-details.component.html (31 bytes)
CREATE src/app/admin/emloyee-managment/employee-details/employee-details.component.spec.ts (692 bytes)
CREATE src/app/admin/emloyee-managment/employee-details/employee-details.component.ts (315 bytes)
UPDATE src/app/admin/emloyee-managment/emloyee-managment.module.ts (540 bytes)
```

### To Generate User Module under Admin

- cd proj/src/app/admin
- ng g module user-managment

```
CREATE src/app/admin/user-managment/user-managment.module.ts (199 bytes)
```

### To Generate UserList component

- cd src/app/admin/user-managment
- ng g component UserList

```
CREATE src/app/admin/user-managment/user-list/user-list.component.scss (0 bytes)
CREATE src/app/admin/user-managment/user-list/user-list.component.html (24 bytes)
CREATE src/app/admin/user-managment/user-list/user-list.component.spec.ts (643 bytes)
CREATE src/app/admin/user-managment/user-list/user-list.component.ts (287 bytes)
UPDATE src/app/admin/user-managment/user-managment.module.ts (725 bytes)
```

### To Generate UserCreate component

- cd src/app/admin/user-managment
- ng g component UserCreate

```
CREATE src/app/admin/user-managment/user-create/user-create.component.scss (0 bytes)
CREATE src/app/admin/user-managment/user-create/user-create.component.html (26 bytes)
CREATE src/app/admin/user-managment/user-create/user-create.component.spec.ts (657 bytes)
CREATE src/app/admin/user-managment/user-create/user-create.component.ts (295 bytes)
UPDATE src/app/admin/user-managment/user-managment.module.ts (293 bytes)
```

### To Generate UserUpdate component

- cd src/app/admin/user-managment
- ng g component UserUpdate

```
CREATE src/app/admin/user-managment/user-update/user-update.component.scss (0 bytes)
CREATE src/app/admin/user-managment/user-update/user-update.component.html (26 bytes)
CREATE src/app/admin/user-managment/user-update/user-update.component.spec.ts (657 bytes)
CREATE src/app/admin/user-managment/user-update/user-update.component.ts (295 bytes)
UPDATE src/app/admin/user-managment/user-managment.module.ts (389 bytes)
```

### To Generate UserDetails component

- cd src/app/admin/user-managment
- ng g component UserDetails

```
CREATE src/app/admin/user-managment/user-details/user-details.component.scss (0 bytes)
CREATE src/app/admin/user-managment/user-details/user-details.component.html (27 bytes)
CREATE src/app/admin/user-managment/user-details/user-details.component.spec.ts (664 bytes)
CREATE src/app/admin/user-managment/user-details/user-details.component.ts (299 bytes)
UPDATE src/app/admin/user-managment/user-managment.module.ts (489 bytes)
```

---

### To generate user Module

- \$ cd src/app
- \$ ng g module user

```
CREATE src/app/user/user.module.ts (190 bytes)
```

### To genrate userhome component

- \$ cd /src/app/user
- \$ ng g component UserHome

```
CREATE src/app/user/user-home/user-home.component.scss (0 bytes)
CREATE src/app/user/user-home/user-home.component.html (24 bytes)
CREATE src/app/user/user-home/user-home.component.spec.ts (643 bytes)
CREATE src/app/user/user-home/user-home.component.ts (287 bytes)
UPDATE src/app/user/user.module.ts (276 bytes)
```

---

### To genrate security module

- \$ cd src/app
- \$ ng g module security

```
CREATE src/app/security/security.module.ts (194 bytes)
```

### To Generate InvalidUrl Component

- \$ cd /src/app/security
- \$ ng g component InvalidUrl

```
CREATE src/app/security/invalid-url/invalid-url.component.scss (0 bytes)
CREATE src/app/security/invalid-url/invalid-url.component.html (26 bytes)
CREATE src/app/security/invalid-url/invalid-url.component.spec.ts (657 bytes)
CREATE src/app/security/invalid-url/invalid-url.component.ts (295 bytes)
UPDATE src/app/security/security.module.ts (464 bytes)
```

### To genrate login component

- \$ cd /src/app/security
- \$ ng g component Login

```
CREATE src/app/security/login/login.component.scss (0 bytes)
CREATE src/app/security/login/login.component.html (20 bytes)
CREATE src/app/security/login/login.component.spec.ts (621 bytes)
CREATE src/app/security/login/login.component.ts (272 bytes)
UPDATE src/app/security/security.module.ts (266 bytes)
```

### To generate Registration component

- \$ cd /src/app/security
- \$ ng g component Registration

```
CREATE src/app/security/registration/registration.component.scss (0 bytes)
CREATE src/app/security/registration/registration.component.html (27 bytes)
CREATE src/app/security/registration/registration.component.spec.ts (670 bytes)
CREATE src/app/security/registration/registration.component.ts (300 bytes)
UPDATE src/app/security/security.module.ts (368 bytes)
```

### To Generate User Security Context

- cd proj/src/app/security
- ng g interface user-context

```
CREATE src/app/security/user-context.ts (33 bytes)
```

### To generate security util

- cd proj/src/app/security
- ng g service security-util

```
CREATE src/app/security/security-util.service.spec.ts (388 bytes)
CREATE src/app/security/security-util.service.ts (141 bytes)
```

### To Generate the RouteGurd

- cd src/app/security
- \$ ng generate guard security

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

---

### To generate the service module

- cd src/app
- \$ ng g module app-services

```
CREATE src/app/app-services/app-services.module.ts (197 bytes)
```

### To generate the servicess

- cd src/app/app-services
- \$ ng g service employee

```
CREATE src/app/app-services/employee.service.spec.ts (367 bytes)
CREATE src/app/app-services/employee.service.ts (137 bytes)
```

- ng g service users

```
CREATE src/app/app-services/users.service.spec.ts (352 bytes)
CREATE src/app/app-services/users.service.ts (134 bytes)
```

- ng g service authentication

```
CREATE src/app/app-services/authentication.service.spec.ts (397 bytes)
CREATE src/app/app-services/authentication.service.ts (143 bytes)
```

- ng g service header

```
CREATE src/app/app-services/header.service.spec.ts (357 bytes)
CREATE src/app/app-services/header.service.ts (135 bytes)
```

### To generate user model

- ng g interface user

```
CREATE src/app/app-services/user.ts (26 bytes)
```

### To Generate Employee model

- ng g interface employee

```
CREATE src/app/app-services/employee.ts (30 bytes)
```

---
