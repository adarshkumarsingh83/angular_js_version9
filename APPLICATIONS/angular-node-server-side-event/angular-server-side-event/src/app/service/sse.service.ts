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
