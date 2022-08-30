const HashTable = require('../hashtable/lib/hashTable');

function left_join(leftHashMap, rightHashMap) {
  for(let [key, value] of leftHashMap) {
    console.log(value)
    let rightValue = null
    rightHashMap.has(key) ? rightValue = rightHashMap.get(key) : null
    leftHashMap.set(key, [value, rightValue])
  }
  return leftHashMap
}

module.exports = left_join;