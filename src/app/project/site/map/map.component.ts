import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../../core/client/service/client.service';
import { ActivatedRoute } from '@angular/router';
import { Site } from '../../../model/site';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  pid: string;
  siteList: Site[] = [];
  constructor(private client: ClientService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.pid = this.route.parent.parent.snapshot.params.id;
    this.getSiteList(this.pid);
  }

  getSiteList(pid): void {
    this.client.getSiteList(pid).then(res => {
      if (res && res.length) {
        this.siteList = res.map(s => new Site(s));
      }
    });
  }

  delete(site: Site): void {
    const conf = confirm('您确定要删除该场所吗?');
    if (!conf) {
      return;
    }
    this.client.removeSite(site.id).then(() => {
      this.getSiteList(this.pid);
    });
  }
}
