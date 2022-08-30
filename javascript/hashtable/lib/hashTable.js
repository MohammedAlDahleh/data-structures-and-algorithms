'use strick'
const LinkedList = require('./linkedlist');
class HashTable {
    constructor(size) {
        this.size = size;
        this.map = new Array(size);
    }

    hash(key) {
        const ascicodesum = key
            .split("")
            .reduce((acc, cur) => {
                return acc + cur.charCodeAt(0);
            }, 0)
        const multiPrime = ascicodesum * 599;
        const theIndex = multiPrime % this.size;
        return theIndex;
    }

    get(key) {
        let index = this.hash(key)
        if (!this.map[index]) {
            return null;
        }
        return this.map[index].print()
    }
    contains(key) {
        let index = this.hash(key);
        if (!this.map[index]) {
            return false;
        }
        return true;
        
    }
   
    set(key, value) {
        let index = this.hash(key);
        let bucket = { [key]: value }
        if (!this.map[index]) {
            this.map[index] = new LinkedList();
        }
        this.map[index].append(bucket);
    }
    keys(){
        let allKeys=[];
        this.map.forEach((cur)=>{
            allKeys.push(Object.keys(cur.head.value)[0])
            if(cur.head.next!==null){
                allKeys.push(Object.keys(cur.head.next.value)[0])
                // console.log((cur.head.next.value));
            }
        })
        return allKeys
    }
    // get(key) {
    //     const target = this.hash(key);
    //     return this.map[target];
    //   }
    
}




module.exports = HashTable;