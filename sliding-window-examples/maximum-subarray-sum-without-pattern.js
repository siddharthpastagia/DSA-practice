/**
 * Write a function called maxSubarraySum which accepts an array of integers and number called n. The function should calculate the maximum sum of n consecutive elements in the array.
 * 
 * maxSubArraySum([1,2,5,2,8,1,5],2)  // 10
 * maxSubArraySum([1,2,5,2,8,1,5],4)  // 17
 * maxSubArraySum([4,2,1,6],1)  // 6
 * maxSubArraySum([4,2,1,6,2],4) // 13
 * maxSubArraySum([],4)  // null
 */

function maxSubArraySum(arr,num){
    if(arr.length < num){
        return null
    }
    let max = - Infinity
    for(let i=0;i<arr.length - num +1;i++){
        let temp = 0
        for(let j=0;j<num;j++){
            temp+=arr[i+j]
            //console.log(temp)
        }
        if(temp > max){
            max = temp
        }
    }
    return max
}

console.log(maxSubArraySum([1,2,5,2,8,1,5],2))