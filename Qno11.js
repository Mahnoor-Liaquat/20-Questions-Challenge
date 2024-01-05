//Qno11: How does the `map` method work in JavaScript, and can you provide an example of when you might use it to manipulate an array of objects?

const people = [
    { id: 1, name: 'Ammaar' , gender : 'male'},
    { id: 2, name: 'Abeera' , gender : 'female'},
    { id: 3, name: 'Arham' , gender : 'male'},
    { id: 4, name: 'Ameera' , gender : 'female'}
  ];
  const formattedNames = people.map(person => {
    const title = person.gender === 'female' ? 'Ms.' : 'Mr.';
    return `${title} ${person.name}`;
  });
  
  console.log(formattedNames);
  