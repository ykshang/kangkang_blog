// 封装发布者原型
class Publisher {
  constructor(positon, name) {
    // 维护事件 和 订阅关系
    this.subscribers = {}; // { eventType: [john, kangkang, ...] }
    // 发布者的职位
    this.positon = positon;
    // 发布者的名字
    this.name = name;
  }

  // 负责添加新的订阅关系
  subscribe(eventType, receiver) {
    // 1. 如果事件不存在，创建新事件
    if (!this.subscribers[eventType]) {
      this.subscribers[eventType] = [];
    }
    // 2. 将订阅者关联到该事件上去
    this.subscribers[eventType].push(receiver);
    console.log(`【添加订阅】${this.positon} ${this.name} 接受了读者 ${receiver.name} 的订阅请求，成功！`);
  }

  // 负责删除订阅关系，将订阅者从该事件上移除
  unsubscribe(eventType, receiver) {
    if (this.subscribers[eventType]) {
      this.subscribers[eventType] = this.subscribers[eventType].filter(user => user !== receiver);
    }
    console.log(`【取消订阅】读者 ${receiver.name} 向 ${this.positon} ${this.name} 请求取消订阅，成功！`);
  }
  // 事件发布机制，如果指定事件存在，发布消息发给所有该事件的订阅者
  publish(eventType, message) {
    if (this.subscribers[eventType] && subscribeAction[eventType]) {
      this.subscribers[eventType].forEach((receiver) => subscribeAction[eventType](receiver, this.positon, this.name, message));
    }
  }
}

// 维护 事件 和 处理方式 的映射
let subscribeAction = {
  "notify": function (receiver, positon, publisher, message) {
    console.log(`【新通知】读者 ${receiver.name} 收到来自 ${positon} ${publisher} 的通知: ${message}`);
  },
};

class receiver {
  constructor(name) {
    this.name = name;
  }
}

// -------新增发布者 -------
const xiaoWang = new Publisher("送报员", "小王"); // 发布者 送报员 小王
const xiaoLi = new Publisher("图书管理员", "小李"); // 发布者 图书管理员 小李

// -------新增订阅者 -------
const john = new receiver("john"); // 读者 john

const kangkang = new receiver("kangkang");// 读者 kangkang

// -------添加订阅关系 -------
// 使用"subscribe" 作为事件名称 用来描述用户 订阅图书和报纸的行为
xiaoWang.subscribe("notify", john); // 送报员小王 接受了 john 报纸订阅请求
xiaoWang.subscribe("notify", kangkang); // 送报员小王 接受了 kangkang 报纸订阅请求
xiaoLi.subscribe("notify", john); // 图书管理员小李 接受了 john 图书订阅请求
xiaoLi.subscribe("notify", kangkang); // 图书管理员小李 接受了 kangkang 图书订阅请求
console.log('-------------------');


// -------发布事件 -------
// 小王通知所有人，新报纸到了
xiaoWang.publish("notify", "'Hello, 这是今天的报纸！'");
// 小李通知所有人，新图书到了
xiaoLi.publish("notify", "'Hello, 这是您定的杂志！'");
console.log('-------------------');

// -------取消订阅 -------
// john 向小王请求取消了报纸订阅
xiaoWang.unsubscribe("notify", john);
