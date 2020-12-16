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


