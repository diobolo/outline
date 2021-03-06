import {Injectable} from '@angular/core';
import {version} from '../config/version';
import {stores} from '../config/stores';

@Injectable({
  providedIn: 'root'
})
export class IdbService {

  db: IDBDatabase;
  dbName = 'outline';

  constructor() {
    return new Proxy(this, {
      get(t, p): any {
        if (typeof t[p] === 'function' && p !== 'create') {
          return new Proxy(t[p], {
            apply(target, ctx, args): any {
              if (ctx.db) {
                return Reflect.apply(target, ctx, args);
              }
              return ctx.create().then(() => {
                return Reflect.apply(target, ctx, args);
              });
            }
          });
        }
        return t[p];
      }
    });
  }

  create(): Promise<any> {
    return new Promise(resolve => {
      const request = window.indexedDB.open(this.dbName, version);
      request.addEventListener('upgradeneeded', () => {
        const db = request.result;
        for (const s of stores) {
          if (!db.objectStoreNames.contains(s.name)) {
            const store = db.createObjectStore(s.name, {keyPath: s.primaryKey});
            for (const i of s.indexes) {
              store.createIndex(i, i);
            }
          }
        }
      });
      request.addEventListener('success', () => {
        this.db = request.result;
        resolve(true);
      });

      function fail(err): void {
        console.log('idb open fail', err);
        resolve();
      }

      request.addEventListener('error', fail);
      request.addEventListener('blocked', fail);
    });
  }

  addRow(name, row): Promise<any> {
    return new Promise(resolve => {
      const store = this.db.transaction([name], 'readwrite').objectStore(name);
      const request = store.add(row);
      request.addEventListener('success', () => {
        resolve(row);
      });
      request.addEventListener('error', () => {
        resolve();
      });
    });
  }

  deleteRow(name, key): Promise<boolean> {
    return new Promise(resolve => {
      const request = this.db.transaction([name], 'readwrite').objectStore(name).delete(key);
      request.addEventListener('success', () => {
        resolve(true);
      });
      request.addEventListener('error', () => {
        resolve(false);
      });
    });
  }

  updateRow(name, row): Promise<boolean> {
    return new Promise(resolve => {
      const request = this.db.transaction([name], 'readwrite').objectStore(name).put(row);
      request.addEventListener('success', () => {
        resolve(true);
      });
      request.addEventListener('error', () => {
        resolve(false);
      });
    });
  }

  getRow(name, key): Promise<any> {
    return new Promise((resolve) => {
      const request = this.db.transaction([name], 'readwrite').objectStore(name).get(key);
      request.addEventListener('success', (event: any) => {
        resolve(event.target.result);
      });
      request.addEventListener('error', () => {
        resolve(false);
      });
    });
  }

  getRows(name): Promise<any> {
    return new Promise((resolve) => {
      const store = this.db.transaction([name], 'readwrite').objectStore(name);
      const request = store.getAll();
      request.addEventListener('success', (event: any) => {
        resolve(event.target.result);
      });
      request.addEventListener('error', () => {
        resolve();
      });
    });
  }

  indexAll(name: string, index: string, value: string): Promise<any> {
    return new Promise((resolve) => {
      const store = this.db.transaction([name], 'readwrite').objectStore(name);
      const idbIndex = store.index(index);
      const request = idbIndex.getAll(value);
      request.addEventListener('success', (event: any) => {
        resolve(event.target.result);
      });
      request.addEventListener('error', () => {
        resolve();
      });
    });
  }

  forEach(name, fn): void {
    this.getRows(name).then(rows => {
      rows.forEach(fn);
    });
  }
}
