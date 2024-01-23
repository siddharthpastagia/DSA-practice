// Write a function which takes in a string and returns counts of each characters in the string

 // charCount("aaaa")
//  {
//     a:4
//  }

// charCount("hello")
/* {
    h: 1,
    e: 1,
    l: 2,
    o: 1
} */

// charCount("Your PIN number is 1234!")
/* {
    1: 1,
    2: 1,
    3: 1,
    4: 1,
    b: 1,
    e: 1,
    i: 2,
    m: 1,
    n: 2,
    o: 1,
    p: 1,
    r: 2,
    s: 1,
    u: 2,
    y: 1
} */

// This is initial solution
/* function charCount(str){
    // make an object to return in the end
    let result = {}
    // loop over the string for each char
    for(let i=0; i < str.length ; i++){
        let char  = str[i].toLowerCase()
        if(/[a-z0-9]/.test(char)){
            if(result[char] > 0){
                result[char]++;
            }else{
                result[char] = 1
            }
        }
    }
        // if the char a number/letter and is a key in object, and add one to count 
        // if the char a number/letter and is not in object, add it and set value to 1
        // If char is something else, ignore(space/period)
    // return object at the end
    return result
} */
// Initial solution ends

function charCount(str){
    // make an object to return in the end
    let obj = {}
    // if char is alphanumeric then only 
    // looping through the str
    for(let char of str){
        if(isAlphanumeric(char)){
            char = char.toLowerCase()
            obj[char] = ++obj[char] || 1
        }
        
    }
    // return an obj
    return obj
}

function isAlphanumeric(char){
    const code = char.charCodeAt(0)
    if(!(code > 47 && code < 58) && !(code > 64 && code < 91) && !(code > 96 && code < 123)){
        return false
    }
    return true
}



console.log(charCount("Palak is 32 years old! and Sid is also same."))