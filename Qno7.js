//Qno7 : Implement a function that takes an array of objects with 'age' properties and returns an array of those who are adults (age 18 and above) using the `filter` method.

function filterAdults(people) {
    return people.filter(person => person.age >= 18);
  }
 
  const people = [
    { name: 'Mohsin Ali', age: 28 },
    { name: 'Mudassar Ali', age: 25 },
    { name: 'maha', age: 13 },
    { name: 'MUzammil Ali', age: 17 }
  ];
  const adults = filterAdults(people);
  console.log(adults);
