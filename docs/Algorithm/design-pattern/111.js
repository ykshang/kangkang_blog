// 发布人原型
class Publisher {
  constructor() {
    this.subscribers = {}; // { eventType: [callback1, callback2, ...] }
  }

  subscribe(eventType, callback) {
    if (!this.subscribers[eventType]) {
      this.subscribers[eventType] = [];
    }
    this.subscribers[eventType].push(callback);
  }

  unsubscribe(eventType, callback) {
    if (this.subscribers[eventType]) {
      this.subscribers[eventType] = this.subscribers[eventType].filter(
        (cb) => cb !== callback
      );
    }
  }

  publish(eventType, data) {
    if (this.subscribers[eventType]) {
      this.subscribers[eventType].forEach((callback) => callback(data));
    }
  }
}

// 使用示例
const user1_pub = new Publisher(); // 发布者1
const user2_pub = new Publisher(); // 发布者2

// 订阅者函数1
const onMessageReceived1 = (data) => {
  console.log(`Received message: ${data}`);
};
// 订阅者2
const onMessageReceived2 = (data) => {
  console.log(`Received message: ${data}`);
};
// 订阅事件
user1_pub.subscribe("message", onMessageReceived1);
user1_pub.subscribe("message", onMessageReceived2);
user2_pub.subscribe("message", onMessageReceived1);
user2_pub.subscribe("message", onMessageReceived2);

// 发布事件
user1_pub.publish("message", "Hello, Pub-1-Sub!"); // 输出: Received message: Hello, Pub-Sub!
user2_pub.publish("message", "Hello, Pub-2-Sub!"); // 输出: Received message: Hello, Pub-Sub!

// 取消订阅
user1_pub.unsubscribe("message", onMessageReceived);
