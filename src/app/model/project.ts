export class Project {
  id: string;
  name: string;
  intro: string;

  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.intro = data.intro;
  }
}
