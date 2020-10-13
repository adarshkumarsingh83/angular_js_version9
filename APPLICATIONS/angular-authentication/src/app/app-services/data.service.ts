import { Injectable, Inject } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
import { User } from './user';

const STORAGE_KEY = 'local_esaprk';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) {
    const userData = this.storage.get(STORAGE_KEY) || [];
    if (userData && !userData.length) {
      this.storeOnLocalStorage({
        userName: 'admin',
        userPwd: 'admin',
        email: 'admin@espark.com',
        isAdmin: true,
      });
      this.storeOnLocalStorage({
        userName: 'user',
        userPwd: 'user',
        email: 'user@espark.com',
        isAdmin: false,
      });
    }
  }

  public storeOnLocalStorage(user: User): void {
    // get array of tasks from local storage
    const userData = this.storage.get(STORAGE_KEY) || [];

    // push new task to array
    userData.push(user);

    // insert updated array to local storage
    this.storage.set(STORAGE_KEY, userData);

    console.log(this.storage.get(STORAGE_KEY) || 'LocaL storage is empty');
  }

  public getFromStorge(userName: String, userPwd: String): User {
    const userData = this.storage.get(STORAGE_KEY) || [];
    for (var index in userData) {
      const user = userData[index];
      if (user.userName === userName && user.userPwd === userPwd) {
        return user;
      }
    }
    return null;
  }

  public getData(userName: String): User {
    const userData = this.storage.get(STORAGE_KEY) || [];
    for (var index in userData) {
      const user = userData[index];
      if (user.userName === userName) {
        return user;
      }
    }
    return null;
  }

  public getAllData(): User[] {
    return this.storage.get(STORAGE_KEY) || [];
  }
}
