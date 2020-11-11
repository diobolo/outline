import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {IdbService} from '../idb/service/idb.service';

@Injectable({
  providedIn: 'root'
})
export class InitGuard implements CanActivate {
  constructor(private idb: IdbService) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.idb.create();
  }

}
