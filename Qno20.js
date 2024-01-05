// Use map when you want to create a new array with transformed values.
const numbers = [1, 2, 3];
const doubledNumbers = numbers.map(number => number * 2);

// Use forEach when you want to iterate over each element for side effects without creating a new array.
const num = [1, 2, 3];
num.forEach(number => console.log(num));
