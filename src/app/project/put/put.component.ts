import {Component, OnInit} from '@angular/core';
import {ClientService} from '../../core/client/service/client.service';

@Component({
  selector: 'app-put',
  templateUrl: './put.component.html',
  styleUrls: ['./put.component.scss']
})
export class PutComponent implements OnInit {
  name: string;
  intro: string;

  constructor(private client: ClientService) {
  }

  ngOnInit(): void {
  }

  async submit(): Promise<void> {
    if (!this.name || !this.intro) {
      console.log('请输入作品信息');
      return;
    }
    const res = await this.client.addProject({name: this.name, intro: this.intro});
    console.log(res);
  }
}
