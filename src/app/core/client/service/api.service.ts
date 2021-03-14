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

  updateProject(param): Promise<any> {
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

  addAffair(params: any): Promise<any> {
    const id = this.util.randomString();
    console.log('add affair', id);
    params.id = id;
    return this.idb.addRow('affair', params);
  }

  getAffairList(pid: string): Promise<any> {
    return this.idb.indexAll('affair', 'pid', pid);
  }

  getSiteList(pid: string): Promise<any> {
    return this.idb.indexAll('site', 'pid', pid);
  }

  addSite(params: any): Promise<any> {
    const id = this.util.randomString();
    console.log('add site', id);
    params.id = id;
    return this.idb.addRow('site', params);
  }

  getSite(sid: string): Promise<any> {
    return this.idb.getRow('site', sid);
  }

  removePerson(id: string): Promise<any> {
    return this.idb.deleteRow('person', id);
  }

  removeSite(id: string): Promise<any> {
    return this.idb.deleteRow('site', id);
  }

  updatePerson(param: any): Promise<any> {
    return this.idb.updateRow('person', param);
  }

  updateSite(param: any): Promise<any> {
    return this.idb.updateRow('site', param);
  }

  removeAffair(id): Promise<any> {
    return this.idb.deleteRow('affair', id);
  }

  updateAffair(param): Promise<any> {
    return this.idb.updateRow('affair', param);
  }
}
