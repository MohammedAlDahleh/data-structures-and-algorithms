'use strict'
const Hashmap = require('../lib/hashmap')

const hashMap=new Hashmap(10);

describe('Hash Table test',()=>{
test('Setting a key/value to your hashtable results in the value being in the data structure', () => {
  hashMap.set('hi','hello');
  expect(hashMap.get('hi')).toEqual([{hi:'hello'}])
});
test('Retrieving based on a key returns the value stored',()=>{
    expect(hashMap.get('hi')).toStrictEqual([{hi:'hello'}])
})
test('Successfully returns null for a key that does not exist in the hashtable',()=>{
    expect(hashMap.get('asdasd')).toEqual(null);
});
it('Successfully handle a collision within the hashtable',()=>{
    hashMap.set('Esam', '401d15 student');
    hashMap.set('Samah', '401d15 student');
    expect(hashMap.get('Esam')).toEqual([{ Esam: '401d15 student' }, { Samah: '401d15 student' }]);
})
it('Successfully retrieve a value from a bucket within the hashtable that has a collision',()=>{
    hashMap.set('Ahmad', '401d15 student');
    hashMap.set('Mohamad', '401d15 student');
    hashMap.set('Laith', '401d15 student');
    hashMap.set('Shihab', '401d15 student');
    expect(hashMap.get('Ahmad')).toEqual([{ Ahmad: '401d15 student' }, { Mohamad: '401d15 student' }]);
  });
  it('Successfully hash a key to an in-range value',()=>{
    hashMap.set('hi','hello');
    expect(hashMap.hash('hi')).toBeLessThan(10);
})
})