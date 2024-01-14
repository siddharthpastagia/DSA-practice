// write a function called same, which accepts two arrays. Te function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of value must be the same.

// Example:

// same([1,2.3],[4,1,9])  // true
// same([1,2.3],[1,9])  // false
// same([1,2.1],[4,4,1])  // false (must be same frequency)

function isSqrtSame(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false
    }
    let obj1 = {}
    let obj2 = {}
    // looping through arr1 and creating object
    for(let item of arr1){
        obj1[item] = (obj1[item] || 0) + 1
    }
    // looping through arr2 and creating object
    for(let item of arr2){
        obj2[item] = (obj2[item] || 0) + 1
    }
    // iterating over obj1
    for(let key in obj1){
        // comparing if square of obj1 key is present in obj2
        if(!(key ** 2 in obj2)){
            return false
        }
        if(obj2[key ** 2] !== obj1[key]){
            return false
        }
    }
    return true
}

console.log(isSqrtSame([1,2,3,1],[1,4,9,1]))
console.log(isSqrtSame([1,2,3,1],[1,4,1]))
console.log(isSqrtSame([1,2,3],[1,4,10]))
console.log(isSqrtSame([1,2,3,3,5,1],[1,4,9,25,9,1]))
console.log(isSqrtSame([1,2,3,2,5],[9,1,4,4,11]))