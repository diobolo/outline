import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ClientService} from '../../../core/client/service/client.service';
import {Subject} from 'rxjs';

const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit, OnDestroy {
  @ViewChild('view', {static: true}) view: ElementRef;
  // timeline: HTMLDivElement = document.querySelector('.timeline');
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  affairList: Affair[] = [];
  subject: Subject<any> = new Subject<any>(); // window resize
  pid: string;
  long = 50; // 当前时间轴的长度，long * scale = 当前浏览的时间跨度
  scale = 3;  // 1：年 2：月 3：日 4：时
  step = 100; // 每个时间单位在视图上显示的长度，单位px
  focus = 0; // 当前聚焦于哪个时间点，默认聚焦于故事开始时间

  constructor(private route: ActivatedRoute,
              private client: ClientService) {
    this.pid = route.parent.parent.snapshot.params.id;
  }

  ngOnInit(): void {
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.getAffairList(this.pid).then(() => {
      this.resetView();
      // this.createImage();
      // this.install();
    });
    // window.addEventListener('resize', this.onResize.bind(this));
    // this.subject.pipe(throttleTime(100)).subscribe(() => {
    //   this.resetView();
    //   this.draw();
    //   this.install();
    // });
  }

  ngOnDestroy(): void {
    window.removeEventListener('resize', this.onResize);
    this.subject.unsubscribe();
    this.subject = null;
  }

  back(): void {
    if (this.focus <= 0) {
      return;
    }
    this.focus--;
    this.install();
  }

  forward(): void {
    this.focus++;
    this.install();
  }

  extend(length = 1): void {
    this.long += length;
  }

  createImage(): void {
    // const width = this.canvas.width;
    // const height = this.canvas.height;
    const width = this.long * this.step;
    const height = this.view.nativeElement.height;
    this.canvas.style.width = width + 'px';
    this.canvas.style.height = height + 'px';
    this.canvas.width = width;
    this.canvas.height = height;
    this.ctx.fillStyle = '#13627d';
    this.ctx.fillRect(0, 0, width, height);
    this.ctx.strokeStyle = 'white';
    this.ctx.lineWidth = 1;
    this.ctx.beginPath();
    this.ctx.moveTo(0, height * 0.55);
    this.ctx.lineTo(width, height * 0.55);
    this.ctx.closePath();
    // this.ctx.arc(0, height * 0.55, 5, 0, Math.PI * 2);
    this.ctx.stroke();
    this.drawDate();
    this.drawAffairs();
  }

  drawDate(): void {
    this.ctx.fillStyle = 'white';
    this.ctx.font = 'normal 14px 黑体';
    for (let i = 0; i < this.long; i++) {
      this.ctx.fillText(String(i), i * this.step, this.canvas.height * 0.58);
    }
  }

  drawAffairs(): void {
    const attachedList = [];
    for (const affair of this.affairList) {
      this.ctx.fillStyle = 'green';
      const startTime = Number(affair.startTime);
      const endTime = Number(affair.endTime);
      const long = Math.floor(startTime / 86400);
      console.log(long);
      attachedList[long] = attachedList[long] + 1 || 1;
      console.log(attachedList);
      const x = startTime / 86400 * this.step;
      const y = this.canvas.height * 0.55 - attachedList[long] * 30 + 10;
      const width = Math.max(endTime - startTime, 3600) / 86400 * this.step;
      this.ctx.fillRect(x, y, width, 10);
      this.ctx.fillStyle = 'white';
      this.ctx.font = 'normal 14px 黑体';
      const name = affair.name.substr(0, 4);
      this.ctx.fillText(name, x, y - 3);
    }
  }

  install(): void {
    const ctx = this.view.nativeElement.getContext('2d');
    ctx.fillRect(0, 0, this.view.nativeElement.width, this.view.nativeElement.height);
    ctx.drawImage(this.canvas, -this.focus * this.step, 0);
  }

  getAffairList(pid): Promise<any> {
    if (!pid) {
      return;
    }
    return this.client.getAffairList(pid).then(res => {
      this.affairList = res;
    });
  }

  onResize(): void {
    this.subject.next();
  }

  resetView(): void {
    this.view.nativeElement.width = this.view.nativeElement.clientWidth;
    this.view.nativeElement.height = this.view.nativeElement.clientHeight;
    this.createImage();
    this.install();
  }

  onClick(event): void {
    // console.log('on click');
    console.log(event);
  }
}
