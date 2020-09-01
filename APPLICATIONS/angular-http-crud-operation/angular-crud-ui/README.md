# AngularCrudUi
---

### Application Generation 
* $ ng new angular-crud-ui
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
* Restart the app becoz for angular.json it will not do auto reload
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

### Generate invalid url component
* $ ng g component InvalidUrl
```
CREATE src/app/invalid-url/invalid-url.component.scss (0 bytes)
CREATE src/app/invalid-url/invalid-url.component.html (26 bytes)
CREATE src/app/invalid-url/invalid-url.component.spec.ts (657 bytes)
CREATE src/app/invalid-url/invalid-url.component.ts (295 bytes)
UPDATE src/app/app.module.ts (628 bytes)
```
### InvalidUrl component template
* src/app/invalid-url/invalid-url.component.html

### InvalidUrl component
* src/app/invalid-url/invalid-url.component.ts
```
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-invalid-url',
  templateUrl: './invalid-url.component.html',
  styleUrls: ['./invalid-url.component.scss']
})
export class InvalidUrlComponent implements OnInit {

  public href: string = "";

  constructor(private router: Router) {}

  ngOnInit() {
      this.href = this.router.url;
      console.log(this.router.url);
  }
}
```
### Adding rout entry in app routing 
* src/app/app-routing.module.ts
```
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InvalidUrlComponent } from './invalid-url/invalid-url.component';

const routes: Routes = [
  { path: '' ,redirectTo: '' , pathMatch: 'full' },
  { path: '**' , component: InvalidUrlComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

```

---

# To Generate the ui Module 
* $ ng g module <'module-name'> --route <'route-name'> --module app.module
    * ng g module ui --route ui --module app.module
```
CREATE src/app/ui/ui-routing.module.ts (328 bytes)
CREATE src/app/ui/ui.module.ts (321 bytes)
CREATE src/app/ui/ui.component.scss (0 bytes)
CREATE src/app/ui/ui.component.html (17 bytes)
CREATE src/app/ui/ui.component.spec.ts (600 bytes)
CREATE src/app/ui/ui.component.ts (260 bytes)
UPDATE src/app/app-routing.module.ts (327 bytes)


* src/app/app-routing.module.ts

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InvalidUrlComponent } from './invalid-url/invalid-url.component';

const routes: Routes = [
  { path: '' ,redirectTo: '' , pathMatch: 'full' },
  { path: 'ui', loadChildren: () => import('./ui/ui.module').then(m => m.UiModule) },
  { path: '**' , component: InvalidUrlComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

* src/app/ui/ui.component.html

<div class="container">
    {{responseMsg}}
    <h3>Data Table</h3>  
    <p>All the data stored curently in db storage </p>            
    <table class="table table-condensed">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Password</th>
          <th>Term & Condition</th>
          <th colspan="3">  <a href="#" routerLink="create" class="btn btn-success">Create New Data</a></th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let dataItem of responseData">
          <td>{{dataItem.userName}}</td>
          <td>{{dataItem.email}}</td>
          <td>{{dataItem.userPwd}}</td>
          <td>{{dataItem.term}}</td>
          <td><button (click)="deleteUser(dataItem.id)" class="btn btn-danger">Delete</button></td>
          <td><a href="#" [routerLink]="['update/', dataItem.id]" class="btn btn-info">Update</a></td>
          <td><a href="#" [routerLink]="['detail/', dataItem.id]" class="btn btn-info">View</a></td>
        </tr>
      </tbody> 
    </table>
  </div>

* src/app/ui/ui.component.ts

import { Component, OnInit } from '@angular/core';
import {DataService} from './services/data.service';
import { User } from './model/user';

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.scss']
})
export class UiComponent implements OnInit {

  responseMsg;
  responseData: User[];

  constructor(private daaService: DataService) {
    console.log(`FormComponent constructor()`);
  }

  ngOnInit(): void {
    console.log(`ListDataComponent.ngOnInit()`);
    this.fetchData();
  }

  fetchData() {
    this.daaService.getDataList().subscribe(
      (response) => {
        this.responseData = response.data;
        this.responseMsg = response.message;
        console.log(`FormComponent.fetchData()`,this.responseData);
      },
      (error) => {
        console.log(`FormComponent.fetchData() Erros `, error);
      }
    );
  }

  deleteUser(id: number){
    this.daaService.deleteData(id).subscribe(
      (response) => {
        this.responseMsg = response.message;
        console.log(`FormComponent.fetchData()`,this.responseData);
      },
      (error) => {
        console.log(`FormComponent.fetchData() Erros `, error);
      }
    );
    this.fetchData();
  }
}
```

### Genrate Detail Data Compoennt 
* $ cd src/app/ui  
* $ ng g component dataDetail
```
CREATE src/app/ui/data-detail/data-detail.component.scss (0 bytes)
CREATE src/app/ui/data-detail/data-detail.component.html (26 bytes)
CREATE src/app/ui/data-detail/data-detail.component.spec.ts (657 bytes)
CREATE src/app/ui/data-detail/data-detail.component.ts (295 bytes)
UPDATE src/app/ui/ui.module.ts (910 bytes)

* src/app/ui/data-detail/data-detail.component.html 
<div class="container">
  <h1>View Data</h1>
  <table class="table">
    <tr>
      <td>Id:</td>
      <td>{{ user.id }}</td>
    </tr>
    <tr>
      <td>Name:</td>
      <td>{{ user.userName }}</td>
    </tr>
    <tr>
      <td>Email:</td>
      <td>{{ user.email }}</td>
    </tr>
    <tr>
      <td>Password:</td>
      <td>{{ user.userPwd }}</td>
    </tr>
    <tr>
      <td>Terms & Condition:</td>
      <td>{{ user.term }}</td>
    </tr>
    <tr>
        <td colspan="2"><a href="#" routerLink="/ui/data" class="btn btn-primary">Listing Page</a></td>
    </tr>
  </table>
</div>

* src/app/ui/data-detail/data-detail.component.ts 
import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../model/user';
import { Data } from '../model/data';

@Component({
  selector: 'app-data-detail',
  templateUrl: './data-detail.component.html',
  styleUrls: ['./data-detail.component.scss']
})
export class DataDetailComponent implements OnInit {

  id: number;
  user: User;

  constructor( public dataService: DataService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
      this.dataService.getData(this.id)
      .subscribe((response: Data<User>) => {
           this.user = response.data;
      });
  }
}
```

### Generate Create Data Component 
* $ cd src/app/ui  
* $ ng g component create-data
```
CREATE src/app/ui/create-data/create-data.component.scss (0 bytes)
CREATE src/app/ui/create-data/create-data.component.html (26 bytes)
CREATE src/app/ui/create-data/create-data.component.spec.ts (657 bytes)
CREATE src/app/ui/create-data/create-data.component.ts (295 bytes)
UPDATE src/app/ui/ui.module.ts (505 bytes)

* src/app/ui/create-data/create-data.component.html 

<div class="container">
  {{responseMsg}}
  <form #myForm="ngForm" (ngSubmit)="savaData(myForm)">
    <div class="form-group">
      <label for="inputName">Name </label>
      <input type="text" class="form-control" id="inputName" aria-describedby="nameHelp" ngModel name="nameInput"  required/>
      <small id="nameHelp" class="form-text text-muted">We'll never share your name with anyone else.</small>
    </div>
    <div class="form-group">
      <label for="inputEmail">Email address</label>
      <input type="email" class="form-control" id="inputEmail" aria-describedby="emailHelp" ngModel name="emailInput" required />
      <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
    <div class="form-group">
      <label for="inputPassword">Password</label>
      <input type="password" class="form-control" id="inputPassword" ngModel name="pwdInput" required>
    </div>
    <div class="form-group form-check">
      <input type="checkbox" class="form-check-input" id="inputCheck" ngModel name="checkboxInput" />
      <label class="form-check-label" for="inputCheck">Agreed on Contract</label>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
    &nbsp;
    <button type="button" class="btn btn-primary" (click)="clearFields(myForm)">Clear</button>
    &nbsp;
    <a href="#" routerLink="/ui/data" class="btn btn-primary">Listing Page</a>
  </form>
</div>

* src/app/ui/create-data/create-data.component.ts

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from '../services/data.service';
import { User } from '../model/user';

@Component({
  selector: 'app-create-data',
  templateUrl: './create-data.component.html',
  styleUrls: ['./create-data.component.scss'],
})
export class CreateDataComponent implements OnInit {
  constructor(private daaService: DataService) {}

  responseMsg;
  user: User;

  savaData(myForm: NgForm) {
    this.user = {
      id: -1,
      userName: myForm.value.nameInput,
      email: myForm.value.emailInput,
      userPwd: myForm.value.pwdInput,
      term: myForm.value.checkboxInput,
    };

    console.log(`FormComponent.savaData()`, JSON.stringify(this.user));
    this.daaService.saveData(this.user).subscribe(
      (response) => {
        this.responseMsg = response.message;
      },
      (error) => {
        console.log(`FormComponent.savaData() Erros `, error);
      }
    );
  }
  
  clearFields(myForm: NgForm) {
    console.log(`CreateDataComponent.clearFields()`);
    myForm.reset();
  }

  ngOnInit(): void {}
}

```

### Generate Update Data Component 
* $ cd src/app/ui  
* $ ng g component update-data
```
CREATE src/app/ui/update-data/update-data.component.scss (0 bytes)
CREATE src/app/ui/update-data/update-data.component.html (26 bytes)
CREATE src/app/ui/update-data/update-data.component.spec.ts (657 bytes)
CREATE src/app/ui/update-data/update-data.component.ts (295 bytes)
UPDATE src/app/ui/ui.module.ts (601 bytes)

* src/app/ui/update-data/update-data.component.html
<div class="container">
     {{responseMsg}}
    <form #myForm="ngForm" (ngSubmit)="updateData()">
    <div class="form-group">
        <label for="inputId">Id </label>
        <input type="text" class="form-control" id="inputId" [(ngModel)]='id' name="id"  required/>
    </div>
      <div class="form-group">
        <label for="inputName">Name </label>
        <input type="text" class="form-control" id="inputName" [(ngModel)]='name' name="name"  required/>
      </div>
      <div class="form-group">
        <label for="inputEmail">Email address</label>
        <input type="email" class="form-control" id="inputEmail" [(ngModel)]='email' name="email" required />
      </div>
      <div class="form-group">
        <label for="inputPassword">Password</label>
        <input type="password" class="form-control" id="inputPassword" [(ngModel)]='pwd' name="pwd" required>
      </div>
      <div class="form-group form-check">
        <input type="checkbox" class="form-check-input" id="term" [(ngModel)]='term' name="term" />
        <label class="form-check-label" for="checkbox">Agreed on Contract</label>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
      &nbsp;
      <a href="#" routerLink="/ui/data" class="btn btn-primary">Listing Page</a>
    </form>
  </div>

* src/app/ui/update-data/update-data.component.ts 

import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../model/user';
import { Data } from '../model/data';

@Component({
  selector: 'app-update-data',
  templateUrl: './update-data.component.html',
  styleUrls: ['./update-data.component.scss'],
})
export class UpdateDataComponent implements OnInit {
  id: number;
  name: string;
  email: string;
  pwd: string;
  term: boolean;
  user: User;
  responseMsg;

  constructor(
    public dataService: DataService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  updateData() {
      this.user = {
        id: this.id,
        userName: this.name,
        email: this.email,
        userPwd: this.pwd,
        term: this.term,
      }
      console.log(`${this.user}`);
      console.log(`FormComponent.savaData()`, JSON.stringify(this.user));
      this.dataService.updateData(this.id,this.user).subscribe(
        (response) => {
          this.responseMsg = response.message;
        },
        (error) => {
          console.log(`FormComponent.savaData() Erros `, error);
        }
      );
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.dataService.getData(this.id).subscribe((response: Data<User>) => {
      this.id = response.data.id;
      this.name = response.data.userName;
      this.email = response.data.email;
      this.pwd = response.data.userPwd;
      this.term = response.data.term;
    });
  }
}

```
### Export the Components for Global use 
* project/src/app/ui/ui-routing.module.ts
```
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { UiRoutingModule } from './ui-routing.module';
import { UiComponent } from './ui.component';
import { CreateDataComponent } from './create-data/create-data.component';
import { UpdateDataComponent } from './update-data/update-data.component';
import { FormsModule } from '@angular/forms';
import { DataDetailComponent } from './data-detail/data-detail.component';

@NgModule({
  declarations: [UiComponent, CreateDataComponent, UpdateDataComponent, DataDetailComponent],
  imports: [
    CommonModule,
    UiRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  exports:[CreateDataComponent, UpdateDataComponent, DataDetailComponent]
})
export class UiModule { }
```
### Generate the generic model for http calls 
* $ cd src/app/ui 
* $ mkdir model 
* $ ng g interface data 
```
CREATE src/app/ui/model/data.ts (26 bytes)

export interface Data <T>{
  message: string;
  error: string;
  data: T;
}

```

### Generate the user model for http calls 
* $ cd src/app/ui 
* $ cd model 
* $ ng g interface user 
```
CREATE src/app/ui/model/user.ts (26 bytes)

export interface User {
        id: number;
        userName: string;
        email: string;
        userPwd: string;
        term: boolean;
  }
```

### Generate the service for http calls 
* $ cd src/app/ui 
* $ mkdir services 
* $ ng g service data 
```
CREATE src/app/ui/services/data.service.spec.ts (347 bytes)
CREATE src/app/ui/services/data.service.ts (133 bytes)
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Data } from '../model/data';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private baseUrl = 'http://localhost:8080/api';
  corsUrl ='http://localhost:4200';

  constructor(private httpClient: HttpClient) {}

  saveData(userData: User): Observable<Data<User>> {
    console.log(`DataService.saveData()  ` + JSON.stringify(userData));
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('content-type', 'application/json');
    httpHeaders.append('Access-Control-Allow-Origin', this.corsUrl);
    return this.httpClient.post<Data<User>>(`${this.baseUrl}/user`,userData, { headers: httpHeaders });     
  }

  updateData(id: number ,userData: User): Observable<Data<User>> {
    console.log(`DataService.updateData()  ` + JSON.stringify(userData));
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('content-type', 'application/json');
    httpHeaders.append('Access-Control-Allow-Origin', this.corsUrl);
    return this.httpClient.put<Data<User>>(`${this.baseUrl}/user/${id}`, userData, { headers: httpHeaders }) 
  }

  deleteData(id: number): Observable<Data<User>> {
    console.log(`DataService.deleteData()  ${id}`);
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('content-type', 'application/json');
    httpHeaders.append('Access-Control-Allow-Origin', this.corsUrl);
    return this.httpClient.delete<Data<User>>(`${this.baseUrl}/user/${id}`, { headers: httpHeaders })
  }

  getData(id: number): Observable<Data<User>> {
    console.log(`DataService.getData()  ${id}`);
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('content-type', 'application/json');
    httpHeaders.append('Access-Control-Allow-Origin', this.corsUrl);
    return this.httpClient.get<Data<User>>(`${this.baseUrl}/user/${id}`, { headers: httpHeaders })
  }

  getDataList(): Observable<Data<User[]>> {
    console.log(`DataService.getDataList() `);
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('content-type', 'application/json');
    httpHeaders.append('Access-Control-Allow-Origin', this.corsUrl);
    return this.httpClient.get<Data<User[]>>(`${this.baseUrl}/users`, { headers: httpHeaders });
  }
}

```
### Add Routing entry in 
* src/app/ui/ui-routing.module.ts 
```
import { UiComponent } from './ui.component';
import { CreateDataComponent } from './create-data/create-data.component';
import { UpdateDataComponent } from './update-data/update-data.component';
import { DataDetailComponent } from './data-detail/data-detail.component';

const routes: Routes = [
  { path: 'data', component: UiComponent },
  { path: 'data/create', component: CreateDataComponent },
  { path: 'data/update/:id', component: UpdateDataComponent },
  { path: 'data/detail/:id', component: DataDetailComponent },  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UiRoutingModule { }
```
--- 

### Inport the Ui Module into the app.component.ts 
* project/src/app/app.module.ts
```
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiModule } from './ui/ui.module';
import { InvalidUrlComponent } from './invalid-url/invalid-url.component';

@NgModule({
  declarations: [
    AppComponent,
    InvalidUrlComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UiModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

### To Build the appication
* $ ng build

### To Execute the application
* $ ng serve

### Appliation Url
  * app module url
  * http://localhost:4200
### form url 
  * http://localhost:4200/ui/data