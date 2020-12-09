import {Component, OnInit} from '@angular/core';
import {Project} from '../../model/project';
import {ClientService} from '../../core/client/service/client.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  projectList: Project[];

  constructor(private client: ClientService,
              private router: Router,
              private route: ActivatedRoute) {
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
    this.router.navigate(['./put'], {queryParams: {id: p.id}, relativeTo: this.route});
  }

  check(p: Project): void {
    this.router.navigate(['project', p.id]);
  }
}
