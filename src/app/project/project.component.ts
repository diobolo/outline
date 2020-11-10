import {Component, OnInit} from '@angular/core';
import {ClientService} from '../core/client/service/client.service';
import {Project} from '../model/project';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  projectList: Project[];

  constructor(private client: ClientService) {
  }

  ngOnInit(): void {
    this.client.getProjectList().then(res => {
      if (res && res.length) {
        this.projectList = res.map(p => new Project(p));
      }
    });
  }

}
