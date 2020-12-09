import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientService } from '../../../core/client/service/client.service';
import { Subject } from 'rxjs';
import { debounce, debounceTime, throttleTime } from 'rxjs/operators';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit, OnDestroy {
  @ViewChild('view', { static: true }) view: ElementRef;
  // timeline: HTMLDivElement = document.querySelector('.timeline');
  canvas = document.createElement('canvas');
  ctx = this.canvas.getContext('2d');
  eventList: Event[] = [];
  subject: Subject<any> = new Subject<any>(); // window resize
  pid: string;
  offset = {
    x: 0,
    y: 0
  };
  scale = 100;  // 表示每单位显示多少小时的内容, 每单位长度暂定100px

  constructor(private route: ActivatedRoute,
              private client: ClientService) {
    this.pid = route.parent.parent.snapshot.params.id;
  }

  ngOnInit(): void {
    this.getEventList(this.pid).then(() => {
      this.resetView();
      this.draw();
      this.install();
    });
    // window.addEventListener('resize', this.onResize.bind(this));
    // this.subject.pipe(throttleTime(100)).subscribe(() => {
    //   this.resetView();
    // });
    // this.ctx = this.canvas.getContext('2d');
  }

  ngOnDestroy(): void {
    window.removeEventListener('resize', this.onResize);
    this.subject.unsubscribe();
    this.subject = null;
  }

  draw(): void {
    const width = this.canvas.width;
    const height = this.canvas.height;
    this.ctx.strokeStyle = 'white';
    this.ctx.lineWidth = 2;
    this.ctx.beginPath();
    this.ctx.moveTo(0, height / 2);
    this.ctx.lineTo(width, height / 2);
    this.ctx.closePath();
    this.ctx.arc(width / 2, height / 2, 5, 0, Math.PI * 2);
    this.ctx.stroke();
  }

  install(): void {
    const ctx = this.view.nativeElement.getContext('2d');
    ctx.drawImage(this.canvas, -(this.canvas.width / 3), -(this.canvas.height / 3));
  }

  getEventList(pid): Promise<any> {
    if (!pid) {
      return;
    }
    return this.client.getAffairList(pid).then(res => {
      this.eventList = res;
    });
  }

  onResize(): void {
    this.subject.next();
  }

  resetView(): void {
    // console.log(this.timeline);
    this.canvas.width = this.view.nativeElement.clientWidth * 3;
    this.canvas.height = this.view.nativeElement.clientHeight * 3;
    // this.draw();
  }

  onMousedown(e: any): void {
    // e.target.offsetX = e.offsetX - this.offset.x;
  }

  onMousemove(e): void {
    // if (e.target.offsetX) {
    //   this.offset.x = e.offsetX - e.target.offsetX;
    //   this.draw();
    // }
  }

  onMouseup(e: any): void {
    // e.target.offsetX = 0;
  }

  onMousewheel(e): void {
    // if (e.wheelDelta < 0) {
    //   this.scale++;
    // } else {
    //   this.scale--;
    // }
  }
}
