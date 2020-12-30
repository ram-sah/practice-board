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

console.log("===========================18.")