# AngularServerSideEvent

---

### Source Code Generation

- $ ng new angular-server-side-event

```
? Would you like to add Angular routing? Yes
? Which stylesheet format would you like to use?
  CSS
❯ SCSS   [ https://sass-lang.com/documentation/syntax#scss                ]
  Sass   [ https://sass-lang.com/documentation/syntax#the-indented-syntax ]
  Less   [ http://lesscss.org                                             ]
  Stylus [ http://stylus-lang.com
```

### To Install bootstrap and proper

- $ npm i bootstrap jquery propper --save
- Import path
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

### Generate invalid url component

- $ ng g component InvalidUrl

```
? Would you like to share anonymous usage data about this project with the Angular Team at
Google under Google’s Privacy Policy at https://policies.google.com/privacy? For more
details and how to change this setting, see http://angular.io/analytics. No
CREATE src/app/invalid-url/invalid-url.component.scss (0 bytes)
CREATE src/app/invalid-url/invalid-url.component.html (26 bytes)
CREATE src/app/invalid-url/invalid-url.component.spec.ts (657 bytes)
CREATE src/app/invalid-url/invalid-url.component.ts (295 bytes)
UPDATE src/app/app.module.ts (572 bytes)
```

### InvalidUrl component template

- src/app/invalid-url/invalid-url.component.html

```
<p>requested url {{href}} is invalid!</p>
```

### InvalidUrl component

- src/app/invalid-url/invalid-url.component.ts

### Generating service module

- $ ng generate module service

```
CREATE src/app/service/service.module.ts (193 bytes)
```

### Generating Sse Service in service module

- cd src/app/service
- $ ng g service Sse

```
CREATE src/app/service/sse.service.spec.ts (342 bytes)
CREATE src/app/service/sse.service.ts (132 bytes)
```

### ServerSideService

- src/app/service/sse.service.ts

```
CREATE src/app/service/sse.service.spec.ts (342 bytes)
CREATE src/app/service/sse.service.ts (132 bytes)
```

- code

```
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SseService {
  constructor() {}

  getEventSource(url: string): EventSource {
    return new EventSource(url);
  }
}

```

### ServerCommunication

- $ ng g service ServerCommunication

```
CREATE src/app/service/server-communication.service.spec.ts (423 bytes)
CREATE src/app/service/server-communication.service.ts (148 bytes)
```

- code

```
import { Injectable, NgZone } from '@angular/core';
import {  Observable } from 'rxjs';
import { SseService } from './sse.service';

@Injectable({
  providedIn: 'root',
})
export class ServerCommunicationService {
  constructor(private _zone: NgZone, private _sseService: SseService) {}

  getServerSEndEvent(url: string) {
    return Observable.create((observable) => {
      const eventSource = this._sseService.getEventSource(url);
      eventSource.onmessage = (event) => {
        this._zone.run(() => {
          observable.next(event);
        });
      };
      eventSource.onerror = (error) => {
        this._zone.run(() => {
          observable.error(error);
        });
      };
    });
  }
}
```

### Using ServerCommunication in app.compoent

- src/app/app.component.ts

```
import { Component, OnInit } from '@angular/core';
import { ServerCommunicationService } from './service/server-communication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'angular-server-side-event';

  public message: string = '';

  constructor(
    private _serverCommunicationService: ServerCommunicationService
  ) {}

  ngOnInit(): void {
    this._serverCommunicationService
      .getServerSEndEvent('http://localhost:8080/espark')
      .subscribe((data) => {
        this.message = data.data;
        console.log(data);
      });
  }
}
```

### Using app.compoent.html to show the server response

- src/app/app.component.html

```
<h1>welcome to espark</h1>
{{ message }}
<router-outlet></router-outlet>

```
