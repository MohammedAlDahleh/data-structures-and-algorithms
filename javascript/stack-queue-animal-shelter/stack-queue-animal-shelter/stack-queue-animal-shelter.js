'use strict';
const Queue = require('../queue/queue');

module.exports = class AnimalShelter{
  constructor() {
    this.cat = new Queue();
    this.dog = new Queue();
  }
  enqueue(animal) {
    if(animal === 'cat') {
      return  this.cat.enqueue(animal)
    }else if(animal === 'dog') {
      this.dog.enqueue(animal)
    }else{
      return 'please enter your animal (cat / dogs):';
    }
  }
  dequeue(pref) {
    if (pref === 'cat') {
      if (!this.cat.isEmpty()) {
        this.cat.dequeue();
        return 'cat';
      }else return null;
    }else if(pref==='dog'){
      if(!this.dog.isEmpty){
        this.dog.dequeue('dog');
        return 'dog';
      }else return null;
    }else{
      return 'this shelter is only for cats and dogs';
    }
  }
};