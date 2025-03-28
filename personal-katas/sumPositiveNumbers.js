// Write a function that takes an array of numbers and logs the sum of all positive numbers.

const sumPositiveNumbers = (arr) => {
  let sum = 0;
  if (arr.length === 0) {
    console.log('The array is empty.');
    return; // Don't forget return statements.
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i];
    }
  }

  console.log(`Sum: ${sum}`);
};

sumPositiveNumbers([3, -2, 5, -8, 7]); 
// "Sum: 15"
sumPositiveNumbers([-1, -3, -5]); 
// "Sum: 0"
sumPositiveNumbers([]); 
// "The array is empty."
