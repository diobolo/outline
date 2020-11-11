import {Component, OnInit} from '@angular/core';
import {Project} from '../../model/project';
import {ClientService} from '../../core/client/service/client.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  projectList: Project[];

  constructor(private client: ClientService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getProjectList();
  }

  getProjectList(): void {
    this.client.getProjectList().then(res => {
      if (res) {
        this.projectList = res.map(p => new Project(p));
      }
    });
  }

  delete(p: Project): void {
    const flag = confirm('确定删除该项目吗?');
    if (flag) {
      this.client.deleteProject(p.id).then(res => {
        console.log('on delete', res);
        if (res) {
          this.getProjectList();
        }
      });
    }
  }

  update(p: Project): void {
    this.router.navigate(['project/put'], {queryParams: {id: p.id}});
  }

  check(p: Project): void {
    this.router.navigate(['project', p.id]);
  }
}
