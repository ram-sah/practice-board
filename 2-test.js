console.log("=================1.")
const cities = ["hongkong", "kathmandu", "birgung", "newyork", "gaur"]
cities.shift("hongkong")
cities.unshift("hong")
console.log(cities)
const x= 12 + 8 + "java"

console.log("=================2.")
console.log("x", x) //20java
const y = "javaa" + 12 + 8
console.log("y", y)//javaa128

console.log("=================3.filter method")
const arr1 = [0, 1, 2, 3, 4, 5]
const arr2 = arr1.filter((_, i) => i % 2)
const result = arr2[2]
console.log(result)//5

console.log("=================4.splice method javascript")
const months = ['jun', 'jan', 'feb', 'mar']
months.splice(0, 1)
months.splice(3, 1, 'apr')
months.splice(3, 1, 'apr')
console.log(months)

console.log("=================5.splice method javascript")
let myFish = ['angel', 'clown', 'mandarin', 'sturgeon']
// insert new element into array at index 2
let removed = myFish.splice(2, 0, 'drum')
console.log(myFish)
console.log("=================6.")
a = 1
console.log("a:", a)
var a
console.log("b:", b)
var b
b = 2
console.log("====================7.")
const world1 = "b" + "a" + + "a" + "a" //(because + "a" expresion is NaN)
const world2 = " "+ + "a" + "n" + "y"
const worlds = (world1 + world2).toUpperCase()
console.log(worlds) //BANANA NANNY

console.log("====================8.")

sum(10, 20);

function sum(x, y) {
  return x + y;
}
console.log(sum(10, 20));//30


console.log("====================9.")

var v = 1;
var f1 = function () {
  console.log(v);
};

var f2 = function () {
  var v = 2;
  f1();
};

f2();// 1

console.log("====================10.")

function printA() {
    console.log(answer);
    var answer = 1;
  }
  printA();//undefined
  printA();//undefined
  

  console.log("====================11.")

  // Q1
function trueOrNotTrue(first, second) {
    if (first !== second) {
      return true;
    }
  }
  console.log(trueOrNotTrue(5, 10));
  
  // Q3
  function addTax(total) {
    return total * 1.05;
  }
  
  console.log(addTax(50));
  
  // Q9
  discountPrice = function (price) {
    return price * 0.85;
  };
  
  console.log(discountPrice(50));
  
console.log("==========================12.")
//Es5
var test = Math.max.apply(null, [-1, 100, 9001, -32]); 
console.log("ES5: ", test);// 9001

console.log("==========================13.")
//ES6
var test1= Math.max(...[-1, 100, 9002, -32]); 
console.log( "ES6: ", test1)// 9002

console.log("==========spread operator=================14.")
var arra1 = [1, 2, 3, 4]
var arra2 = [5,6,7]
arra1 = [...arra1, "test", ...arra2]
console.log(arra1)//[1,2,3,4,test,5,6,7]

console.log("===========================15.")
function addThreeNumbers(x,y,z){
  console.log(x+y+z);
}
var array = [2,3,4]
addThreeNumbers(...array)//9
console.log("================concat===========16.")
var arra1 = [2,3,4]
var arra2 = [5,6,7]
arra1concat = arra1.concat(arra2)
arra1 = [...arra1, ...arra2]
console.log(arra1concat)//[2,3,4,5,6,7]
console.log(arra1)//[2,3,4,5,6,7]

console.log("===========================17.")
const sumArg = (...args) => {
return args.reduce((a, b) => a + b, 0);
}
console.log(sumArg(2,3,4,1))//10

console.log("===========================18.Fizz Buzz")

function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log("Fizzbuzz");
    } else if (i % 3 == 0) {
      console.log("Fizz");
    } else if (i % 5 == 0) {
      console.log("Buzz");
    } else console.log(i);
  }
}
console.log("===========================19.Multiply without * ")

// note: this is a simple solution that only works for numbers >= 0
function multiply(a, b) {
  let i = 0;
  let sum = 0;
  while (i < a) {
    sum += b;
    i++;
  }
  return sum;
}

console.log("===========================20. Reverse a string")
//version 1 without built in string/array methods
function reverse1(string) {
  let new_string = "";
  for (let i = string.length - 1; i >= 0; i--) {
    new_string += string[i];
  }
  return new_string;
}

//version 2 using built in string/array methods
function reverse2(string) {
  let string_array = string.split("");
  let reversed_string_array = string_array.reverse();
  let new_string = reversed_string_array.join("");
  return new_string;
}
console.log("===========================21. SumZero ")

const testarr1 = [-11, -8, -3, 1, 2, 5, 8, 23];
function sumZero1(arr) {
  let i = 0;
  let j = arr.length - 1;
  let sum_arr = [];
  while (i < arr.length / 2) {
    if (arr[i] + arr[j] == 0) {
      console.log("match");
      sum_arr.push(arr[i], arr[j]);
      return sum_arr;
    } else {
      i += 1;
      j -= 1;
    }
  }
}

// Sumzero unsorted array. Do not sort. No nested loops
const testarr2 = [-2, -3, 1, 8, 14, -6, 7, 3];
function sumZero(arr) {}

console.log("===========================22. Islands of Ones ")

function islandsof1(arr) {
  let total = 0;
  let i = 0;
  while (i < arr.length) {
    if (arr[i] == 1 && arr[i + 1] != 1) {
      total += 1;
    }
    i++;
  }
  return total;
}

console.log("===========================23. Palindrome")

function palidromeCheck(string) {
  let i = 0;
  let j = string.length - 1;
  while (i < j) {
    if (string[i] != string[j]) {
      return false;
    } else {
      return true;
    }
  }
  i++;
  j--;
}

console.log("====================================24.")

//Use destructuring assignment with the rest parameter to perform an effective 
//Array.prototype.slice() or similar so that arr is a sub-array of the original array source with 
//the first two elements omitted.

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function removeFirstTwo(list) {
  
  const [a, b, ...arr] = list;
 
  return arr;
}
const arr = removeFirstTwo(source);
console.log(arr); // should be [3,4,5,6,7,8,9,10]
console.log(source); // should be [1,2,3,4,5,6,7,8,9,10];