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

  async updateProject(param: { intro: string; name: string; id: string }): Promise<any> {
    return this.api.updateProject(param);
  }
}
