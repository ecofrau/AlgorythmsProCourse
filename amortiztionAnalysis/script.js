function createNewArray(originalArray, numNewElements) {
    // creating new array, copying elements from the old massive
        let newArray = originalArray.slice(); //   copying original array
    
    // add new elements
    for (let i = 0; i < numNewElements; i++) {
        newArray.push(0); // i add number 0 or any i want
    }
    
    return newArray; 
}

// z.B.
const originalArray = [1, 2, 3, 4, 5];
const numNewElements = 3; // number of new elements in arraay
const resultArray = createNewArray(originalArray, numNewElements);

console.log(resultArray); // in result: [1, 2, 3, 4, 5, 0, 0, 0]

