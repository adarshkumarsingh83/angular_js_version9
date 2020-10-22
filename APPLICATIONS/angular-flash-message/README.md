# AngularFlashMessage

- \$ ng new angular-flash-message

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

### install the flash

- npm install angular2-flash-messages --save

### import in the app module

- proj/src/app/app.module.ts

```
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlashMessagesModule } from 'angular2-flash-messages';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, FlashMessagesModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

```

### configure the mmethods in components

- proj/src/app/app.component.ts

```
import { Component } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-flash-message';
  constructor(private flashMessage: FlashMessagesService) {}

  showSucessFlash() {
    // 1st parameter is a flash message text
    // 2nd parameter is optional. You can pass object with options.
    this.flashMessage.show('Welcome To espark adarsh', {
      cssClass: 'alert-success',
      timeout: 2000,
    });
  }

  public showDangerFlash(): void {
    // 1st parameter is a flash message text
    // 2nd parameter is optional. You can pass object with options.
    this.flashMessage.show('Welcome To espark adarsh', {
      cssClass: 'alert-danger',
      timeout: 2000,
    });
  }

  public showInfoFlash(): void {
    // 1st parameter is a flash message text
    // 2nd parameter is optional. You can pass object with options.
    this.flashMessage.show('Welcome To espark adarsh', {
      cssClass: 'alert-info',
      timeout: 2000,
    });
  }

  public showWarningFlash(): void {
    // 1st parameter is a flash message text
    // 2nd parameter is optional. You can pass object with options.
    this.flashMessage.show('Welcome To espark adarsh', {
      cssClass: 'alert-warning',
      timeout: 2000,
    });
  }

  public showLightFlash(): void {
    // 1st parameter is a flash message text
    // 2nd parameter is optional. You can pass object with options.
    this.flashMessage.show('Welcome To espark adarsh', {
      cssClass: 'alert-light',
      timeout: 2000,
    });
  }

  public showDarkFlash(): void {
    // 1st parameter is a flash message text
    // 2nd parameter is optional. You can pass object with options.
    this.flashMessage.show('Welcome To espark adarsh', {
      cssClass: 'alert-dark',
      timeout: 2000,
    });
  }

  public showPrimaryFlash(): void {
    // 1st parameter is a flash message text
    // 2nd parameter is optional. You can pass object with options.
    this.flashMessage.show('Welcome To espark adarsh', {
      cssClass: 'alert-primary',
      timeout: 2000,
    });
  }

  public showSecoundaryFlash(): void {
    // 1st parameter is a flash message text
    // 2nd parameter is optional. You can pass object with options.
    this.flashMessage.show('Welcome To espark adarsh', {
      cssClass: 'alert-secondary',
      timeout: 2000,
    });
  }
}
```

### Define the action for every fash message

- proj/src/app/app.component.htmnl

```
<div class="container">
  <div class="alert alert-info text-center">
    <h3 class="display-3">ESPARK INNOVATION LABS</h3>
  </div>
  <br />
  <flash-messages></flash-messages>
  <br />
  <div>
    <button type="button" (click)="showPrimaryFlash()" class="btn btn-primary">
      Primary Flash
    </button>
    &nbsp;
    <button
      type="button"
      (click)="showSecoundaryFlash()"
      class="btn btn-secondary"
    >
      Secondary Flash
    </button>
    &nbsp;
    <button type="button" (click)="showSucessFlash()" class="btn btn-success">
      Sucess Flash
    </button>
    &nbsp;
    <button type="button" (click)="showDangerFlash()" class="btn btn-danger">
      Alert Flash
    </button>
    &nbsp;
    <button type="button" (click)="showWarningFlash()" class="btn btn-warning">
      Warning Flash
    </button>
    &nbsp;
    <button type="button" (click)="showInfoFlash()" class="btn btn-info">
      Info Flash
    </button>
    &nbsp;
    <button type="button" (click)="showLightFlash()" class="btn btn-light">
      Light Flash
    </button>
    &nbsp;
    <button type="button" (click)="showDarkFlash()" class="btn btn-dark">
      Dark Flash
    </button>
  </div>
  <router-outlet></router-outlet>
</div>

```

### To build the code

- ng build

### To execute the code

- ng serve

### To access the application

- http://localhost:4200
