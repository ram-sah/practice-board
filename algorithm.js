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
  