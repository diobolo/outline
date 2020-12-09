import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../../core/client/service/client.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-put',
  templateUrl: './put.component.html',
  styleUrls: ['./put.component.scss']
})
export class PutComponent implements OnInit {
  id: string;
  name: string;
  x: number;
  y: number;
  z: number;
  description: string;
  pid: string;

  constructor(private client: ClientService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.pid = this.route.parent.parent.snapshot.params.id;
    this.id = this.route.snapshot.queryParams.id;
    if (this.id) {
      this.getSite(this.id);
    }
  }

  getSite(sid): void {
    this.client.getSite(sid).then(res => {
      if (res) {
        this.id = res.id;
        this.name = res.name;
        this.x = res.x;
        this.y = res.y;
        this.z = res.z;
        this.description = res.description;
      }
    });
  }

  async submit(): Promise<any> {
    if (!this.name || !this.description) {
      console.log('请输入场所信息');
      return;
    }
    if (!this.id) {
      const res = await this.client.addSite({
        name: this.name,
        x: this.x,
        y: this.y,
        z: this.z,
        description: this.description,
        pid: this.pid
      });
      if (res) {
        history.back();
      }
    } else {
      const res = await this.client.updateSite({
        id: this.id,
        name: this.name,
        x: this.x,
        y: this.y,
        z: this.z,
        description: this.description,
        pid: this.pid
      });
      if (res) {
        history.back();
      }
    }

  }
}
