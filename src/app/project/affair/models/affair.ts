
export class Affair {
  id: string;
  pid: string;  // 项目id
  name: string; // 事件名称
  content: string;  // 事件内容
  persons: Person[] = []; // 事件参与人
  result: string; // 事件结果
  impact: string; // 事件影响
  startTime: number;  // 开始时间
  endTime: number;  // 结束时间
  parentId: string; // 父事件id
  preId: string;  // 前置事件id
  postId: string; // 后置事件id
  x: number;  // 在视图上的横坐标
  y: number;  // 在视图上的纵坐标
  width: number; // 在视图上显示的长度
  height: number; // 在视图上显示的高度
  index: number;  // 发生于第几个时间单位

  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.content = data.content;
    this.result = data.result;
    this.impact = data.impact;
    this.startTime = data.startTime;
    this.endTime = data.endTime;
  }
}
