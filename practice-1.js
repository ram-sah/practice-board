console.log("=========================================================1")
// 1. Start with an array of numbers and create a new array with each number times 3.
// For example, [1, 2, 3] becomes [3, 6, 9].

const numbers = [1, 2, 3]

const numbersTimesThree = numbers.map(number => number * 3)//New E6
console.log(numbersTimesThree)

const numbersTimesThreeLong = numbers.map(function(number) {
  return number * 3
})//old, JS function
console.log(numbersTimesThreeLong)

console.log("=========================================================2")
// 2. Start with an array of strings and create a new array with each string upcased.
// For example, ["hello", "goodbye"] becomes ["HELLO", "GOODBYE"].

const strings = ["hello", "goodbye"]

const stringsUpcased = strings.map(string => string.toUpperCase())
console.log(stringsUpcased)

const stringsUpcasedLong = strings.map(function(string) {
  return string.toUpperCase()
})
console.log(stringsUpcasedLong)

console.log("=========================================================3.")
// 3. Start with an array of hashes and create a new array of string values from each hash's :name key.
// For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes ["Alice", "Blane"].

const peopleInfo = [{name: "Alice", age: 27}, {name: "Blane", age: 16}]

const peopleNames = peopleInfo.map(person => person.name)
console.log(peopleNames)

const peopleNamesLong = peopleInfo.map(function(person) {
  return person.name
})
console.log(peopleNamesLong)

console.log("=========================================================(4)")
// 4. Start with an array of numbers and create a new array with each number plus 7.
// For example, [1, 2, 3] becomes [8, 9, 10].

const numbersArray = [1, 2, 3]

const numbersPlusSeven = numbersArray.map(number => number + 7)
console.log(numbersPlusSeven)

const numbersPlusSevenLong = numbersArray.map(function(number) {
  return number + 7
})
console.log(numbersPlusSevenLong)

console.log("=================================================================5.")
const fs = require('fs');
const os = require('os');

const system = os.platform();
const user = os.userInfo().username;

fs.appendFile('hello.txt', `Hello ${user} on ${system}!`, (err) => {
  if (err) throw err;
  console.log('The data was appended to file!');//print this word
});
//use of concat, ..., splice and push
console.log("=================================================================6.")
function countdown(n){
  return n < 1 ? [] : [n].concat(countdown(n - 1));
}
const num = countdown(10)
console.log(num)//[10,9,8,7,6,5,4,3,2,1]

console.log("=================================================================6.1")
function countdown(n){
  return n < 1 ? [] : [n, ...countdown(n - 1)];
}
const num1 = countdown(10)
console.log(num1)//[10,9,8,7,6,5,4,3,2,1]

console.log("=================================================================6.2")
function countdown(n) {
  if (n < 1) {
    return [];
  } else {
    const arr = countdown(n - 1);
    arr.splice(0, 0, n);
    return arr;
  }
}const num2 = countdown(10)
console.log(num2)//[10,9,8,7,6,5,4,3,2,1]

console.log("=================================================================6.3")
function countup(n) {
  if (n < 1) {
    return [];
  } else {
    const countArray = countup(n - 1);
    countArray.push(n);
    return countArray;
  }
}
console.log(countup(5)); // [ 1, 2, 3, 4, 5 ]

console.log("=================================================================7")


// Write a for loop that looks at each index of the array to see if it 
// matches the random value If it does match the random value display 
// an alert box with the index of the array and the value

var stuff = [10,34,56,67,93,120,137,168,259,280,311,342,413,514];
var random_value = stuff[ Math.floor( Math.random() * 14 ) ];
var i;
for (i = 0; i < stuff.length; i++) {
  if (random_value == stuff[i]) {
      console.log("The random value matches a number in 'stuff' at position " + [i + 1])
  } else {
    console.log("no matches found")
  }
};
console.log("stuff : " + stuff);
console.log(random_value + " is the random number");