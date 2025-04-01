// Write a function that takes a string and returns it reversed without using the built-in .reverse() method.
const reverseString = (str) => {
  let reversed = '';

  if (str.length === 0) {
    console.log('The string is empty.')
    return; // again, return to break out of fn execution
  }

  for (let i = str.length -1; i >= 0; i--) {
    reversed += str[i];
  }
  
  console.log(reversed);
};