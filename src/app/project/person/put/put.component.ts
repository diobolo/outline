import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ClientService} from '../../../core/client/service/client.service';

@Component({
  selector: 'app-put',
  templateUrl: './put.component.html',
  styleUrls: ['./put.component.scss']
})
export class PutComponent implements OnInit {
  id: string;
  name: string;
  gender: string;
  birthTime: string;
  pid: string;

  constructor(private route: ActivatedRoute,
              private client: ClientService) {
  }

  ngOnInit(): void {
    this.pid = this.route.parent.parent.snapshot.params.id;
    this.id = this.route.snapshot.queryParams.id;
    if (this.id) {
      this.getPerson(this.id);
    }
  }

  private getPerson(id: string): void {
    this.client.getPerson(id).then(res => {
      if (res) {
        this.id = res.id;
        this.name = res.name;
        this.gender = res.gender;
        this.birthTime = res.birthTime;
      }
    });
  }

  async submit(): Promise<any> {
    if (!this.name || !this.gender) {
      console.log('请输入人物信息');
      return;
    }
    if (!this.id) {
      const res = await this.client.addPerson({
        name: this.name,
        gender: this.gender,
        birthTime: this.birthTime,
        pid: this.pid
      });
      if (res) {
        history.back();
      }
    } else {
      const res = await this.client.updatePerson({
        id: this.id,
        name: this.name,
        gender: this.gender,
        birthTime: this.birthTime,
        pid: this.pid
      });
      if (res) {
        history.back();
      }
    }
  }
}
