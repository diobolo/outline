declare interface Event {
  name: string;
  content: string;
  result: string;
  impact?: string;
  startTime: number;
  endTime?: number;
  persons?: Person[];
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

