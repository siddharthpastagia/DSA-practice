import pivot from './pivot.js'

function quickSort(arr, left = 0, right = arr.length -1){
    if(left < right){
        let pivotIndex = pivot(arr, left , right)
        //left side of pivot
        quickSort(arr, left, pivotIndex - 1)
        // right side of pivot
        quickSort(arr, pivotIndex+1, right)
    }
    return arr
}

console.log(quickSort([1,4,7,6,3,-2,-6]))