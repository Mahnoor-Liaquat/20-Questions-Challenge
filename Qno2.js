// Qno2 Take an array of strings, filter out the ones with a length less than 5, and then capitalize the remaining strings using the `map` method.

const names =["mahnoor", "mahrukh",  "anadee", "maha","Eiman","dua"];

const result = names. filter(name=>name.length>=5) .map(name=>name.toUpperCase());
console.log(result);
