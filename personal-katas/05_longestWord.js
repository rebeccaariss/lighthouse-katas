// Write a function that takes a string (a sentence) and logs the longest word in the sentence.

const longestWord = (sentence) => {
  let words = sentence.split(' ');
  let longestWord = '';

  if (sentence.length === 0) {
    console.log('The string is empty.');
    return; // don't forget return
  }

  for (let i = 0; i < words.length; i++) {
    if (words[i].length >= longestWord.length) { // .length and >= per outputs
      longestWord = words[i];
    }
  }

  console.log(`The longest word is '${longestWord}'`);
};

longestWord("The quick brown fox jumps over the lazy dog"); 
// "The longest word is 'jumps'"
longestWord("React is great"); 
// "The longest word is 'great'"
longestWord(""); 
// "The string is empty."
