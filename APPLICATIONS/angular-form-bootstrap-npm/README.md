# AngularFormBootstrapNpm

### To Generate the Application 
* $ ng new angular-form-bootstrap-npm
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
* $ npm i bootstrap jquery propper --save

### Import path 
* project/angular.json
    * projects->project-name->architect->build->option->style
    * projects->project-name->architect->build->option->script
    ```
    "styles":[
         	"scr/styles.scess",
         	"node_modules/bootstrap/dist/css/bootstrap.min.css"
        ],
        "scripts":[
            "node_modules/jquery/dist/jquery.min.js",
 			"node_modules/bootstrap/dist/js/bootstrap.min.js"
        ]
    ```

### To Execute 
* $ ng serve 

### Application Url 
* http://localhsot:4200

