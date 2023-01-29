/*
Write a function `removeEWords(sentence)` that accepts a sentence string as an
arg. The function should return a new string, containing only the words that
don't have the letter "e" in them.

Solve this using Array's `filter()` method.

Examples:

console.log(removeEWords('What time is it everyone?')); // 'What is it'
console.log(removeEWords('Enter the building')); // 'building'

//change string to array
//each value in the array we would filter out that word if E is in thet of the word
 last par
*/

let removeEWords = function(sentence) {
<<<<<<< HEAD
  let string = '';
   let filteredE = sentence.filter(function(value) {
      if (value !== 'e') value += string;
   });
return string;
=======
  let arr = sentence.split(" ");
  let answer = arr.filter(function (value){
    if(value.includes('e') || value.includes('E')) return false;
    else return true;
  })
  return answer.join(" ");
>>>>>>> 4375cb87b1dd4cdf5e2513cd4c329c23e0187a7e
};

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = removeEWords;
} catch (e) {
  module.exports = null;
}
