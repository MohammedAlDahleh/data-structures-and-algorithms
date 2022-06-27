'use strict';
const AnimalShelter  = require('./stack-queue-animal-shelter/stack-queue-animal-shelter');


const animal=new AnimalShelter ();
animal.enqueue('cat');
animal.enqueue('cat');
animal.enqueue('dog');
animal.enqueue('dog');
animal.enqueue('ggg');
console.log(animal.dequeue('cat'));
console.log(animal.dequeue('catss'));
console.log(animal.dequeue('cat'));
console.log(animal.dequeue('cat'));

console.log(animal);