// Qno6: Create a chain of array methods to find the average of all positive numbers in an array of mixed integers and return the result rounded to two decimal places.

const numbers = [5, -3, 8, -2, 10, -1, 3];
const averageOfPositives = numbers
  .filter(number => number > 0)  
  .reduce((sum, number, index, array) => {
    sum += number;
    if (index === array.length - 1) {
      return sum / array.length;
    } else {
      return sum;
    }
  }, 0);
const roundedAverage = Math.round(averageOfPositives * 100) / 100;
console.log(roundedAverage);
