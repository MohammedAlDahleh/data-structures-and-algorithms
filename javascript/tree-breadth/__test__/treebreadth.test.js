'use strict';

const breadthFirst = require('../tree-breadth/breadth');
const BinaryTree = require('../tree-breadth/binary');

describe('Breadth First Test', () => {
    test('create binary tree', () => {
        const tree = new BinaryTree();
        expect(tree).toBeInstanceOf(BinaryTree);
    });
    test('add value to tree', () => {
        const tree = new BinaryTree();
        tree.Add(1);
        expect(tree.root.value).toBe(1);
    })
    test('Traverse the input tree', () => {
        const tree = new BinaryTree();
        tree.Add(1);
        tree.Add(2);
        tree.Add(3);
        tree.Add(4);
        tree.Add(5);
        tree.Add(6);
        tree.Add(7);
        tree.Add(8);
        tree.Add(9);
        expect(breadthFirst(tree)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])
    });
});