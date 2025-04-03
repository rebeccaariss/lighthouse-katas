const mostFrequent = (arr) => {
  if (arr.length === 0) {
    console.log("The array is empty.");
    return;
  }

  let frequency = {};
  let count = 0;
  let mostFrequent = null;

  for (let element of arr) { // confirm for of vs for in here -- correct because we want values, not indices

  }

  console.log(`Most frequent element: ${mostFrequent}`);
}

mostFrequent([1, 2, 2, 3, 3, 3, 4, 4, 4, 4]);
// Output: "Most frequent element: 4"

mostFrequent(["apple", "banana", "apple", "orange", "banana", "apple"]);
// Output: "Most frequent element: apple"
