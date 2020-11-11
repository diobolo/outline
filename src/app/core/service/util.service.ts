import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() {
  }

  // 生成ID随机数
  randomString(): string {
    return (Date.now() * 1000 + Math.floor(Math.random() * 1000)).toString(36);
  }

  generateUUID(): string {
    // Public Domain/MIT
    let d = new Date().getTime();

    if (typeof performance !== 'undefined' && typeof performance.now === 'function') {
      d += performance.now(); // use high-precision timer if available
    }
    // length = 36
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
      // tslint:disable-next-line:no-bitwise
      const r = ((d + Math.random() * 16) % 16) | 0;

      d = Math.floor(d / 16);
      // tslint:disable-next-line:no-bitwise
      return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
    });
  }
}
