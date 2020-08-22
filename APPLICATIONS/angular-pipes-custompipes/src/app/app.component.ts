import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-pipes-custompipes';

  person={
	  firstName:"adarsh",
	  lastName:"kumar",
	  dob:"09/13/1983",
    salary:"1000.589",
    city: "dallas",
  }
}
