'use strict';
const Node = require('../node');
class BinarySearchTree {
  constructor() {
    // root of a binary search tree
    this.root = null;
  }

  Add(value) {
    let cur = this.root;
    if (!cur) {
      this.root = new Node(value);
    }
    else {
      while (cur) {
        if (value < cur.value) {
          if (!cur.left) {
            cur.left = new Node(value);
            break;
          }
          cur = cur.left;
        }
        else {
          if (!cur.right) {
            cur.right = new Node(value);
            break;
          }
          cur = cur.right;
        }
      }
    }
  }

  Contains(value) {
    let cur = this.root;
    while (cur) {
      if (value < cur.value) {
        cur = cur.left;
      } else if (value > cur.value) {
        cur = cur.right;
      } else {
        return true;
      }
    }
    return false;
  }
}

module.exports = BinarySearchTree;
