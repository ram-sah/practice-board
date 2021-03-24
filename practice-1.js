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
var randomValue = stuff[ Math.floor( Math.random() * 14 ) ];
var i;
for (i = 0; i < stuff.length; i++) {
  if (randomValue == stuff[i]) {
      console.log("The random value matches a number in 'stuff' at position " + [i + 1])
  } else {
    console.log("no matches found")
  }
};
console.log("stuff : " + stuff);
console.log(randomValue + " is the random number");

console.log("======================================")
const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function removeFirstTwo(list) {
  
  const [a, b, ...arr] = list;

  return arr;
}
const arr = removeFirstTwo(source);
console.log(arr); // should be [3,4,5,6,7,8,9,10]
console.log(source); // should be [1,2,3,4,5,6,7,8,9,10];

console.log("====================================")
//Use destructuring assignment within the argument to 
//the function half to send only max and min inside the function.
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

const half = ({ max, min }) => (max + min) / 2.0;

//=====================
// Instructions:
// Using the below approach as a guide, implement the "Selection Sort" in JavaScript.
// - Scan through the list and find the smallest number possible. This requires looping through and checking which number is greater than 0, but smaller than all other numbers.
// - We would then say that this is our first number.
// - We would then loop through and check which number is bigger than this smallest number, but smaller than any other number.
// - This would then be our second number.
// - And so on...
// - Then, test your algorithm with each of the commented out arrays of data. As a bonus, use Benchmark.js to time it in both cases.
array = [1,21,3,5,8,65,23]

function selectionSort(items) {

    
    // Use the above swap function when you are ready to start swapping elements in the array.
    for (var i = 0; i < items.length; i++) {

        var newI = i;

        for (var j = i + 1; j < items.length; j++) {

            if (items[j] < items[newI]) {
                newI = j;
            }
        }

        if (i !== newI) {
            swap(items, i, newI)
        }

    }
    return items;
}
console.log("PRE-SORT");
console.log(array.join(" "));
console.log("---------------------------");
console.log("POST-SORT");
console.log(selectionSort(array).join(" "));

//===============================
// Use template literal syntax with backticks to create an array of list element (li) strings. 
//Each list element's text should be one of the array elements from the failure property on 
//the result object and have a class attribute with the value text-warning. 
//The makeList function should return the array of list item strings.

const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
  "use strict";
  //
  const failureItems = arr.map(item => `<li class="text-warning">${item}</li>`);
  // 
  return failureItems;
}
const failuresList = makeList(result.failure);
console.log(failuresList)

// 

const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
  "use strict";
  // change code below this line
  const failureItems = arr.map(item => `<li class="text-warning">${item}</li>`);
  // change code above this line
  return failureItems;
}
const failuresList = makeList(result.failure);

//Refactor the function setGear inside the object 
//bicycle to use the shorthand syntax described .

const bicycle = {
  gear: 2,
  setGear(newGear) {
    "use strict";
    this.gear = newGear;
  }
};