// function square(x) {
//     console.log(x*x)
// }
// square(4);

// let y = square;
// y(5);

// function higherOrderFunction(num, callback) {
//     callback(num);
// }
// higherOrderFunction(6, square);



// function doThing(x) {
//    x('sumaia');
// }

// function hello(name) {
//     console.log("hello",name)
    
// }
// doThing(hello);

const task1 = (callback) => {
    console.log("task one");
    let name = 'sumaia'
    callback(name);
}
const task2 = (callback,name) => {
    setTimeout(() => {
        console.log("task2 = data loading",name);
        callback();
    }, 3000)
};

const task3 = (callback) => {
    setTimeout(() => {
        console.log('task3');
        callback();
    }, 3000)
};
const task4 = (callback) => {
    setTimeout(() => {
        console.log('task4')
        callback()
    },3000)
}
const task5 = () => {
    console.log('task5')
    
}

// task1(function f1() {
//     task2(function f2() {
//         task3(function f3() {
//             task4(function f4() {
//                 task5()
//             })
//         });
// });
// });

//  OR ----------we can use anonymous function--
// task1(()=> {
//     task2(()=> {
//         task3(()=>  {
//             task4(()=>  {
//                 task5()
//             })
//         });
// });
// });
// task2();
// task3();

function regularFunction(callback) {
    // console.log('regular function')
    callback('sumaia')
}

function callbackFunction(callback) {
    console.log('callback function', callback)
}

regularFunction(callbackFunction);