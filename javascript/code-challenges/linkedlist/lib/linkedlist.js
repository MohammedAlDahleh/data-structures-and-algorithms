'use strict'
const Node = require('./node');

class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
        this.tail = null;

    }
    add(value){
        this.head=new Node(value,this.head)
    }
    toInsert(value) {
        let newNode = new Node(value);
        if (this.head == null) {
            this.head = newNode;
            this.tail = newNode;

        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
         this.length++;
    }
    printAll() {
        let currentNode = this.head;
        while (currentNode) {
            console.log(currentNode.value);
            currentNode = currentNode.next;
        }
    }
    includeBoolean(value){
        let currentNode = this.head;
        while(currentNode){
            if (currentNode.value === value){
                return true;
            }
            currentNode = currentNode.next;
        }
        return false;
    }
    str(){ //"{ a } -> { b } -> { c } -> NULL"
        let currentNode = this.head;
        let shapeData= "";
        while(currentNode){
            shapeData += currentNode.value+"->";
            currentNode = currentNode.next;
        }
        return shapeData;
    }

}
let onLine = new LinkedList();
onLine.printAll();

module.exports = LinkedList;


