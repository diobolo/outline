// 人物的模型
export class Person {
  id: string;
  name: string; // 人物名称
  gender: string; // 性别
  birthTime: number;  // 出生时间
  deathTime: number;  // 死亡时间

  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.gender = data.gender;
    this.birthTime = data.birthTime;
    this.deathTime = data.deathTime;
  }
}
