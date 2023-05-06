const sumLargestNumbers = function (data) {
  let num1 = 0;
  let num2 = 0;
  for (let i = 0; i < data.length; i++) {
    // assigning the index value to num1 as long as it is a) greater than current value of num1 and b) not equal to num2:
    if (data[i] > num1 && data[i] !== num2) {
      num1 = data[i];
    }
    // each iteration of the outer loop (line 4) also runs this loop:
    for (let i = 0; i < data.length; i++) {
      // 
      if (data[i] > num2 ) {
        // largest number of two compared indices will first be stored in num1 and then in num2;
        num2 = data[i];
      }
    }
  }
  // testing to verify that num2 holds the largest value:
  console.log("num1 = " + num1);
  console.log("num2 = " + num2);
  return num1 + num2;
}

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));