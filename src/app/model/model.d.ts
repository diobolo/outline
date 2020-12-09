declare interface Affair {
  id: string;
  name: string;
  content: string;
  result: string;
  impact?: string;
  startTime: number;
  endTime?: number;
  personIds?: string[];
}

declare interface Person {
  id: string;
  name: string;
  gender: string;
  birthTime: number;
  deathTime?: number;
}

declare interface Site {
  id: string;
  name: string;
  x: number;
  y: number;
  z: number;
  description: string;
}

declare interface Project {
  id: string;
  name: string;
  intro: string;
}
