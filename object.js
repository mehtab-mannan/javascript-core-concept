const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};
// console.log(person.firstName);
// console.log(person['lastName']);

const car = {
    name: "toyota",
    color: 'white',
    price: 30000,
    details: function () {
        return this.name + ' ' + this.price;
    }
};

// console.log(car.details());
// if i declare a variable outside the object
var name = 'sumu';
const details = {
    firstName: "John",
    name: name,
    lastName: "Doe",
    age: 50,
    eyeColor: "blue",
    info: function () {
        console.log(this.name);
    },
    car :{
        name: "toyota",
        color: 'white',
        price: 30000,
        detail: function () {
            console.log(this.price)
            return this.name + ' ' + this.color;
        }
    }
};
// we can not access property this way-------
var lName = 'lastName'
// console.log(details.lName)
// console.log(details[lName])
// console.log('age' in details)
// console.log(lName in details)

//------------------------------//
delete details.eyeColor; // delete property
// details.info();
// details.car.detail();
// console.log(details.car.detail());

// traverse or loop-----------

// var obj = {
//     a: 10,
//     b: 40,
//     c: 12,
//     d:20
// }
// var obj1 = {
//     a: 10,
//     b: 40,
//     c: 12,
//     d:20
// }
for (let prop in obj) {
    // console.log(prop); // return property name
    // console.log(obj[prop]) // return property value
}

// method of object--------------
// console.log(Object.keys(obj))
// console.log(Object.values(obj))
// console.log(Object.entries(obj))
var obj3 = new Object();
// console.log(obj3)
// compare between two object--------
// var obj = {
//     a: 10,
//     b: 40,
//     c: 12,
//     d:20
// }
// var obj1 = {
//     a: 10,
//     b: 40,
//     c: 12,
//     d:20
// }
//--------------------
var obj = {
    a: 10,
    b: 40
};
const arr = Object.values(obj); // --return an new array
// console.log(arr)
// var obj1 = obj;
var obj1 = Object.assign({},obj);
var obj1 = Object.assign([],obj);
obj1.a = 'ten';
// console.log(obj)
// console.log(obj1)
// console.log(JSON.stringify(obj)===JSON.stringify(obj1))
// console.log(obj)
// console.log(obj1 == obj)

const person1 = {
    name: "John",
    age: 30,
    city: "New York"
  };
  
  let txt = "";
for (let x in person1) {
    // console.log(x); // -----return keys
    txt += person1[x] + " "; // ------return values
    txt += person1.x + " "; // ----return undefined
};
//   console.log(txt)