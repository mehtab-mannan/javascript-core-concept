// Q1) Callback function---------------

function add(a,b) {
    console.log(a + b);
}
// add(2,3)
function callBackImplement(a,b,callback) {
    console.log('apply callback')
    callback(a,b)
}
// callBackImplement(4,5,add)

// example from namaste india-----------------------
// const radius = [1, 2, 3, 4];
// ------------system1----------
// function calculateArea() {
//     let result = [];
//     for (let i = 0; i < radius.length; i++){
//         result.push(Math.PI*radius[i]*radius[i])
//     }

//     return result;
// }
// console.log(calculateArea())
// -----------------system2----------------
// const calculateArea = function () {
//         let result = [];
//         for (let i = 0; i < radius.length; i++){
//             result.push(Math.PI*radius[i]*radius[i])
//         }
//         return result;
// }
// console.log(calculateArea())

// const calCircumference = function() {
//     let result = [];
//         for (let i = 0; i < radius.length; i++){
//             result.push(2*Math.PI*radius[i])
//         }
//         return result;
// }
// console.log(calCircumference())
// we have to avoid "do not repeat yourself"------
const radius = [1, 2, 3, 4];
const area = function (radius) {
    return Math.PI * radius * radius;
}
const circumference = function (radius) {
    return 2 * Math.PI * radius;
}
const calculataion = function (radius,callback) {
    let result = [];
         for (let i = 0; i < radius.length; i++){
            result.push(callback(radius[i]))
        }
        return result;
}
// console.log(calculataion(radius,area))

// Q) callback hell==============
const multiplyBy2 = (num,cb) => {
    setTimeout(() => {
        cb(undefined,num * 2);
    },1000)
}
// this is called "callback hell"===========
const multiply = (num) => {
    multiplyBy2(num, (err,res2) => {
        if (!err) {
            multiplyBy2(res2, (err, res3) => {
                if (!err) {
                    multiplyBy2(res3, (err, res4) => {
                        console.log(res4)
                    })
                } else {
                    console.log('second condition')
                }
            })
        } else {
            console.log('first condition')
        }
    })
}
// multiply('10')

// to fix this problem, we can use "promise" method-----
const multiplyBy3 = (num) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(num * 3);
        },1000)
   })
}
const multiple = (num) => {
    multiplyBy3(num).then(data => {
        multiplyBy3(data).then(data => {
            multiplyBy3(data).then(data => {
                console.log('data', data)
            })
        })
    }).catch(err => console.log('err', err))
}
multiple(5)


// Q2) Higher-Order Function
// Q3) Promises -----------------
// Q4) setTimeout ------

// console.log('hi')
function x() {
    setTimeout(function () {
        // console.log(i)
    },0)
    var i = 2;
}
// x();

// console.log('bye')
// Q5) Closure -----------

//=================start==========================

// Q6) map, forEach, filter, ,find, reduce---------
const arr = [1, 2, 3];
// map return a new array
const usingMap = arr.map(e => e*3)//arrow function
// console.log(usingMap)

//another example for arrow function
const btn = document.getElementById('btn');
// btn.addEventListener('click', function (e) {
//     console.log(e,'clicked')
// })
btn.addEventListener('click', ()=> {
    console.log('clicked')
})

// if i use regular function
const regularFunction = arr.map(function (e) {
    return e + 3;
})
console.log(regularFunction)

// forEach does not return any value
const usingForeach = arr.forEach((e,i,arr) => {
    // console.log(e+7,i,arr);
});
// console.log(usingForeach)
// --------------------end------------------------- //

// 7) call, apply, bind--------------
// 8) prototype
// 9) this keyword-----------
const person = {
    name:'sumaia',
    hobby: 'programming',
    info: function () {
        console.log(`my name is ${this.name} and I love ${this.hobby}`)
    },
    address: {
        country:'usa'
    }
}
// person.info();
// ========== destructuring  ================
const { name, address: { country } } = person;
// console.log(name, country)

// if user is null, how can i handle error===========
const user = null;
const { name1, address:{street}={} } = { ...user };
// const { street } = { ...address };
// console.log(name1,street)

const object = {
    message: "hello world",
    logMessage() {
        console.log(this.message)
    }
};
setTimeout(() => object.logMessage(), 1000);
object.logMessage();



// react life cycle--------
// convert class basic component to functional component--------
//component did mount--------

// useEffect(() => {
    
// },[])
// //component updates--------

// useEffect(() => {
    
// },[user])
// //component unmount--------

// useEffect(() => {
//     return (() => {
        
//     })
// },[])