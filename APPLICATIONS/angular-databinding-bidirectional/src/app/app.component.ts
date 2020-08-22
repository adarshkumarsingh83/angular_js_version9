import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-databinding-bidirectional';
  email='';
  clickEmail='';
  displayEmail(){
  	console.log(this.email);
     this.clickEmail=this.email;
  }
}
