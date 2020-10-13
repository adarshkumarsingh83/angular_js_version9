# AngularAuthentication

- \$ ng new angular-authentication

```
? Would you like to add Angular routing? Yes
? Which stylesheet format would you like to use?
  CSS
❯ SCSS   [ https://sass-lang.com/documentation/syntax#scss                ]
  Sass   [ https://sass-lang.com/documentation/syntax#the-indented-syntax ]
  Less   [ http://lesscss.org                                             ]
  Stylus [ http://stylus-lang.com                                         ]
```

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

### To Generate InvalidUrl Component

- \$ ng g component InvalidUrl

```
REATE src/app/invalid-url/invalid-url.component.scss (0 bytes)
CREATE src/app/invalid-url/invalid-url.component.html (26 bytes)
CREATE src/app/invalid-url/invalid-url.component.spec.ts (657 bytes)
CREATE src/app/invalid-url/invalid-url.component.ts (295 bytes)
UPDATE src/app/app.module.ts (493 bytes)
```

### To generate admin Module

- \$ ng g module admin

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

### To generate user Module

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

### To genrate security module

- \$ ng g module security

```
CREATE src/app/security/security.module.ts (194 bytes)
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

### To generate user Context

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

### To generate the local storage service

- \$ npm install --save ngx-webstorage-service

### To generate user model

- \$ ng g interface user

```
CREATE src/app/app-services/user.ts (26 bytes)
```

### To generate the service module

- \$ ng g module app-services

```
CREATE src/app/app-services/app-services.module.ts (197 bytes)
```

### To generate the servicess

- cd proj/src/app/app-services
- ng g service data

```
CREATE src/app/app-services/data.service.spec.ts (347 bytes)
CREATE src/app/app-services/data.service.ts (133 bytes)
```

### To Generate the RouteGurd

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

### Import from into the app modules

- proj/src/app/app.module.ts

```
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { InvalidUrlComponent } from './invalid-url/invalid-url.component';
import { LoginComponent } from './security/login/login.component';
import { RegistrationComponent } from './security/registration/registration.component';
import { StorageServiceModule } from 'ngx-webstorage-service';

@NgModule({
  declarations: [
    AppComponent,
    InvalidUrlComponent,
    LoginComponent,
    RegistrationComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, StorageServiceModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

```

### add the router for the application

- proj/src/app/app-routing.module.ts

```
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InvalidUrlComponent } from './invalid-url/invalid-url.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { UserHomeComponent } from './user/user-home/user-home.component';
import { SecurityGuard } from './security.guard';
import { LoginComponent } from './security/login/login.component';
import { RegistrationComponent } from './security/registration/registration.component';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full', canActivate: [SecurityGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  {
    path: 'admin',
    component: AdminHomeComponent,
    canActivate: [SecurityGuard],
  },
  { path: 'user', component: UserHomeComponent, canActivate: [SecurityGuard] },
  { path: '**', component: InvalidUrlComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
```

### To Buld

- \$ ng build

### To Execute

- \$ ng serve

### Application Url

- admin
  - admin/admin
- user
  - user/user
- app module url
  - http://localhost:4200
- admin home
  - http://localhost:4200/admin
- user home
  - http://localhost:4200/user
- invalid url
  - http://localhost:4200/xxxx
- app registration url
  - http://localhost:4200/registration
