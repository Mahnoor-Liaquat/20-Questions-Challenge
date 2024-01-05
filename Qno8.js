// Qn08: Sort an array of strings based on their lengths in ascending order. If two strings have the same length, maintain their relative order in the sorted array.

const words = ['apple', 'banana', 'kiwi', 'orange', 'mango', 'grape'];

const sortedWords = words.sort((a, b) => {
  const lengthComparison = a.length - b.length;
  return lengthComparison !== 0 ? lengthComparison : words.indexOf(a) - words.indexOf(b);
});
console.log(sortedWords);
