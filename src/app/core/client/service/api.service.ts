import {Injectable} from '@angular/core';
import {IdbService} from '../../idb/service/idb.service';
import {v4 as uuid4} from 'uuid';
import {UtilService} from '../../service/util.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private idb: IdbService,
              private util: UtilService) {

  }

  addProject(params: AddProject): any {
    const id = this.util.randomString();
    console.log('add', id);
    return this.idb.addRow('project', {id, ...params});
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
