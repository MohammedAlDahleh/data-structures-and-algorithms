'use strict'
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let curr = arr[i];
        let j = i - 1;

        while (j >= 0 && curr < arr[j]) {
            arr[j + 1] = arr[j]
            j--;
        }
        arr[j + 1] = curr;
    }
    return arr;
}
module.export = insertionSort;