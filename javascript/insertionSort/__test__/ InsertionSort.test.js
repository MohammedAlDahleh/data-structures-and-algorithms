'use strict'
const insertionSort = require("../insertionSort");
describe(" insertion Sort ", () => {
    it("insertion Sort", () => {
        expect(insertionSort([20, 18, 12, 8, 5, -2])).toBeEqual([-2, 5, 8, 12, 18, 20]);
    })
})