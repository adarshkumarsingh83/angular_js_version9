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
