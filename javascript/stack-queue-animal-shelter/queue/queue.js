'use strict';
const Node = require('./node');

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.size = 0;
  }
  isEmpty() {
    if (this.front === null || this.size === 0) {
      return true;
    } else {
      return false;
    }
  }
  enqueue(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.front = newNode;
      this.rear = newNode;
      this.size += 1;
    } else {
      this.rear.next = newNode;
      this.rear = newNode;
      this.size++;
    }
  }
  dequeue() {
    if (this.isEmpty()) {
      return 'the queue is empty';
    } else {
      const temp = this.front;
      this.front = this.front.next;
      temp.next = null;
      this.size--;
      return temp.value;
    }
  }
  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.front.value;
  }
}
module.exports = Queue;