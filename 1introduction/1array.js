// Q1: How do you add an element to the end of an array?
const arr1 = ['A','B','C']
arr1.push('D')
// console.log(arr1)

// Q2: How do you remove the last element from an array?
const arr2 = ['A','B','C']
arr2.pop()
// console.log(arr2)

// Q3: How do you find the length of an array?
const arr3 = ['A','B','C']
// console.log(arr3.length)

// Q4: How do you check if an element exists in an array?
const arr4 = ['A','B','C']
// console.log(arr4.includes('D'))

// Q5: How do you iterate over an array and perform an operation on each element?
const arr5 = ['A','B','C']
// arr5.map(arr=>console.log(arr))

// Q6: How do you find the index of an element in an array?
const arr6 = ['A','B','C']
// console.log(arr6.indexOf('B'))

// Q7: How do you remove an element from a specific index in an array?
const arr7 = ['A','B','C']
// console.log(arr7.splice(1,1))
// console.log(arr7)

// Q8: How do you check if an array is empty?
const arr8 = []
const isEmpty = arr8.length === 0
// console.log(isEmpty)

// Q9: How do you concatenate two arrays in JavaScript?
const arr9 = ['A']
const arr10 = ['B']
const arr11 = ['C']
// console.log(arr9.concat(arr10,arr11))

// Q10: How do you check if an object is an array?
const arr12 = ['A','B','C']
// console.log(Array.isArray(arr12))

// Q11: How do you create a copy of an array?
const arr13 = ['A','B','C']
// console.log(arr13.slice())

// Q12: How do you find the maximum or minimum value in an array?
const arr14 = [3,5,8,9]
// console.log('Maximum: '+Math.max(...arr14) + '\n' + 'Minimum: '+ Math.min(...arr14))

// Q13: How do you reverse the order of elements in an array?
const arr15 = ['A','B','C']
const arr16 = [3,5,8,9]
// console.log(arr15.reverse())
// console.log(arr16.reverse())

// Q14: How do you check if all elements in an array satisfy a condition?
const arr17 = [3,5,8,9]
// console.log(
//     arr17.every(element=> element>2)
// )

// Q15: How do you find the sum or average of elements in an array?
const arr18 = [3,5,8,9]
console.log(
    arr18.reduce((total,value)=>{
        return value + total
    })
)

