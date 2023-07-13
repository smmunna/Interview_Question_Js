"use strict";

//1. Write a function that takes a string as input and returns the reverse of that string.
function reverseString (string){
    return string.split('').reverse().join('')
}
// console.log(reverseString("string"))

// 2. Write a function that calculates the factorial of a given number.
function calculateFactorial(num){
    let fact=1, i =1;
    for(i; i<=num; i++){
        fact = fact*i;
    }
    return fact;
}
// console.log(calculateFactorial(5))

// 3. Write a function that prints numbers from 1 to 100. For multiples of 3, print 'Fizz' instead of the number. For multiples of 5, print 'Buzz'. For numbers that are multiples of both 3 and 5, print 'FizzBuzz'.

function fizBuz(num){
        for(let i =1; i<=num; i++){
            
            if(i%3==0){
                console.log('Fizz')
            }
            else if (i%5==0){
                console.log('FizzBuzz')
            }
            else{
                console.log(i)
            }
        }
}
// console.log(fizBuz(20))

// 3. Write a function that checks whether a given string is a palindrome (reads the same forwards and backwards).
function palindrome(string){
    let isPlaindrom = string.split('').reverse().join('')
    return isPlaindrom === string
}
// console.log(palindrome("racecar"))

// 4. Write a function that takes an array of numbers as input and returns the maximum number in the array.
function Max(num){
    return Math.max(...num)
}
const numarray = [2,3,4,12,3,56,6,12]
// console.log(Max(numarray))

//  5. Write a function that generates the Fibonacci sequence up to a given number of terms. Output: [0, 1, 1, 2, 3, 5, 8, 13]

function fiboSequence(num){
    let sequence = [0,1];
    for(let i=2; i<=num; i++){
        sequence.push( sequence[i-1] + sequence[i-2])
    }
    return sequence
}
// console.log(fiboSequence(8))

// 6. Write a function that counts the number of vowels (a, e, i, o, u) in a given string
function countVowel(string){
    let vowel = ['a','e','i','o','u']
    console.log(vowel.includes(string))
    let count = 0;
    for (let char of string.toLowerCase()) {
        if(vowel.includes(char)){
            count++
        }
    }
    return count
}
// console.log(countVowel('Hello world'))

// 7. Remove the duplication from array;
function removeDupli(arr){
    return arr.filter((element,index)=> arr.indexOf(element) === index)
    // return new Set([...arr])
}
const dupiarry = [1,2,2,3,4,5,5,6,7]
console.log(removeDupli(dupiarry))