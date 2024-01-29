/**
 * Merge Sort
 * Approach:
 * 
 * Break array into smaller parts (halves) until you have empty or 1 element array ( Use recursion)
 * Once you have smaller sorted arrays, merge those arrays with the mergeArray helper
 * Once the array has been merged back together, return the merged sorted array
 */


//const mergeArray = require('./mergeArray.js')
/**
 * Adding "type":"module" in package.json resolved the issue of import , otherwise you need to import via require because you are running code in Node
 */
import mergeArray from "./mergeArray.js"

function mergeSort(arr){
    if(arr.length <=1) return arr
    let mid = Math.floor(arr.length/2)
    let left  = mergeSort(arr.slice(0,mid))
    let right = mergeSort(arr.slice(mid))
    return mergeArray(left, right)
}

console.log(mergeSort([20,12,4,3,8,45,18]))
