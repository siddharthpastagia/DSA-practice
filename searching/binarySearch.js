/*

Binary Search:
 - Write a function that accepts sorted array and value 
-  Create left pointer at the start of the array and right pointer at the end of the array
- While the left pointer comes before the right pointer
    -- Create a pointer in the middle
    -- If you find the value return the index
    -- If the value is too small , move the left pointer up
    -- If the value is too big, move the right pointer down
- If you never find the value, return -1 
*/

/**
 * 
Note: This code only works when array is sorted
 */

function binarySearch(arr, val){
    if(arr.length < 1) return -1
    let left = 0
    let right = arr.length - 1
    let middle = Math.floor((left+right)/2)
    while(arr[middle] !== val && left <=right){
        if(val < arr[middle]){
            right = middle - 1
        }else{
            left = middle + 1
        }
        middle = Math.floor((left+right)/2)
    }
      return arr[middle]===val ? middle : -1
  }

  console.log(binarySearch([1,2,3,4,6],4))
  console.log(binarySearch([1,2,3,4,6],7))
  console.log(binarySearch([1,2,3,4,6],-4))