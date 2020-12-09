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
    if (this.route.snapshot.params.id) {
      this.getSite(this.route.snapshot.params.id);
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

  submit(): void {
    this.client.addSite({ name: this.name, x: this.x, y: this.y, z: this.z, description: this.description, pid: this.pid }).then(res => {
      console.log(res);
      history.back();
    });
  }
}
