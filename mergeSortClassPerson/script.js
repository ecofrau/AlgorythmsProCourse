class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    toString() {
        return `${this.name} (${this.age})`;
    }
}

let people = [
    new Person("Alice", 25),
    new Person("Bob", 20),
    new Person("Charlie", 30),
    new Person("David", 35),
    new Person("Eve", 28)
];

people = mergeSort(people);

people.forEach(person => console.log(person.toString()));

function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const mid = Math.floor(arr.length / 2);
    const leftHalf = mergeSort(arr.slice(0, mid));
    const rightHalf = mergeSort(arr.slice(mid));

    return merge(leftHalf, rightHalf);
}

function merge(left, right) {
    const sortedArray = [];
    let i = 0;
    let j = 0;

    while (i < left.length && j < right.length) {
        if (left[i].age > right[j].age) {
            sortedArray.push(left[i]);
            i++;
        } else {
            sortedArray.push(right[j]);
            j++;
        }
    }

    // other elements that were left
    while (i < left.length) {
        sortedArray.push(left[i]);
        i++;
    }

    while (j < right.length) {
        sortedArray.push(right[j]);
        j++;
    }

    return sortedArray;
}
