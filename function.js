function myFunction( ){
    console.log("function has been called")
}
// myFunction();

//-ex-2----------------

function fullName(fName,lName) {
    console.log(fName + " "+lName)
}
// fullName('sumaia','akter')
//--------------------------------//

//explain arguments-------------------
function add() {
    // console.log(a + b);
    // console.log(arguments)
    var arr = arguments;
    var sum = 0;
    for (let i = 0; i < arr.length; i++){
        // console.log(arr[i]);
        sum = sum+arr[i]
    }
    console.log(sum)
}
// add(2,4,3,5,6)

function sum(a, b) {
    var result = a + b;
    return result;
}
var total = sum(2, 3)
// console.log(total)

// ----------nested function---------------------

function add(a, b) {
    var sum = a + b;
    function square() {
        var result = sum * sum;
        return result;
    }
    return square();
}
// console.log(add(2,3))

//-------------callback---------------------------
function CallBackImplement(a,b, callback) {
    var c = a + b;
    var d = a - b;
    var res = callback(c, d);
    return res;

};
const callbackOutput = CallBackImplement(5, 2, function (c, d) {
    return c - d;
});
// console.log(callbackOutput)
//---------------------------end------------------

var arr = [1, 2, 3, 4];
arr.forEach(function (val, i, arr) {
    // console.log(val,i,arr)
})
arr.forEach((e) => {
    // console.log(e)
})

function useForEach(arr,callback) {
    for (let i = 0; i < arr.length; i++){
       callback(arr[i],i,arr)
    }
}
var sum = 0;

useForEach(arr,function (val, i, arr) {
    // console.log(val,i,arr)
    sum += val;
})
// console.log(sum)
function useFind(arr,callback) {
    for (var e of arr) {
        var condition = callback(e);
        if (condition) {
            return e;
        }
    }
}
// console.log(useFind(arr, function (e) {
//     return e > 3;
// }))

function useFilter(arr) {
    var newArray = [];
    for (var i = 0; i < arr.length; i++){
        if (arr[i] % 2 === 0) {
            newArray.push(arr[i])
        }
    }
    return newArray;
}
// console.log(useFilter(arr))

//using callback on the same function-------------the main difference is we let you access to user what he wants to do
function useFilter(arr,callback) {
    var newArray = [];
    for (var i = 0; i < arr.length; i++){
        if (callback(arr[i])) {
            newArray.push(arr[i])
        }
    }
    return newArray;
}
console.log(useFilter(arr, function (val) {
    return val % 2 === 1;
}))