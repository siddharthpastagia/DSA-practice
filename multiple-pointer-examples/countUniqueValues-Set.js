/*
Implement a function called countUniqueValues, which accepts sorted array and counts unique vlaues in the array. There can be negative values in the array, but it will be sorted always.

countUniqueValues([1,1,1,1,1,2])  // 2
countUniqueValues([1,2,3,4,4,4, 7, 7, 12, 12, 13])  // 7
countUniqueValues([])  // 0
countUniqueValues([-2,-1,-1,0,1])  // 4
*/ 


function countUniqueValues(arr){
    // create count variable
    
    if(arr.length === 0){
        return 0
    }
    const newSet = [...new Set(arr)]
    return newSet.length

    // or this can be done by

    /*
        const newSet = new Set(arr)
        return newSet.size
    */
    
}


console.log(countUniqueValues([1,1,1,2]))
console.log(countUniqueValues([1,2,3,4,4,4, 7, 7, 12, 12, 13]))
console.log(countUniqueValues([-2,-1,-1,0,1])) 
console.log(countUniqueValues([]))