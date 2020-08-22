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





