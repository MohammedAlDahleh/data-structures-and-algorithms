'use strict';

const Node = require('./node');
const { BinaryTree, BinaryTreeSearch } = require('./Binary-Tree/binary-tree');

let tree = null;

let one = new Node(1);
let two = new Node(2);
let three = new Node(3);
let four = new Node(4);
let five = new Node(5);
let six = new Node(6);
let seven = new Node(7);
let eight = new Node(8);
let nine = new Node(9);

one.left = two;
one.right = three;
two.left = six;
six.right = seven;
seven.left = eight;
seven.right = nine;
three.left = four;
three.right = five;

tree = new BinaryTree(one);

let preOrder = tree.PreOrder();
console.log('pre order: ', preOrder);
//pre order > 1 , 2 , 6 , 7 , 8 , 9 , 3 , 4 , 5

let inOrder = tree.InOrder();
console.log('in order: ', inOrder);
//pre order > 6 , 8 , 7 , 9 , 2 , 1 , 4 , 3 , 5


let postOrder = tree.PostOrder();
console.log('post order: ', postOrder);
//pre order > 8 , 9 , 7 , 6 , 2 , 4 , 5 , 3 , 1

let BTS = new BinaryTreeSearch();

BTS.Add(9);
BTS.Add(13);
BTS.Add(7);
BTS.Add(19);
BTS.Add(32);
BTS.Add(1);
BTS.Add(5);

console.log(BTS.Contains(7));
console.log(BTS.Contains(13));
console.log(BTS.Contains(20));

console.log('************************');
console.log(tree.Max());
console.log(BTS.Max());
console.log('************************');