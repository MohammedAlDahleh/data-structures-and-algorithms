class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}


module.exports = class Stack {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    push(data) {
        let node = new Node(data);
        if (this.head == null) {
            this.head = node;
            this.size++
        }
        else {
            node.next = this.head;
            this.head = node;
            this.size++
        }
    }
    pop() {
        if (this.head == null) {
            return null
        }
        else {
            let temp = this.head.data
            this.head = this.head.next
            this.size--
            return temp
        }
    }
    print() {
        let curent = this.head;
        let arrPrint = []
        while (curent) {
            arrPrint.push(`${curent.data}->`)
            curent = curent.next;
        }
        return console.log(arrPrint)
    }

    brackets(str) {
        str = str.split("");
        let list = new Stack()
        if (str.length < 2) {
            return false;
        }
        if (str.includes("]") || str.includes("}") || str.includes(")")) {
            for (let i = 0; i < str.length; i++) {
                if (str[i]==='['||str[i]==='{'||str[i]==='('){
                    list.push(str[i])
                }
                if (str[i]===']'||str[i]==='}'||str[i]===')'){
                    if(str[i]===")"){
                        if(list.pop()!=='('){return false;}
                    }
                    if(str[i]==="}"){
                        if(list.pop()!=='{'){return false;}
                    }
                    if(str[i]==="]"){
                        if(list.pop()!=='['){return false;}
                    }
                }
            }
            return true;
        }
        return false;
    }

}