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
    var newNum= num[num.length-1];
    return newNum.length;
}

console.log(findLengthOfLastWord(arr1));

// Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

// Example 1:

// Input: 121
// Output: true
// Example 2:

// Input: -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
// Follow up:

// Coud you solve it without converting the integer to a string?

var orginalNum = 121;
 function palindromeNum(num){
     var reverseNum = num.toString();
     for (var i = 0, j = reverseNum.length-1; i < reverseNum.length/2; i++,j--){
         if (reverseNum [i] !== reverseNum[j]){
             return false;
         }
     }
     return true;
 }