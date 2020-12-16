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