// Qno13: Discuss the default behavior of the `sort` method for strings and numbers. How would you use a custom comparison function to sort an array of objects by a specific property?

const people = [
  { name: "Amar", age: 25 },
  { name: "Akbar", age: 30 },
  { name: "Anthony", age: 20 },
];
people.sort((a, b) => a.age - b.age);

console.log(people);
