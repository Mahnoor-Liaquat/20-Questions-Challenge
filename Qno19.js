// Q: Discuss the importance of immutability when working with array methods. Demonstrate how you would perform immutable operations using methods like `map` or `filter`.

// using Map:
const originalArray = [1, 2, 3, 4, 5];
const doubledArray = originalArray.map(number => number * 2);
console.log(originalArray);
console.log(doubledArray);

// Using Filter:
const oriArray = [1, 2, 3, 4, 5];
const evenNumbersArray = oriArray.filter(number => number % 2 === 0);

console.log(oriArray);  
console.log(evenNumbersArray);

