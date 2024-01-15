function sumZero(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = i+1; j < arr.length; j++){
            if(arr[i] + arr[j] === 0){
                return [arr[i], arr[j]];
            }
        }
    }
}


console.log(sumZero([-4,-3,-2,-1,0,1,2,5]))

/* this has time complexity of O(N^2) since we loop through all the all array items. */