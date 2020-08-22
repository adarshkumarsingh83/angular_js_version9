import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-databinding-interpolation';

  name= "adarsh kumar";
  age= "30";
  user= { id: 1,name:"adarsh kumar"};
}
