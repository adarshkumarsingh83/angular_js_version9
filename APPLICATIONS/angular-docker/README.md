# AngularDocker

### To Generate appliction 
* $ ng new angular-docker
```
? Would you like to add Angular routing? Yes
? Which stylesheet format would you like to use? 
  CSS 
❯ SCSS   [ https://sass-lang.com/documentation/syntax#scss                ] 
  Sass   [ https://sass-lang.com/documentation/syntax#the-indented-syntax ] 
  Less   [ http://lesscss.org                                             ] 
  Stylus [ http://stylus-lang.com                                         ] 
```

### bootstrap installtion
* $ npm i bootstrap jquery propper --save
* project/angular.json
    * projects->project-name->architect->build->option->style
    * projects->project-name->architect->build->option->script
* restart the app becoz for angular.json it will not do auto reload
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
### Adding header for app template
* project/src/app.component.html
```
<div class="container">
  <div class="alert alert-primary" role="alert">
    <h4 class="display-3">WELCOME TO APP MODULE</h4>
  </div>
</div>
<router-outlet></router-outlet>
```


### To Execute 
* ng serve 

### app url 
* http://localhost:4200/

### Create a Dockerfile 
* projcect/Dockerfile 
```
FROM node:latest as build
RUN mkdir  /app 
WORKDIR /app
COPY . . 
RUN npm install 
RUN npm run build
CMD ["npm","start"]


```

### edit package.json file 
* project/package.json 
```
"scripts":{
	xxxx
	"start": "ng serve --host 0.0.0.0",
    xxxxx
}
```

### To create docker iamge 
* $ docker build -t <'tag-name'> .
* $ docker build -t adarshkumarsingh83/angular-docker .

### To execute image 
* $ docker run -p 42000:4200 --name <'container-name'> <'image-name'>
* $ docker run -p 4200:4200 --name angular-docker adarshkumarsingh83/angular-docker

### app url 
* http://localhost:4200/

### To kill container 
* docker ps -a 

* docker rm -f <'container id '>