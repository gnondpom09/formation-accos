import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  async setObject(key: string, value: any) {
    await localStorage.setItem(key, JSON.stringify(value) );
  }

  async getObject(key: string): Promise<{ value: any }> {
    const res = await localStorage.getItem(key);
    return JSON.parse(res);
  }
}
