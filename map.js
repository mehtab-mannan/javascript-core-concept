let numbar = [2, 4, 7, 4, 9, 10];
const output = numbar.map(element => element * 2);
// console.log(output)


// using filter we can find out even, odd, greater than and less than number------------------
// function isOdd(num) {
//     return num % 2 ===0;
// }
const oddNumber = numbar.filter(num=>num % 2 ===0);
const largeNumber = numbar.filter(num=>num >7);
// console.log("large number is :" ,largeNumber);

//-------------end filter---------------------------

// -------------start-----reduce------------------
const reduceUse = numbar.reduce((a, b) => a + b)
// console.log('value of reduce',reduceUse)

//---------------------------end-------------

// sum or max

function findSum(numbar) {
    let sum = 0;
    for (let i = 0; i < numbar.length; i++){
        sum = sum + numbar[i]
        
    }
    return sum;
}

// console.log(findSum(numbar))

function findMax(numbar) {
    let max = 0;
    for (let i = 0; i < numbar.length; i++){
        if (numbar[i] > max) {
            max=numbar[i]
        }
    }
    return max;
}
// console.log(findMax(numbar))


