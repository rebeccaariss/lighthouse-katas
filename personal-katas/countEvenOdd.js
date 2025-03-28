// Write a function that takes an array of numbers and logs the count of even and odd numbers.

const countEvenOdd = (arr) => {
  // Your code here
  let even = 0;
  let odd = 0;

  if (arr.length === 0) {
    console.log("The array is empty.")
    return;
  }

  for (let num of arr) { // don't forget LET here; this caused issues re: global scope.
    if (num % 2 === 0) { // evenly divisible resulting in no remainder
      even++;
    } else if (num % 2 === 1) { // not evenly divisible, resulting in remainder of 1
      odd++;
    }
  }

  console.log(`Even count: ${even}, Odd count: ${odd}`);
};

countEvenOdd([3, 9, 2, 10, 4, 6]); 
// Even count: 4, Odd count: 2
// Silly chatgpt. Gave the wrong values in the notes initially (3 and 3).
countEvenOdd([]); 
// "The array is empty."
countEvenOdd([7, 5, 3]); 
// Even count: 0, Odd count: 3
