import {Component, OnInit} from '@angular/core';
import {ClientService} from '../core/client/service/client.service';
import {Project} from '../model/project';
import {Router} from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  projectList: Project[];

  constructor(private client: ClientService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getProjectList();
  }

  getProjectList(): void {
    this.client.getProjectList().then(res => {
      if (res && res.length) {
        this.projectList = res.map(p => new Project(p));
      }
    });
  }

  delete(p: Project): void {
    const flag = confirm('确定删除该项目吗?');
    if (flag) {
      this.client.deleteProject(p.id).then(res => {
        if (res) {
          this.getProjectList();
        }
      });
    }
  }

  update(p: Project): void {
    this.router.navigate(['project/put'], {queryParams: {id: p.id}});
  }
}
