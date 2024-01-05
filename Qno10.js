//Qno10: Modify the `find` method to handle the scenario where the desired element is not found, returning a custom default object instead.

function findWithDefault(array, predicate, defaultValue) {
    const foundElement = array.find(predicate);
    return foundElement !== undefined ? foundElement : defaultValue;
  }

  const people = [
    { id: 1, name: 'Ali' },
    { id: 2, name: 'Jawad' },
    { id: 3, name: 'Muzammil'}
  ];
  const result = findWithDefault(people, person => person.id === 4, { id: 0, name: 'DefaultPerson' });
  console.log(result);
  