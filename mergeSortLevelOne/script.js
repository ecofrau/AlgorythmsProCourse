function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr; //ubrala array wich consisits from less than 1 or 1 element
     }

    const mid = Math.floor(arr.length / 2); //middle point
    const leftHalf = mergeSort(arr.slice(0, mid)); // recurse left part of array
    const rightHalf = mergeSort(arr.slice(mid)); // recurse right side

    return merge(leftHalf, rightHalf); // put together left and right side
}

function merge(left, right) {
    const sortedArray = [];
    let i = 0; 
    let j = 0;

    //2 arrays in sorted array
    while (i < left.length && j < right.length) {
        if (left[i] > right[j]) { // compare elements in sorting from less to more
            sortedArray.push(left[i]);
            i++;
        } else {
            sortedArray.push(right[j]);
            j++;
        }
    }

    // put what we have in
    while (i < left.length) {
        sortedArray.push(left[i]);
        i++;
    }

    while (j < right.length) {
        sortedArray.push(right[j]);
        j++;
    }

    return sortedArray; // we have now array that is sorted

}

// example
const scores = [13, 8, 1, 9, 4, 2, 7, 6, 5];
const sortedScores = mergeSort(scores);
console.log(sortedScores); // [13, 9, 8, 7, 6, 5, 4, 2, 1]

