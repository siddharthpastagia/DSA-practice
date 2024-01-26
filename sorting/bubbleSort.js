/**
 * Buubble sorting the sorting where largest value bubbles to top (right side), we compare the the values at different index starting from left to the next value and if current value is greater than next value, we do swaping
 */

function bubbleSort(arr){
    let noSwap
    for(let i=arr.length;i>0;i--){
        noSwap=true
        for(let j=0;j<i-1;j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j]
                arr[j]=arr[j+1]
                arr[j+1] = temp
                noSwap = false
            }
        }
        if(noSwap) break
    }
    return arr
}

console.log(bubbleSort([34,34,56,67,2,1,4]))
