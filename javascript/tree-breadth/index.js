'use strict';

const breadthFirst = require('./tree-breadth/breadth');
const BinaryTree = require('./tree-breadth/binary');


let tree = new BinaryTree();

tree.Add(1);
tree.Add(2);
tree.Add(3);
tree.Add(4);
tree.Add(5);
tree.Add(6);
tree.Add(7);
tree.Add(8);
tree.Add(9);   

console.log(breadthFirst(tree));