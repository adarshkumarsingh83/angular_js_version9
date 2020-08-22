# EsparkBasicApplication

### To Create new app 
* $ ng new espark-basic-application
```
? Would you like to add Angular routing? Yes
? Which stylesheet format would you like to use? 
  CSS 
❯ SCSS   [ https://sass-lang.com/documentation/syntax#scss                ] 
  Sass   [ https://sass-lang.com/documentation/syntax#the-indented-syntax ] 
  Less   [ http://lesscss.org                                             ] 
  Stylus [ http://stylus-lang.com                                         ] 
```

* $ cd espark-basic-application/

### To Execute the Angular project
* $ ng serve 
* $ ng serve --port=<4300>

### To access the application 
* http://localhost:4200

### To Stop Server 
* crt + c

# Bootstrap in angularjs 
### installation to angularjs 
* $ npm i bootstrap --save

### import the boot srap in angularjs application 
* project/src/app/app.component.html which is starting point for the angular  
* NOTE: clean the file and only leave the <'router-outlet></'router-outlet>
```
<div>
  <h1 class="display-1"> welcome to espark</h1>
</div>
<router-outlet></router-outlet>
```

*  project/src/style.cass  bootstrap has to be added into the 
```
   @import '~bootstrap/dist/css/bootstrap.min.css';
```

### To Execute the Angular project
* $ ng serve 
* $ ng serve --port=<4300>
	
### To access the application 
* http://localhost:4200

### To Stop Server 
* crt + c
