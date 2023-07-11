const fruits = [100,25,12,33,45,4]

fruits.sort((a,b)=>{
    return a-b
})
console.log(fruits)
console.log('Highest: '+ fruits[fruits.length-1] +'Lowest: '+fruits[0])