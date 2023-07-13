/*
    After completing one function , it will render other function... asyncronous..
*/ 

function taskOne(callback){
    console.log('Task One')
    callback()
}

const taskTwo = (callback)=>{
    setTimeout(()=>{
        console.log('Data Loading.. Task Two')
        callback()
    },3000)
}
function taskThree(callback){
    console.log('Task 3')
    callback()
}
function taskFour(){
    console.log('Task 4')
}

// Showing the result;
taskOne(function F1(){
    taskTwo(function F2(){
        taskThree(function F3(){
            taskFour();
        });
    });
})
