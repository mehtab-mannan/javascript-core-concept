function Person(name, age, prof) { //constructor function
    this.firstName = name,
        this.lastName='akter',
        this.age = age,
        this.prof = prof,
        this.details= function() {
            return this.firstName + " " + this.lastName;
            }
};

const fullDetails = new Person('sumaia', 30, 'web developer');

fullDetails.country = 'banladesh';
// console.log(fullDetails);
// console.log(fullDetails.details());

// you cannot use new property in Person object
Person.religion = 'islam';
function PersonInfo(fName, lName, age) {
    this.firstName = fName;
    this.lastName = lName;
    this.age = age;
    this.info = function () {
        return this.firstName + ' ' + this.lastName+ ' '+" I am "+this.age;
    }
}
const fullName = new PersonInfo('sumaia', 'akter', 30)
console.log(fullName.info());
//=================================

const name1 = {name:'w3school'};
let letter = '';
for (let x in name1) {
    letter+=name1[x];
}
// console.log(letter)
class Car {
    constructor(brand) {
      this.carname = brand;
    }
    present() {
      return 'I have a ' + this.carname;
    }
  }
  
  class Model extends Car {
    constructor(brand, mod) {
      super(brand);
      this.model = mod;
    }
    show() {
      return this.present() + ', it is a ' + this.model;
    }
  }
  
let myCar = new Model("Ford", "Mustang");
// console.log(myCar.show())





// class Car2 {
//     constructor(name) {
//       this.name = name;
//     }
//     static hello() {
//       return "Hello!!";
//     }
//   }
// let myCar2 = new Car2("Ford");
// console.log(Car2.hello())
  

class Car3 {
    constructor(name) {
      this.brand1 = name;
    }
    static hello(x) {
      return "Hello " + x.brand1;
    }
  }
  let myCar3 = new Car3("Ford");
//   console.log(Car3.hello(myCar3))
