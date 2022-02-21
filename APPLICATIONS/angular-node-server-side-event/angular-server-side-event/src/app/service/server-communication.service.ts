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
