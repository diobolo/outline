export class Event {
  name: string;
  content: string;
  persons: Person[] = [];
  result: string;
  impact: string;
  startTime: number;
  endTime: number;
  constructor(data) {
    this.name = data.name;
    this.content = data.content;
    this.result = data.result;
    this.impact = data.impact;
    this.startTime = data.startTime;
    this.endTime = data.endTime;
  }
}
