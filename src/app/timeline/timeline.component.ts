import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements AfterViewInit, OnInit, OnDestroy {
  @ViewChild('canvas') canvas: any;

  constructor() {
  }

  ngOnInit(): void {
    window.addEventListener('resize', this.onResize.bind(this));
  }

  ngOnDestroy(): void {
    window.removeEventListener('resize', this.onResize.bind(this));
  }

  onResize(): void {
    if (this.canvas) {
      this.canvas.nativeElement.width = document.body.clientWidth;
      this.canvas.nativeElement.height = document.body.clientHeight;
      this.redraw();
    }
  }

  ngAfterViewInit(): void {
    this.onResize();
  }

  redraw(): void {
    const ctx = this.canvas.nativeElement.getContext('2d');
    ctx.fillStyle = 'red';
    ctx.fillRect(0, 0, 500, 500);
  }
}
