import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-databinding-eventbinding';
 message= "";
  displayData(name){
    alert("welcome to espark "+name);
    console.log("welcome to espark "+name);
    this.message= "welcome to espark "+name;
 }

}
