const Stack = require('../stack/stack');

class pseudoqueue{
    constructor(){
        this.stack1=new Stack();
        this.stack2=new Stack();
    }
    enqueue(value) {
        this.stack1.push(value);
        return  this.stack1.peek();
    }
    dequeue() {
        if(this.stack2.length===0){
            if(this.stack1.length===0){
                return "Queue is empty, cannot dequeue";
            }
            while(this.stack1.length > 0){
                this.stack2.push(this.stack1.pop())
            }
        }
        return this.stack2.pop()
    }
}
module.exports = pseudoqueue;