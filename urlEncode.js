const urlEncode = function(text) {
  let url = '';
  text = text.trim();

  // <<< for...of did not work in this case: >>>

  // for (const character of text) {
  //   if (text.character === ' ') {
  //     url += '%20';
  //   } else {
  //     url += text.character;
  //   }
  // }

  // <<< same logic, but with standard for loop: >>>

  for (let i = 0; i < text.length; i++) {
    if (text[i] === ' ') {
      url += '%20';
    } else {
      url += text[i];
    }
  }
  return url;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));