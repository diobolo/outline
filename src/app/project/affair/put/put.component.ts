import {Component, OnInit} from '@angular/core';
import {ClientService} from '../../../core/client/service/client.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-put',
  templateUrl: './put.component.html',
  styleUrls: ['./put.component.scss']
})
export class PutComponent implements OnInit {
  name: string;
  content: string;
  result: string;
  impact: string;
  personIds: string;
  pid: string;
  personList: any[] = [];

  constructor(private client: ClientService,
              private route: ActivatedRoute) {
    this.pid = route.parent.parent.snapshot.params.id;
  }

  ngOnInit(): void {
    this.getPersonList(this.pid);
  }

  getPersonList(id): void {
    if (!id) {
      return;
    }
    this.client.getPersonList(id).then(res => {
      console.log(res);
      this.personList = res;
    });
  }

  submit(): void {
    if (!this.name) {
      console.log('请输入事件名称');
      return;
    }
    this.client.addAffair({
      name: this.name,
      content: this.content,
      result: this.result,
      impact: this.impact,
      personIds: this.personIds,
      pid: this.pid
    }).then(res => {
      console.log('添加成功');
    });
  }
}
