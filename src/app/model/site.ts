export class Site {
  id: string;
  name: string;
  x: number;
  y: number;
  z: number;
  description: string;

  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.x = data.x;
    this.y = data.y;
    this.z = data.z;
    this.description = data.description;
  }
}
