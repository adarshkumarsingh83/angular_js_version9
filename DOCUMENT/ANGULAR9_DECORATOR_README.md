# Decorators
> its a typescript used for passing meta data to angular application.
> functions return function.
> invoked at run time.
> it allowd us to invoke functions.
> it start with @ 
> some param are mandatory or some are optional.
---


## List of Decorators
---

### Class Decorators
* @NgModule
* @Component
```
import { Component } from '@angular/core';

@Components( -----  )
export class AppComponents{
	title='project-name';
 
      ----- some code ----

}

```

### Class Property Decorators
* @Input 
* @Output

```
import { Component , Input, Output } from '@angular/core';

@Components( -----  )
export class AppComponents{
   title='project-name';
   @Input() varName: string;
   @Output() varName: string;
}
```

### Event Decorators
* @HostListener 

### Param Decorators
* @Inject 

### How to Generate the Decorators
* ng g d @Decorators-Name


