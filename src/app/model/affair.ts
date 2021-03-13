// 事件的模型
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

  constructor(data) {
    this.name = data.name;
    this.content = data.content;
    this.result = data.result;
    this.impact = data.impact;
    this.startTime = data.startTime;
    this.endTime = data.endTime;
  }
}
