const camelCase = function(input) {
  let arr = [];
  arr = input.split(' ');
  str = '';

  for (let i = 0; i < arr.length; i++) {
    // don't forget () with JS, now you're used to python lol
    if (i === 0) {
      str += arr[i];
    } else {
      str += (arr[i][0].toUpperCase() + arr[i].substring(1));
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