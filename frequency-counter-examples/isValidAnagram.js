/**
Frequency Counter - validAnagram
Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

Note: You may assume the string contains only lowercase alphabets.

Time Complexity - O(n)
 */

function validAnagram(str1, str2){
    if(str1.length !== str2.length){
        return false
    }
    let obj1 = {}
    let obj2 = {}
    // creating loop for str1
    for(let char of str1){
        obj1[char] = ++ obj1[char] || 1
    }
    // creating loop for str2
    for(let char of str2){
        obj2[char] = ++ obj2[char] || 1
    }
    // interate over keys of obj1
    for(let key in obj1){
        // check if key is present in obj2 or not
        if(!(key in obj2)){
            return false
        }
        // check if count of all keys are same in both string (objects)
        if(obj2[key] !== obj1[key]){
            return false
        }
    }
    return true
  }
  
  console.log(validAnagram('',''))
  console.log(validAnagram('aaz','zza'))
  console.log(validAnagram('anagram','nagaram'))
  console.log(validAnagram('rat','car'))
  console.log(validAnagram('awesome','awesom'))
  console.log(validAnagram('amanaplanacanalpanama','acanalmanplanpamana'))
  console.log(validAnagram('qwerty','qeywrt'))
  console.log(validAnagram('qwerty','qwerty'))
  console.log(validAnagram('texttwisttime','texttwisttime'))
