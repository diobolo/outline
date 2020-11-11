import {Component, OnInit} from '@angular/core';
import {ClientService} from '../../core/client/service/client.service';
import {ActivatedRoute, ActivatedRouteSnapshot, Router} from '@angular/router';

@Component({
  selector: 'app-put',
  templateUrl: './put.component.html',
  styleUrls: ['./put.component.scss']
})
export class PutComponent implements OnInit {
  id: string;
  name: string;
  intro: string;

  constructor(private client: ClientService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    if (this.route.snapshot.queryParams.id) {
      this.getProjectInfo(this.route.snapshot.queryParams.id);
    }
  }

  getProjectInfo(id): void {
    this.client.getProject(id).then(res => {
      if (res) {
        this.id = res.id;
        this.name = res.name;
        this.intro = res.intro;
      }
    });
  }

  async submit(): Promise<void> {
    if (!this.name || !this.intro) {
      console.log('请输入作品信息');
      return;
    }
    if (!this.id) {
      const res = await this.client.addProject({name: this.name, intro: this.intro});
      console.log(res);
      if (res) {
        history.back();
      }
    } else {
      const res = await this.client.updateProject({
        id: this.id,
        name: this.name,
        intro: this.intro
      });
      console.log(res);
      if (res) {
        history.back();
      }
    }
  }
}
