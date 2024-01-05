//Qno9 Given an array of arrays containing numbers, use a combination of array methods to flatten the structure and then calculate the sum of all the numbers.

const arrayOfArrays = [
    [1, 2, 3],
    [4, 5],
    [6, 7, 8],
  ];

  const sumOfAllNumbers = arrayOfArrays
    .reduce((flatArray, innerArray) => flatArray.concat(innerArray), []) 
    .reduce((sum, number) => sum + number, 0); 
  console.log(sumOfAllNumbers);
  