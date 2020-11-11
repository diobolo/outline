import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ClientService} from '../../core/client/service/client.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  id: string;
  name: string;
  intro: string;

  constructor(private route: ActivatedRoute,
              private client: ClientService) {
  }

  ngOnInit(): void {
    if (this.route.snapshot.params.id) {
      this.getProductInfo(this.route.snapshot.params.id);
    }
  }

  getProductInfo(id): void {
    this.client.getProject(id).then(res => {
      console.log(res);
      if (res) {
        this.id = res.id;
        this.name = res.name;
        this.intro = res.intro;
      }
    });
  }

}
