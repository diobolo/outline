import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ClientService} from '../../../core/client/service/client.service';
import {Subject} from 'rxjs';
import {debounce, debounceTime, throttleTime} from 'rxjs/operators';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit, OnDestroy {
  @ViewChild('canvas', {static: true}) canvas: ElementRef;
  ctx: CanvasRenderingContext2D;
  eventList: Event[] = [];
  subject: Subject<any> = new Subject<any>();
  pid: string;
  view = {
    x: 0,
    y: 0
  };

  constructor(private route: ActivatedRoute,
              private client: ClientService) {
    this.pid = route.parent.parent.snapshot.params.id;
  }

  ngOnInit(): void {
    this.getEventList(this.pid);
    window.addEventListener('resize', this.onResize.bind(this));
    this.subject.pipe(throttleTime(100)).subscribe(() => {
      this.resetView();
    });
    this.ctx = this.canvas.nativeElement.getContext('2d');
    this.resetView();
  }

  ngOnDestroy(): void {
    window.removeEventListener('resize', this.onResize);
    this.subject.unsubscribe();
    this.subject = null;
  }

  draw(): void {
    this.ctx.fillStyle = 'lightseagreen';
    this.ctx.fillRect(0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height);
    this.ctx.strokeStyle = 'white';
    this.ctx.lineWidth = 2;
    this.ctx.beginPath();
    this.ctx.moveTo(0, this.canvas.nativeElement.height / 2);
    this.ctx.lineTo(this.canvas.nativeElement.width, this.canvas.nativeElement.height / 2);
    this.ctx.closePath();
    this.ctx.stroke();
  }

  getEventList(pid): void {
    if (!pid) {
      return;
    }
    this.client.getEventList(pid).then(res => {
      this.eventList = res;
    });
  }

  onResize(): void {
    this.subject.next();
  }

  resetView(): void {
    this.canvas.nativeElement.width = this.canvas.nativeElement.clientWidth;
    this.canvas.nativeElement.height = this.canvas.nativeElement.clientHeight;
    this.draw();
  }

}
