# Angular Forms 
---
## BootStrap in Angular 
* From CDN
	* vist to https://getbootstrap.com/
	* find link for CSS
	* find link for Js 
	* Copy link for CSS & JS in the project/src/index.html
	* use bootstrap component into the applcation 
* From Npm 
	* Install bootstrap 
		* npm i bootstrap@3 --save 
		* import bootstrap style and script we have to do manually otherwise it will not work
	* Install using npm in single command 
		* latest version 
			* npm i boostrap jquery propper --save 
		* To specific version 
			* npm i boostrap@x jquery@x propper@x --save 

* NOTE IMPORT THE PATH 
* project/angular.json tag where we have to add path for importing 
	* projects->project-name->architect->build->option->style
	* projects->project-name->architect->build->option->script
	* projects->project-name->test->build->option->style
	* projects->project-name->test->build->option->script
    
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

