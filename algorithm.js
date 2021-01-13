//Create a function to find minimum number from the array 

function findMinNum(arr){
    if(!arr.length){
      throw err("empty arr plz check")
    }else if(arr.length === 1){
      return arr[0]
    }else {
      let minNumber = arr[0]
      for(let i = 1; i< arr.length; i++) {
        if (arr[i] < minNumber){
          minNumber = arr[i]
        }
      }  
      return minNumber; 
    }  
  }
  const result = findMinNum([10,1,3,6,2,3])
  console.log(result)
  
  console.log("test questions ===================================")
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].
//======================================================================


//   var twoSum = function(nums, target) {
//     for (let i = 0; i < nums.length; i++) {
//         const comp = target - nums[i];
//         if (nums.indexOf(comp) !== -1 && nums.indexOf(comp) !== i) {
//             return [i, nums.indexOf(comp)];
//         }
//     }
//     return 'No complement';
// };
// console.log(twoSum([2,7,11,15],9))

//or

var twoSum = function(nums, target) {
  for (var i=0; i<nums.length; i++) {
      if (nums.slice(i+1,).indexOf(target - nums[i]) > -1){
        
          return [i, i+1+nums.slice(i+1,).indexOf(target - nums[i])];
          }
    }
  }
  console.log(twoSum([2,7,11,15], 18))