export class Person {
  id: string;
  name: string;
  gender: string;
  birthTime: number;
  deathTime: number;

  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.gender = data.gender;
    this.birthTime = data.birthTime;
    this.deathTime = data.deathTime;
  }
}
