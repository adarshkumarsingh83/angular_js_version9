import { Injectable, Inject } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
import { UserContext } from './beans/user-context';

const STORAGE_KEY = 'user_context';

@Injectable({
  providedIn: 'root',
})
export class SecurityUtilService {
  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) {
    console.log(`SecurityUtilService.constructor()`);
  }

  public storeOnLocalStorage(userContext: UserContext): UserContext {
    console.log(`SecurityUtilService.storeOnLocalStorage()`);
    if (userContext != null) {
      this.storage.set(STORAGE_KEY, userContext);
      console.log(this.storage.get(STORAGE_KEY) || 'LocaL storage is empty');
      return this.storage.get(STORAGE_KEY);
    } else {
      return null;
    }
  }

  public removeStoreage(): void {
    console.log(`SecurityUtilService.removeStoreage()`);
    this.storage.remove(STORAGE_KEY);
  }

  public getFromStorge(): UserContext {
    console.log(`SecurityUtilService.getFromStorge()`);
    const userData = this.storage.get(STORAGE_KEY) || {};
    if (userData != null) {
      return userData;
    }
    return null;
  }
}
