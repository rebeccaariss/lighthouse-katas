const camelCase = function(input) {
  let arr = input.trim().split(/\s+/); // Trim leading/trailing spaces and split on multiple spaces
  let str = '';

  for (let i = 0; i < arr.length; i++) {
    // don't forget () with JS, now you're used to python lol
    if (i === 0) {
      str += arr[i].toLowerCase(); // this ensures normalization
    } else {
      str += arr[i][0].toUpperCase() + arr[i].substring(1);
    }
  }

  return str;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));


// ----- NODE PRACTICE SECTION -----

// > let str = 'this is a string';
// undefined
// > str.split()
// [ 'this is a string' ]
// > str.split('')
// [
//   't', 'h', 'i', 's',
//   ' ', 'i', 's', ' ',
//   'a', ' ', 's', 't',
//   'r', 'i', 'n', 'g'
// ]
// > str.split(' ').join('')
// 'thisisastring'
// > str.split(' ')
// [ 'this', 'is', 'a', 'string' ]
// > 

// More testing for edge cases here (address the issue of spaces):
// > camelCase('this is a string')
// 'thisIsAString'
// > camelCase('hi i am finn')
// 'hiIAmFinn'
// > camelCase('hello hi how are you doing i am finn    ')
// 🚨 Uncaught TypeError: Cannot read properties of undefined (reading 'toUpperCase')
//     at camelCase (REPL16:11:25)
// > camelCase('hello hi how are you doing i am finn')
// 'helloHiHowAreYouDoingIAmFinn'

// FURTHER EDGE CASES TO CONSIDER but moving on to another practice exercise for now:
// 1) Symbols, punctuation, etc. Ex:
// > camelCase('    . blueberry cheesecake  ! ')
// '.BlueberryCheesecake!'
// 2) Mixed case input ('HELLO WORLD', 'hElLo WoRLd', etc)
// 3) Numbers in the input
// 4) Empty string or only symbols