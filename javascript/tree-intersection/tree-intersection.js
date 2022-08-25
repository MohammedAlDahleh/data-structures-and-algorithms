"use strict";

const HasTabe = require("../hashtable/lib/hashmap");

const treeIntersection = (bt1, bt2) => {
  let resultArr = [];
  const hashmap = new HasTabe(1024);
  let Tree1 = bt1.PreOrder();
  let Tree2 = bt2.PreOrder();

  for (let index = 0; index < Tree1.length; index++) {
    if (!hashmap.contains(Tree1[index].toString())) {
      hashmap.set(Tree1[index].toString(), Tree1[index]);
    }
  }
  for (let index = 0; index < Tree2.length; index++) {
    if (hashmap.contains(Tree2[index].toString())) {
      resultArr.push(Tree2[index]);
    }
  }

  return resultArr.length ? resultArr : "no common values";
};

module.exports = treeIntersection;