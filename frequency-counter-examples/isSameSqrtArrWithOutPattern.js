// write a function called same, which accepts two arrays. Te function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of value must be the same.

// Example:

// same([1,2.3],[4,1,9])  // true
// same([1,2.3],[1,9])  // false
// same([1,2.1],[4,4,1])  // false (must be same frequency)


function same(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false
    }
    for(let elem of arr1){
        let correctIndex = arr2.indexOf(elem ** 2)
        if(correctIndex === -1){
            return false
        }
    arr2.splice(correctIndex, 1)
    console.log(arr2)    
    }
    return true
}

console.log(same([1,2,3],[1,4,9,6]))
console.log(same([1,2,3],[1,4]))
console.log(same([1,2,3],[1,4,9]))
console.log(same([1,2,3],[9,4,1]))

// We should not use this apporach because this has time complexity of O(n^2) due to nested loops. We have one for of loop and one indexOf which works as nested loop only so we need to use better pattern to solve this type of issue which is frequnecy counter method, where instead of working with array, we will create objects for each array and work with them.