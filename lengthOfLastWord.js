// https://leetcode.com/problems/length-of-last-word/
// 58. Length of Last Word
// Given a string s consists of upper/lower-case alphabets and empty space characters ' ', return the length of last word (last word means the last appearing word if we loop from left to right) in the string.
// If the last word does not exist, return 0.

// Note: A word is defined as a maximal substring consisting of non-space characters only.

// Example:
//  Input: "Hello World"
//  Output: 5

var arr1 ="Hello World";
function findLengthOfLastWord(arr){
    var num =arr.split(" ");
//   console.log(num);
    var newNum= num[num.length-1];
    return newNum.length;
}

console.log(findLengthOfLastWord(arr1));