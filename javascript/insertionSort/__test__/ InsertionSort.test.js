'use strict'
const insertionSort = require("../insertionSort");
describe(' insertion() ', () => {
    it('insertion Sort', () => {
        let array = [20, 18, 12, 8, 5, -2];
        expect(insertionSort(array)).toEqual([-2, 5, 8, 12, 18, 20]);
    });
})


// const sort = require('../index');

// describe('sort function()', () => {
//   it('sort()', () => {
//     let arr = [5, 3, 6, 1, 4, 2, 0, -1];
//     expect(sort(arr)).toEqual([-1, 0, 1, 2, 3, 4, 5, 6]);
//   });
