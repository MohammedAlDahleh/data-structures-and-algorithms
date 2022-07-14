'use strict';
class Node {
    constructor(value) {
        this.value = value;
        this.children = [];
    }
}

class KaryTree {
    constructor(k) {
        this.root = null;
        this.k = k;
    }
}
function fizzBuzzTree(tree) {
    if (!tree.root) {
        return 'Empty Tree';
    }
    let current = tree.root;
    let traverse = (node) => {
        let value;
        if (node.value % 3 === 0 && node.value % 5 === 0) {
            value = 'FizzBuzz';
        } else if (node.value % 3 === 0) {
            value = 'Fizz';
        } else if (node.value % 5 === 0) {
            value = 'Buzz';
        } else {
            value = `${node.value}`;
        }
        const newnode = new Node(value);
        if (node.children.length) {
            console.log(node.children.length);
            for (let i = 0; i < node.children.length; i++) {
                newnode.children[i] = traverse(node.children[i])
            }
        }
        return newnode;
    };
    const newtree = new KaryTree(3);
    newtree.root = traverse(current);
    return newtree;
};
module.exports = {
    Node,
    KaryTree,
    fizzBuzzTree,
};
