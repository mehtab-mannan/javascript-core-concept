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
    return function () {
        let counter = 2;
        counter -= 1;
        return counter;
    }
});
const result = divide();
// console.log(result())
// console.log(divide())
// console.log(divide())
// console.log(divide())

function business(capital) {
    return function (interest) {
        return capital * interest / 100;
    }
}
const businessCapital = business(100000);
// console.log(businessCapital(25));


function X() {
    console.log('hello');
    const bye='Bye'
    setTimeout(() => {
        console.log(bye)
    }, 2000)
    console.log('how are you')
}
// X();

const closure = () => {
    console.log('hello')
    for (var i = 1; i <= 5; i++){
        setTimeout(function () {
            console.log(i)
        },i*1000)
    };
    console.log('bye')
}
// closure()
// to solve the above issue we can use "let" or the system bellow that is done.

function y() {
    console.log('hello');
    for (var i = 0; i <= 5; i++){
        function closure(a) {
            setTimeout(function () {
                console.log(a)
            },a*1000)
        }
        // closure(i)
    }
};
// y()


// lexical scope------------------>>>>>>>>>>>>>
var scope = "global scope";
function check() 
{
    var scope = "local scope"; 
    function f() 
    { 
        // console.log(scope)
         return scope; 
    }
    // console.log(f())
    // return f;
    f();
}
// console.log(check)
check();
// example:2-----lexical scope-------------
function foo() {
var f = "foo";
    function doo() {
        // console.log(f);
    }
    doo();
}
foo();//print foo

// let s1 = 'scope';
function lexical() {  //parent function
    let l = 'lexical';
    s1='lk'
    function scope() { //child function
        let f = 'f';

        console.log(s1)
        console.log(f)
    }
    scope();
    console.log(l)
  
}
lexical()
console.log(s1)

// closure--------------->>>>>>>>>>>>>>>>>>>

function foo() {

    var f = "foo";
    function doo() {
        console.log(f);
    }
    return doo;
}
var afunct = foo();
afunct();

function add(num1) {

    function addintern(num2) {
        return num1 + num2;
    }

    return addintern;
}

var sum9 = add(7)(2);
console.log(sum9);
var sum99 = add(77)(22);
console.log(sum99);