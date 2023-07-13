/*
        For solving the nested .then in the promise we use async , await.
*/

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
        reject('Task three not Completed')
    })
}

// taskOne()
//     .then(res => console.log(res))
//     .then(taskTwo)
//     .then(res => console.log(res))
//     .then(taskThree)
//     .then(res => console.log(res))
//     .catch(error=>console.log(error))

const callAllFun = async () => {
    try {                          // We used try ccatch for solving the error, so that synchorously error can show..
        const t1 = await taskOne()
        console.log(t1)
        const t2 = await taskTwo()
        console.log(t2)
        const t3 = await taskThree()
        console.log(t3)
    } catch (error) {
        console.log(error)
    }
}

callAllFun()