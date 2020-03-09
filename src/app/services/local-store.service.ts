import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStoreService {

  constructor() {
  }

  write(key, value) {
    localStorage.setItem(key, this.stringyFy(value));
  }

  read(key) {
    return this.parse(localStorage.getItem(key));
  }

  stringyFy(object): string {
    return JSON.stringify(object);
  }

  parse(string) {
    return JSON.parse(string);
  }
}
