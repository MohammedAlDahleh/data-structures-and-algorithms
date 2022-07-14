'use strict'
const { Node, KaryTree, fizzBuzzTree } = require('./fizz-buzz');

let tree = new KaryTree(3);

let n1 = new Node(10);
let n2 = new Node(3);
let n3 = new Node(5);
let n4 = new Node(8);
let n5 = new Node(15);
let n6 = new Node(7);
let n7 = new Node(25);
let n8 = new Node(14);
let n9 = new Node(9);
let n10 = new Node(18);
let n11 = new Node(30);
let n12 = new Node(1);

tree.root = n1;


n1.children = [n2, n3];
n2.children = [n4, n5, n6];
n3.children = [n8, n9];
n5.children = [n7];
n8.children = [n10, n11, n12];


let fizzbTree = fizzBuzzTree(tree);
let node2 = fizzbTree.root.children[0];
let node3 = fizzbTree.root.children[1];
let node4 = node2.children[0];
let node5 = node2.children[1];
let node6 = node2.children[2];
let node7 = node5.children[0];
let node8 = node3.children[0];
let node9 = node3.children[1];
let node10 = node8.children[0];
let node11 = node8.children[1];
let node12 = node8.children[2];

console.log('testTree.root.value:', tree.root.value);
console.log('n2.value:', n2.value);
console.log('n3.value:', n3.value);
console.log('n4.value:', n4.value);
console.log('n5.value:', n5.value);
console.log('n6.value:', n6.value);
console.log('n7.value:', n7.value);
console.log('n8.value:', n8.value);
console.log('n9.value:', n9.value);
console.log('n10.value:', n10.value);
console.log('n11.value:', n11.value);
console.log('n12.value:', n12.value);


console.log('Test Fizz-Buzz function');

console.log('fizzbTree.root.value:', fizzbTree.root.value);
console.log('node2.value:', node2.value);
console.log('node3.value:', node3.value);
console.log('node4.value:', node4.value);
console.log('node5.value:', node5.value);
console.log('node6.value:', node6.value);
console.log('node7.value:', node7.value);
console.log('node8.value:', node8.value);
console.log('node9.value:', node9.value);
console.log('node10.value:', node10.value);
console.log('node11.value:', node11.value);
console.log('node12.value:', node12.value);