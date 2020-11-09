import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private api: ApiService) {
  }

  addProject(params): any {
    return this.api.addProject(params);
  }
}
