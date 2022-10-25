

function Person(name,age) {
    let personDetails = Object.create(Person.prototype)
    Person.name = name,
    Person.age = age;
    return personDetails;
    
}

Person.prototype = {
    eat() {
        console.log('person is eating')
    },
    sleep() {
        console.log('person is sleeping')
    },
    play() {
        console.log('person is playing')
    }
}

const name1 = Person('sakib', 30)
// name1.eat();
// name1.play();
// name1.sleep();

//-----------start----prototype--------------

// function test() { }
// console.dir(test)


//------------initiate constructor---------------//
function Person(firstName,lastName,age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}
// if we want to add new property from outside of the function then I have to use "constructor.prototype.property"
Person.prototype.naionality = 'english';
Person.prototype.fullName = function () {
    return ('my name is '+this.firstName + "mannan " + this.lastName);
}
const person1 = new Person('sumaia', 'akter',30);


// console.log(person1.fullName())
// console.log(person1)
