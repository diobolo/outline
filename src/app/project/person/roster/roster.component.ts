import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ClientService} from '../../../core/client/service/client.service';

@Component({
  selector: 'app-roster',
  templateUrl: './roster.component.html',
  styleUrls: ['./roster.component.scss']
})
export class RosterComponent implements OnInit {
  personList: any[] = [];

  constructor(private client: ClientService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.getPersonList(this.route.parent.parent.snapshot.params.id);
  }

  getPersonList(id: string): void {
    this.client.getPersonList(id).then(res => {
      this.personList = res;
    });
  }

}
