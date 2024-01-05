// Qno15: How does the `find` method differ from `filter`? Give an example of a scenario where using `find` is more appropriate than `filter`.

// find is more appropriate when you want to retrieve a single element that satisfies a condition, and you are interested in the first match.
const numbers = [1, 2, 3, 4, 5];
const firstEvenNumber = numbers.find(number => number % 2 === 0);
console.log(firstEvenNumber);

// filter is more appropriate when you want to retrieve multiple elements that satisfy a condition and need all matches in a new array.
const num = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(number => number % 2 === 0);
console.log(evenNumbers); 

const tasks = [
    { id: 1, description: 'Task A', status: 'pending' },
    { id: 2, description: 'Task B', status: 'completed' },
    { id: 3, description: 'Task C', status: 'in-progress' },
  ];
  const firstCompletedTask = tasks.find(task => task.status === 'completed');
  console.log(firstCompletedTask);
  
// using find is appropriate because you want to retrieve the first task marked as "completed" and do not need an array of all completed tasks. If you used filter, it would return an array containing a single element, which might be less convenient in this scenario.
