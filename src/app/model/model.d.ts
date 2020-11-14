declare interface Event {
  name: string;
  content: string;
  result: string;
  impact?: string;
  startTime: number;
  endTime?: number;
  personIds?: string[];
}

declare interface Person {
  name: string;
  gender: string;
  birthTime: number;
  deathTime?: number;
}

declare interface Location {
  name: string;
  x: number;
  y: number;
}

declare interface Project {
  id: string;
  name: string;
  intro: string;
}
