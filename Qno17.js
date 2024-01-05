// Qno17: Explain the concept of callback functions in the context of array methods. Provide an example of using a callback function with the `map` method.

// a callback function is a function that is passed as an argument to another function, and it gets executed at some point during the execution of that other function. Callback functions are commonly used with array methods in JavaScript to perform operations on each element of an array.

const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map((number) => {
  return number * number;
});
console.log(squaredNumbers);
