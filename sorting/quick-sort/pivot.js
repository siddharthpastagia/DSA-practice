/**
 * Write a pivot function that returns the index of the pivot
 * e.g. [2,8,3,4,5,1] if we select pivot as 2 number from array the output should be 1 because 1 will be index of 2 if we move pivot to the sorted position i.e. [1,2,8,3,4,5]
 * @param {*} arr 
 * @param {*} start 
 * @param {*} end 
 */



function pivot(arr, start=0,end=arr.length - 1){
    function swap(arr,i,j){
        let temp = arr[i]
        arr[i]=arr[j]
        arr[j]=temp
    }
    // we are taking pivot as element at 0th index
    let pivot = arr[start]
    // swapIndex is initially 0
    let swapIndex = start
    // this is for loop which compares pivot with all the elements, our pivot is 1st element so we will start comparing 1st element to 2nd and so on that is why i is start+1
    for(let i=start+1;i <= end;i++){
        if(pivot > arr[i]){
            swapIndex++
            swap(arr, swapIndex, i)
        }
    }
    swap(arr, start, swapIndex)
    return swapIndex
}

//console.log(pivot([9,4,8,2,1,5,7,6,3]))
export default pivot