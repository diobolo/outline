import {Injectable} from '@angular/core';
import {IdbService} from '../../idb/service/idb.service';
import {UtilService} from '../../service/util.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private idb: IdbService,
              private util: UtilService) {

  }

  addProject(params: AddProject): any {
    params.id = this.util.randomString();
    return this.idb.addRow('project', params);
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

  addPerson(params: AddPerson): Promise<any> {
    const id = this.util.randomString();
    console.log('add person', id);
    params.id = id;
    return this.idb.addRow('person', params);
  }

  getPerson(id: string): Promise<any> {
    return this.idb.getRow('person', id);
  }

  getPersonList(pid: string): Promise<any> {
    return this.idb.indexAll('person', 'pid', pid);
  }
}
