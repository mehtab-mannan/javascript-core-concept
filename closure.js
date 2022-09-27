function add() {
    let a = 4; // "a" is a local variable
    return a * a;
}
// console.log(add());
//---------rule no.1--------------
// but a function can also get access from outside of the function---like--
let a = 3;  // "a"is  global variable
function add() {
    return a * a;
}
// console.log(add());

//------rule no.2----------
// Variables created without a declaration keyword (var, let, or const) are always global, even if they are created inside a function.

function add() {
    a = 5;
    return a * a;
}
// console.log(add());
//-----------------------------------------------
// initiate counter
let counter = 0;
// function to increment counter
function add() {
    let counter = 0;
    counter += 1;
}
// in this way we will get 0;
// console.log(add());
// console.log(add());
// console.log(add());
//-------------------------------------------//


// but if we remove global variable and added return value, then we get 1; 
// function to increment counter
function add() {
    let counter = 0;
    counter += 1;
    return counter;
}
// console.log(add());
// console.log(add());
// console.log(add());
//-------------------------------------------//

// javasrcipt inner function can solve this problem-----

function add() {
    let counter = 0;
    function plus() {
        counter +=1
    }
    plus();
    return counter;
}

// console.log(add());
// console.log(add());
// console.log(add());
//----------end this part--------------------//

//-------------closure---------------
const sum = (function () {
    let counter = 0;
    return function () {
        counter += 1;
        return counter
    }
})
    ();

// console.log(sum());
// console.log(sum());
// console.log(sum());
//----------end this part--------------------//   
let count = 0;
function added() {
    // let count = 0; //to avoid this problem i have to use closure;
    count += 1;
    return count;
}
// console.log(added())
// console.log(added())
// console.log(added())

const divide = (function () {
    let counter = 2;
    return function () {
        counter -= 1;
        return counter;
    }
})();
console.log(divide())
console.log(divide())
console.log(divide())

function business(capital) {
    return function (interest) {
        return capital * interest / 100;
    }
}
const businessCapital = business(100000);
// console.log(businessCapital(25));
