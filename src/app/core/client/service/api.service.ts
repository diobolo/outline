import { Injectable } from '@angular/core';
import { IdbService } from '../../idb/service/idb.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private idb: IdbService) {

  }

  addProject(params: AddProject): any {
    this.idb.addRow('project', params);
  }

}
