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