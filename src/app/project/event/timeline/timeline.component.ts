import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ClientService} from '../../../core/client/service/client.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {
  eventList: Event[] = [];
  pid: string;

  constructor(private route: ActivatedRoute,
              private client: ClientService) {
    this.pid = route.parent.parent.snapshot.params.id;
  }

  ngOnInit(): void {
    this.getEventList(this.pid);
  }

  getEventList(pid): void {
    if (!pid) {
      return;
    }
    this.client.getEventList(pid).then(res => {
      this.eventList = res;
    });
  }

}
