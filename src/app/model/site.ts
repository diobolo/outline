export class Site {
  name: string;
  x: number;
  y: number;
  z: number;
  description: string;

  constructor(data) {
    this.name = data.name;
    this.x = data.x;
    this.y = data.y;
    this.description = data.description;
  }
}
