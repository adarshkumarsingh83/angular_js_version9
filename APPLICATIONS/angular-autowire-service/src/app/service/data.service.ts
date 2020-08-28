import { Injectable, Inject } from '@angular/core';

import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  public storageKey = "espark";
  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) {
     this.storage.set(this.storageKey, [{ 'name': 'adarsh kumar','email': 'adarsh@kumar', 'pwd': '****', 'term': true},
     { 'name': 'radha singh','email': 'radha@singh', 'pwd': '****', 'term': true}]);
   }

  public storeOnLocalStorage(data: object): void{
    console.log(`DataService.storeOnLocalStorage()  `+ JSON.stringify(data));
    this.addDataToList(data);
  }

  public getFromLocalStorage(): any {
    var dataList = this.getDataList();
     console.log(`DataService.getFromLocalStorage() `,JSON.stringify(dataList));
     return dataList;
  }

  public deleteLocalStorage(): void {
    console.log(`DataService.deleteLocalStorage()`);
       this.storage.remove(this.storageKey);
  }

  private addDataToList(data: object): void{
    var dataObjectList = this.getDataList();
    dataObjectList.push(data);
    this.storage.set(this.storageKey, dataObjectList);
  }

  private getDataList(): object[]{
    var data = this.storage.get(this.storageKey) || [];
    console.log(`DataService.getDataList()`,JSON.stringify(data));
    return data;
  }

}
