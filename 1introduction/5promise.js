/*
    Promise Comes for solving the nested call back function..
*/

const taskOne = () => {
    return new Promise((resolve, reject) => {
        resolve('Task One Completed')
    })
}
const taskTwo = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Task two Completed')
        }, 3000)
    })
}
const taskThree = () => {
    return new Promise((resolve, reject) => {
        resolve('Task three Completed')
    })
}

taskOne()
    .then(res => console.log(res))
    .then(taskTwo)
    .then(res => console.log(res))
    .then(taskThree)
    .then(res => console.log(res))
    .catch(error=>console.log(error))