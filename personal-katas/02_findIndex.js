// Write a function that takes an array and a target number. It should log the index of the first occurrence of the target number or -1 if the number isn’t in the array.

const findIndex = (arr, target) => {
  if (arr.length === 0) {
    console.log('The array is empty.');
    return;
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      console.log(`Index: ${i}`);
      return;
    }
  }

  console.log('Index: -1');
};

findIndex([4, 2, 7, 1, 9], 7); // "Index: 2"
findIndex([5, 3, 8], 10); // "Index: -1"
findIndex([], 3); // "The array is empty."
