const instructorWithLongestName = function(instructors) {
  let longest = {name: '', course: ''};
  for (const instructor of instructors) {
    if (instructor.name.length > longest.name.length) {
      longest.name = instructor.name;
      longest.course = instructor.course;
    } else if (instructor.name.length === longest.name.length) {
      return longest;
    }
  }
  return longest;
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));