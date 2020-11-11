import {Injectable} from '@angular/core';
import {IdbService} from '../../idb/service/idb.service';
import {v4 as uuid4} from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private idb: IdbService) {

  }

  addProject(params: AddProject): any {
    return this.idb.addRow('project', {id: uuid4(), ...params});
  }

  getProjectList(): any {
    return this.idb.getRows('project');
  }

  deleteProject(id: string): any {
    return this.idb.deleteRow('project', id);
  }

  getProject(id: string): Promise<any> {
    return this.idb.getRow('project', id);
  }

  updateProject(param: { intro: string; name: string; id: string }): Promise<any> {
    return this.idb.updateRow('project', param);
  }
}
