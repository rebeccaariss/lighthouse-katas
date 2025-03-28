// Write a function that logs numbers from 1 to 20.
  // For numbers divisible by 3, log "Fizz".
  // For numbers divisible by 5, log "Buzz".
  // For numbers divisible by both 3 and 5, log "FizzBuzz".
  // Otherwise, log the number itself.

const fizzBuzz = () => {
  // for (let i = 1; i <= 20; i++) {
  //   if (i % 3 === 0 && i % 5 === 0) {
  //     console.log('FizzBuzz');
  //   } else if (i % 3 === 0) {
  //     console.log('Fizz');
  //   } else if (i % 5 === 0) {
  //     console.log('Buzz');
  //   } else {
  //     console.log(i);
  //   }
  // }

  // Now rewrite with ternary operators:
  for (let i = 1; i <= 20; i++) {
    console.log(
      (i % 3 === 0 && i % 5 === 0) ? 'FizzBuzz'
      : (i % 3 === 0) ? 'Fizz'
      : (i % 5 === 0) ? 'Buzz'
      : i
    );
  }
};

fizzBuzz();
