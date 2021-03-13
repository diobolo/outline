// 地点的模型
export class Site {
  id: string;
  name: string; // 地点名称
  x: number;  // 横坐标
  y: number;  // 纵坐标
  z: number;  // 高度
  description: string;  // 描述

  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.x = data.x;
    this.y = data.y;
    this.z = data.z;
    this.description = data.description;
  }
}
