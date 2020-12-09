export class Site {
  name: string;
  x: number;
  y: number;

  constructor(data) {
    this.name = data.name;
    this.x = data.x;
    this.y = data.y;
  }
}
