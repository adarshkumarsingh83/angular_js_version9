import { Injectable, Inject } from '@angular/core';

import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  dataList: any;
  public storageKey = "espark";
  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) { }


  public storeOnLocalStorage(data: object): void{
    console.log(`DataService.storeOnLocalStorage()  `+ JSON.stringify(data));
    this.storage.set(this.storageKey, data);
  }

  public getFromLocalStorage(): object{
     this.dataList = this.storage.get(this.storageKey) || [];
     console.log(`DataService.getFromLocalStorage()   `+JSON.stringify(this.dataList));
     return this.dataList;
  }
}
