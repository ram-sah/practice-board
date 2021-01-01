console.log("==========1.===========")
const arr = [1, 13, 11, 55, 22,111]
const x = arr[2]
const y = arr.sort()[4]
const z = y-x
console .log(y)//22
console.log(x)//11
console.log(z)//11

console.log("==========2.===============================================")

function romanConverter(num) {
    let rom = {
        M : 1000, CM : 900,
        D : 500, CD : 400,
        C : 100, XC : 90,
        L : 50, XL : 40,
        X : 10, IX : 9,
        V : 5, IV : 4,
        I : 1
    }

    let result = " "
    for (let i in rom) {
        while(num >= rom[i]) {
            console.log("this is i ", i)
            result += i
            num -= rom[i]
        }
    }
    return result
}
console.log(romanConverter(38))


console.log("========3.====================================================");
const anagramCheck = (starString, moonString) => {
    const normalize = aString => 
    aString
    .toLowerCase()
    .replace(/[^a-z0-9]/gi, '')
    .split('')
    .sort()
    .join()
    return normalize(starString) === normalize(moonString);
};
console.log(anagramCheck('listen', 'silent'));

console.log("========5.====================================================");
function createPhoneNumber(numbers){
    var formatter= "(xxx) xxx-xxxx"
     for(var i=0; i<numbers.length; i++){
           formatter= formatter.replace("x", numbers[i])
      }
      return formatter
      
}
var numPrt = createPhoneNumber(5655755567);
console.log(numPrt)

console.log("========6.=ask bcs==============================================");

function getFunc() {
    var a = 7;
    return function(b) {
        console.log(a+b);
    }
}
var f = getFunc();
f(5);//12

 console.log("========================================================7.=====")   

 var trees = ["pine","apple","oak","maple","cherry"];
delete trees[3];
console.log(trees.length);//5

console.log("========================================================8.=====") 
var p = ("10" +11 + 20)
console.log(p)//101120

console.log("========================================================9.=====") 
var ar = [2, 2, 2, 2, 2, 4, 5, 5, 5, 9];
function fooo(ar) {
  var a = [], 
      b = [], prev ;

  ar.sort();
  for (var i = 0; i < ar.length; i++) {
    if (ar[i] !== prev) {
      a.push(ar[i]);
      b.push(1);
    } else {
      b[b.length - 1]++;
    }
    prev = ar[i];
  }
  return [a, b];
}

var result = fooo(ar);
console.log('[' + result[0] + ']','[' + result[1] + ']')

console.log("========10.====================================================");
function letterCount(s) {
    let arr = s.split("").sort()
    let obj = {}
    for (let i = 0; i < arr.length; i++) {
        if (!obj[arr[i]]) {
            obj[arr[i]] = 1
        } else obj[arr[i]] += 1
    }
    return obj

}
var ltrcont = letterCount("565757");
console.log(ltrcont);