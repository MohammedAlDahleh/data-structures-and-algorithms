const Hashmap = require('./lib/hashmap')

const myhashmap = new Hashmap(10);

myhashmap.set('esam', '401d15 student')
myhashmap.set('ahmad', '401d15 student');
myhashmap.set('mohamad', '401d15 student');
myhashmap.set('samah', '401d15 student');
myhashmap.set('laith', '401d15 student');
myhashmap.set('shihab', '401d15 student');
// console.log('get :>>', myhashmap.get('esam'));
console.log('contains :>>', myhashmap.contains('essam'));
// console.log('contains :>>', myhashmap.keys('essam') );
console.log('keys :>>', myhashmap.keys());
// console.log('keys :>>', myhashmap.display());
// console.log(myhashmap.get("esam"));


myhashmap.map.forEach((ll) => {
        console.log(ll.print());
})