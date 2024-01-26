/**
 * Selection sort is same as bubble sort but here smallest value will be placed first into sorting position
 * 
 */

function selectionSort(arr){
    let temp
    for(let i=0;i<arr.length;i++){
        let min = i
        for(let j=i+1;j<arr.length;j++){
            if(arr[j] < arr[min]){
                min = j
            }
        }
        //swap
        if(i !== min){
            temp = arr[i]
            arr[i]=arr[min]
            arr[min]= temp
        }
        
    }
    return arr
}

console.log(selectionSort([2,4,7,6,1,-6,-7,0]))