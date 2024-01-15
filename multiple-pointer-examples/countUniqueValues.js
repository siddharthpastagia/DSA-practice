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
    let countArray = []
    for(let item of arr){
        if(!arr.contains[item]){
            countArray.push(item)
        }
    }
    return countArray.length
}


console.log(countUniqueValues([1,1,1,2]))
console.log(countUniqueValues([1,2,3,4,4,4, 7, 7, 12, 12, 13]))
console.log(countUniqueValues([-2,-1,-1,0,1])) 
console.log(countUniqueValues([]))

/* This Solution is O(N^2) since we have .contains inside for of loop so it is nested loop */