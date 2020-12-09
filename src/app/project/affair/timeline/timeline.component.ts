import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientService } from '../../../core/client/service/client.service';
import { Subject } from 'rxjs';
// import { throttleTime } from 'rxjs/operators';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit, OnDestroy {
  @ViewChild('view', { static: true }) view: ElementRef;
  // timeline: HTMLDivElement = document.querySelector('.timeline');
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  affairList: Affair[] = [];
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
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.getAffairList(this.pid).then(() => {
      this.resetView();
      this.draw();
      this.install();
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

  draw(): void {
    const width = this.canvas.width;
    const height = this.canvas.height;
    this.ctx.fillStyle = '#13627d';
    this.ctx.fillRect(0, 0, width, height);
    this.ctx.strokeStyle = 'white';
    this.ctx.lineWidth = 2;
    this.ctx.beginPath();
    this.ctx.moveTo(0, height * 0.55);
    this.ctx.lineTo(width, height * 0.55);
    this.ctx.closePath();
    this.ctx.arc(width * 0.5, height * 0.55, 5, 0, Math.PI * 2);
    this.ctx.stroke();
  }

  install(): void {
    const ctx = this.view.nativeElement.getContext('2d');
    ctx.drawImage(this.canvas, -(this.canvas.width / 3), -(this.canvas.height / 3));
  }

  getAffairList(pid): Promise<any> {
    if (!pid) {
      return;
    }
    return this.client.getAffairList(pid).then(res => {
      this.affairList = res;
      console.log(res);
    });
  }

  onResize(): void {
    this.subject.next();
  }

  resetView(): void {
    this.view.nativeElement.width = this.view.nativeElement.clientWidth * 2;
    this.view.nativeElement.height = this.view.nativeElement.clientHeight * 2;
    const styleWidth = this.view.nativeElement.clientWidth * 3;
    const styleHeight = this.view.nativeElement.clientHeight * 3;
    this.canvas.style.width = styleWidth + 'px';
    this.canvas.style.height = styleHeight + 'px';
    this.canvas.width = styleWidth * 2;
    this.canvas.height = styleHeight * 2;
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
