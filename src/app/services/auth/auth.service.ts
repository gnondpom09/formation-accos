import { Injectable } from '@angular/core';

import { StorageService } from "../storage/storage.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private storage: StorageService) { }

    /**
   * Return state logged user
   */
  isAuthenticated(): boolean {
    if (this.storage.getObject('user')) {
      return true;
    } else {
      return false;
    }
  }

  /**
   * generate uid
   * @param length length of uid
   */
  generateUid(length: number) {
    const stringArr = [];
    for(let i = 0; i< length; i++){
      const S4 = (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
      stringArr.push(S4);
    }
    return stringArr.join('-');
  }

}
