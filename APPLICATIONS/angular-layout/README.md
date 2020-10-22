# AngularLayout

- \$ ng new angular-layout

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

- \$ npm i bootstrap jquery propper --save

- project/angular.json
  - projects->project-name->architect->build->option->style
  - projects->project-name->architect->build->option->script
- Restart the app becoz for angular.json it will not do auto reload

````
"styles":[
     	"src/styles.scss",
     	"node_modules/bootstrap/dist/css/bootstrap.min.css"
    ],
    "scripts":[
        "node_modules/jquery/dist/jquery.min.js",
		"node_modules/bootstrap/dist/js/bootstrap.min.js"
    ]
    ```
````

---

### To create layout module

- ng g module layout

```
CREATE src/app/layout/layout.module.ts (192 bytes)
```

### Create a header component

- cd src/app/layout
- ng g component header

```
CREATE src/app/layout/header/header.component.scss (0 bytes)
CREATE src/app/layout/header/header.component.html (21 bytes)
CREATE src/app/layout/header/header.component.spec.ts (628 bytes)
CREATE src/app/layout/header/header.component.ts (276 bytes)
UPDATE src/app/layout/layout.module.ts (268 bytes)
```

### Create a footer component

- cd src/app/layout
- ng g component footer

```
CREATE src/app/layout/footer/footer.component.scss (0 bytes)
CREATE src/app/layout/footer/footer.component.html (21 bytes)
CREATE src/app/layout/footer/footer.component.spec.ts (628 bytes)
CREATE src/app/layout/footer/footer.component.ts (276 bytes)
UPDATE src/app/layout/layout.module.ts (346 bytes)
```
