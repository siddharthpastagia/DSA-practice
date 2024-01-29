/**
 * Write a function to merge two sorted arrays
 * where function recieves 2 inputs, both are sorted array
 * output will be new array which will be also sorted and consists of all the elements of two input arrays
 */

/**
 * Approach:
 * Create an empty array and push the result in that array
 * add 2 counters for each array i and j which will, start from 0 and end at array length
 * compare 1st item of 1st array to the 1st item of 2nd array
 * if the 1st item of array 1 is smaller than 1st item of array 2 then push 1st item of 1st array in results and move to 2nd item of array 1
 * if the 1st item of array 1 is larger than 1st item of array 2 then push 1st item of 2nd array in results and move to 2nd item of array 2
 * when we reach to the end of array for one of the array , we need to push all remaning item of other array in results since the array is already sorted
 */

function mergeArray(arr1, arr2){
    let resultArray = []
    let i = 0
    let j = 0
    while(i<arr1.length && j<arr2.length){
        if(arr2[j] > arr1[i]){
            resultArray.push(arr1[i])
            i++
        }else{
            resultArray.push(arr2[j])
            j++
        }
    }
    while(i < arr1.length){
        resultArray.push(arr1[i])
        i++
    }
    while(j < arr2.length){
        resultArray.push(arr2[j])
        j++
    }
    return resultArray
}

// console.log(mergeArray([1,8,9],[2,4,7]))
// console.log(mergeArray([1,8,9],[]))
// console.log(mergeArray([],[1,8,9]))
// console.log(mergeArray([1,8,9],[1,8,9]))

module.exports = mergeArray
