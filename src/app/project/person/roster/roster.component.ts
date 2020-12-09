import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ClientService} from '../../../core/client/service/client.service';

@Component({
  selector: 'app-roster',
  templateUrl: './roster.component.html',
  styleUrls: ['./roster.component.scss']
})
export class RosterComponent implements OnInit {
  pid: string;
  personList: Person[] = [];

  constructor(private client: ClientService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.pid = this.route.parent.parent.snapshot.params.id;
    this.getPersonList(this.pid);
  }

  getPersonList(id: string): void {
    this.client.getPersonList(id).then(res => {
      this.personList = res;
    });
  }

  delete(p: Person): void {
    const conf = confirm('您确定要删除这个人物吗?');
    if (!conf) {
      return ;
    }
    this.client.removePerson(p.id).then(() => {
      this.getPersonList(this.pid);
    });
  }
}
