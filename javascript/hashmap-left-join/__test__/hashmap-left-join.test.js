'use strict';

const left_join = require('../hashmap-left-join');
const HashTable = require('../../hashtable/lib/hashTable');
describe("Join left hash map", () => {
    it("Returns the left map after joining the right map to it", () => {
      const left = new Map();
      left.set("diligent", "employed");
      left.set("fond", "enamored");
      left.set("guide", "usher");
      
      const right = new Map();
      right.set("diligent", "idle");
      right.set("fond", "averse");
      right.set("guide", "follow");
  
      expect(left_join(left, right)).toEqual(
        new Map([
          ["diligent", ["employed", "idle"]],
          ["fond", ["enamored", "averse"]],
          ["guide", ["usher", "follow"]],
        ])
      );
    });
})