const camelCase = function(input) {
  // Your code here
  let str;
  str = input.split(' ');
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
