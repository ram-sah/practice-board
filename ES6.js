// Use of var, let, const

var snack = "crackers"
function getFood(food) {
    if(food){
        var snack = "chips"
        return snack;
    }return snack;
}
const foodReturn = getFood(false)
console.log(foodReturn)//undefined with var

// if we switch var with let 
let snack1 = "cracker"
function getFood1(food) {
    if(food){
        let snack1 = "chips";
        return snack1;
    }return snack1;
}
const retFood = getFood1(false)
console.log(retFood)//cracker

console.log("=====================================================1")

function add(x, y) {
    console.log(x + y);
  }
  add(2, 4)

//or ternary operator

const add1 = (x, y) => console.log(x + y);
  
  add1(2, 4)

function subtract(x, y) {
    console.log(x - y);
}
subtract(14, 4)
//or ternary operator
const subt = (x, y)=> console.log(x - y);
subt(16, 6)

function multiply(x, y) {
    console.log(x * y)
}
multiply(4, 5)
//or ternary operator
const multi = (x, y) => console.log(x * y)
multi(10, 2)

function divid(x, y) {
    console.log(x * y)
}
divid(4, 5)
//or ternary operator
const division = (x, y) => console.log(x / y)
division(10, 2)