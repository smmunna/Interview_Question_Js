function a(){
    console.log('first')
}
a()
setTimeout(function c(){
    console.log('Second')
},2000)

function b(){
    console.log('Third')
}
b()