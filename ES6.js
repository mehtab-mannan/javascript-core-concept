//rest parameters
// step:1------------
function arr(...rest) {
    // console.log(rest)
}
arr(1,2,3,4,);
// step:2------------
function arr(a,b,...rest) {
    // console.log(a,b,rest)
}
arr(1, 2, 3, 4,);

// in operator--check property whether exists or not 

const person = {
    name: 'john',
    age: 30,
    details: function () {
        console.log(this.name)
    },
    job: {
        title: 'developer',
        resignation:'sr.full stack developer'
    }
}
const result = 'title' in person.job;
// console.log(result)

// destructuring in object

const destructuring = {
    name:'hero alam'
}

// const { name } = destructuring;
// console.log(name)

// but if i declared variable with name before object then it will conflict
var name = 'sumaia';
const destructuring2 = {
    name: {
        common: 'Bangladesh',
        official: "people's republic of bangladesh",
        nativeName: {
            ben: {
                official: "bangladesh gonoprojatontri",
                common: "Bangladesh",
                religion: ["Islam", "Hindu"]
            }
        }
    }
};
const { name: {nativeName:{ben:{official}={official:"BD"}}={}}={} } = destructuring2;
// console.log(official)
const { name:{nativeName:{ben:{religion:[is,hd]={}}={}}={}} ={}} = destructuring2;
// console.log(is)

// destructuring in array
const arr1 = ['sumaia', 'tawhid', 'mehedi'];
const [name1] = arr1;
// console.log(name1)

const numOfArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const [,,,a,,,b] = numOfArr;
console.log(a,b)