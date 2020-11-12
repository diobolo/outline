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
  birth: string;
  pid: string;

  constructor(private route: ActivatedRoute,
              private client: ClientService) {
  }

  ngOnInit(): void {
    this.pid = this.route.parent.parent.snapshot.params.id;
    if (this.route.snapshot.params.id) {
      this.getPerson(this.route.snapshot.params.id);
    }
  }

  private getPerson(id: string): void {
    this.client.getPerson(id).then(res => {
      if (res) {
        this.id = res.id;
        this.name = res.name;
        this.gender = res.gender;
        this.birth = res.birth;
      }
    });
  }

  submit(): void {
    this.client.addPerson({
      name: this.name,
      gender: this.gender,
      birth: this.birth,
      pid: this.pid
    }).then(res => {
      if (res) {
        console.log('添加成功');
      }
    });
  }
}
