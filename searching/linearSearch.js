// write a function that accpepts array and value , if value is present in array return index else return -1

function linearSearch(arr, val){
    if(arr.length < 1){
        return -1
    }
    for(let i = 0; i< arr.length;i++){
        if(arr[i]===val){
            return i
        }
    }
    return -1
}


console.log(linearSearch([1,2,3],2))