// const name = 'smart phone';
// const price = 15000;
// const quantity = 5;

function totalprice(name, price, quantity) {
    const total = price * quantity;
    // console.log(`total price of ${quantity} ${name} is ${total}`);
}
// totalprice(name, price, quantity);

//================
// const name = 'keyboard';
// const price = 15000;
// const quantity = 5;

// function totalprice(name, price, quantity) {
//     const total = price * quantity;
//     console.log(`total price of ${quantity} ${name} is ${total}`);
// }
// totalprice(name, price, quantity);
//---------------start oop--------------------

const smartPhone = {
    name:'smartphone',
    price: 15000,
    quantity: 5,
    totalPrice: function () {
        const total = this.price * this.quantity;
        console.log(`total price of ${this.quantity} ${this.name} is ${total}`);
    }
}
smartPhone.totalPrice()

const headPhone = {
    name:'headPhone',
    price: 500,
    quantity: 3,
    totalPrice: function () {
        const total = this.price * this.quantity;
        console.log(`total price of ${this.quantity} ${this.name} is ${total}`);
    }
}
headPhone.totalPrice()
//-----this is factory pattern-------------------
function product(name,price,quantity) {
    return {
        name,
        price,
        quantity,
        tax:10,
        totalPrice: function () {
            return this.price * this.quantity;
            // OR----------------------
            // const total = this.price * this.quantity;
            // console.log(`total price of ${this.quantity} ${this.name} is ${total}`);
        }
    }
};
const smartPhone2 = product('smartPhone 2', 23000, 4);
const headPhone2 = product('Head Phone', 3000, 4);

// console.log(smartPhone2,headPhone2)
// console.log(headPhone2.totalPrice())

//----------constructor pattern----------------

function Product(name,price,quantity) {
    // console.log(this);
    this.productName = name;
    this.productPrice = price;
    this.productQuantity = quantity;
    this.totalPrice = function () {
        const total = price * quantity;
            console.log(`total price of ${quantity} ${name} is ${total}`);
    }
}
const smartPhone3 = new Product('smartPhone 3', 23000, 4);
console.log(smartPhone3)
console.log(smartPhone3.totalPrice());