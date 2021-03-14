import {Injectable} from '@angular/core';
import {ApiService} from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private api: ApiService) {
  }

  addProject(params): any {
    return this.api.addProject(params);
  }

  getProjectList(): Promise<any> {
    return this.api.getProjectList();
  }

  deleteProject(id: string): Promise<any> {
    return this.api.deleteProject(id);
  }

  getProject(id: string): Promise<any> {
    return this.api.getProject(id);
  }

  updateProject(param): Promise<any> {
    return this.api.updateProject(param);
  }

  addPerson(params): Promise<any> {
    return this.api.addPerson(params);
  }

  getPerson(id: string): Promise<any> {
    return this.api.getPerson(id);
  }

  getPersonList(pid: string): Promise<any> {
    return this.api.getPersonList(pid);
  }

  addAffair(param): Promise<any> {
    return this.api.addAffair(param);
  }

  getAffairList(pid: string): Promise<any> {
    return this.api.getAffairList(pid);
  }

  getSiteList(pid: string): Promise<any> {
    return this.api.getSiteList(pid);
  }

  addSite(param): Promise<any> {
    return this.api.addSite(param);
  }

  getSite(sid: string): Promise<any> {
    return this.api.getSite(sid);
  }

  removePerson(id: string): Promise<any> {
    return this.api.removePerson(id);
  }

  removeSite(id: string): Promise<any> {
    return this.api.removeSite(id);
  }

  updatePerson(param): Promise<any> {
    return this.api.updatePerson(param);
  }

  updateSite(param): Promise<any> {
    return this.api.updateSite(param);
  }

  deleteAffair(id: string): Promise<any> {
    return this.api.removeAffair(id);
  }

  updateAffair(param): Promise<any> {
    return this.api.updateAffair(param);
  }
}
