const isPalindrome = (str) => {
  // let backwardsStr = ''

  if (str.length === 0) {
    console.log('Can\'t check for palindrome on an empty string.')
  }

  if (backwardsStr === str) {
    console.log('Yes, it\'s a palindrome.')
  } else if (backwardsStr !== str) {
    console.log('No, it\'s not a palindrome.')
  }
}

isPalindrome("racecar"); 
// Output: "Yes, it's a palindrome."

isPalindrome("hello"); 
// Output: "No, it's not a palindrome."

isPalindrome("A man a plan a canal Panama");
// Output: "Yes, it's a palindrome."
