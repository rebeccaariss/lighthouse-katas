// Write a function that takes an array of numbers and finds the first repeating number. If there are no repeating numbers, log "No repeating numbers found".

const arr1 = [3, 5, 1, 3, 7, 5]; // First repeating number: 3
const arr2 = [1, 2, 3, 4]; // No repeating numbers found
const arr3 = [7, 8, 9, 7]; // First repeating number: 7

const firstRepeating = (arr) => {
  let temp = arr[0];

  if (arr.length === 0) {
    console.log('The array is empty.');
  }

  for (let i = 1; i  < arr.length; i++) { // 🌷 initializing with 1 to skip over arr[0], which has already been assigned to temp variable. (this avoids logical error).
    if (arr[i] === temp) {
      console.log(`First repeating number: ${temp}`);
      return;
    }
  }

  // If the loop completes without entering conditional block:
  console.log('No repeating numbers found');
};