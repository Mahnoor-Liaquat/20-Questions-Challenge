const words = ['ali', 'babar', 'karachi', 'orange'];

const result = words
  .filter(word => word.length > 3) 
  .map(word => word.toUpperCase()) 
  .reduce((concatenatedString, currentWord) => {
    return concatenatedString === '' ? currentWord : `${concatenatedString} ${currentWord}`;
  }, '');

console.log(result);
