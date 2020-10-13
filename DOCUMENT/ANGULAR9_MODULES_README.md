# Angularjs9  Modules 

> Modules are group of related code which is logally \
> segregated based on functionlaity. \
> it can contains component, services, directive pipes etc
> default is app module in every angularjs app 

---

# [ANGULAR CUSTOM MODULE EXAMPLE](https://github.com/adarshkumarsingh83/angular_js_version9/tree/master/APPLICATIONS/angular-module)

* @NgModule()
```
every module is defined by @ngmodule 
inside the @ngmodule we will defined diclartions, imports, bootstrap 
diclartions -> components to diclare for the application.
imports  -> other modules can be import 
bootstrap -> which component is first to load 

```

### To Generate Module 
* ng g m <'ModuleName'>
```
this will create a dir with module-name and the module name has 
to be imported into the app.module 

import { ModuleName } from './ModuleName/ModuleName.module';

@NgModule(
       diclarations:[ ---- ],
       imports:[ ModuleName ],
       providers:[],
       bootstrap:[AppComponnt]       
	)

```

### Custom Multimodule 
* when their is multiple module in application then import all the module in app.module.ts 
* from every module export the services components or other using export: [xxx,xxxx] in the xxxx.module.ts 
* we have admin,user and security custom modules when have or not some component and services in those 
* export services or components from then using export and finally import into the app.module.ts 

* src/app/admin/admin.module.ts 
```
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppServicesModule } from '../app-services/app-services.module';

@NgModule({
  declarations: [AdminHomeComponent],
  imports: [CommonModule, BrowserModule, AppServicesModule],
  exports:[]
})
export class AdminModule {}
```

* src/app/user/user.module.ts
```
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserHomeComponent } from './user-home/user-home.component';

@NgModule({
  declarations: [UserHomeComponent],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
```

* src/app/security/security.module.ts 
```
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

@NgModule({
  declarations: [LoginComponent, RegistrationComponent],
  imports: [CommonModule, FormsModule],
  exports: [LoginComponent, RegistrationComponent],
})
export class SecurityModule {}
```
* src/app/app.module.ts 

```
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { InvalidUrlComponent } from './invalid-url/invalid-url.component';
import { StorageServiceModule } from 'ngx-webstorage-service';
import { AppServicesModule } from '../app/app-services/app-services.module';
import { AdminModule } from '../app/admin/admin.module';
import { UserModule } from '../app/user/user.module';
import { SecurityModule } from '../app/security/security.module';

@NgModule({
  declarations: [AppComponent, InvalidUrlComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StorageServiceModule,
    AppServicesModule,
    AdminModule,
    UserModule,
    SecurityModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```




