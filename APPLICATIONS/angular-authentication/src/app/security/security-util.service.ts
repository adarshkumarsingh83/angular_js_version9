import { Injectable, Inject } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
import { UserContext } from './user-context';

const STORAGE_KEY = 'user_context';

@Injectable({
  providedIn: 'root',
})
export class SecurityUtilService {
  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) {}

  public storeOnLocalStorage(userContext: UserContext): void {
    this.storage.set(STORAGE_KEY, userContext);
    console.log(this.storage.get(STORAGE_KEY) || 'LocaL storage is empty');
  }

  public getFromStorge(): UserContext {
    const userData = this.storage.get(STORAGE_KEY) || {};
    if (userData != null) {
      return userData;
    }
    return null;
  }
}
