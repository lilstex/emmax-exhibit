/*
function sayHello() {
    console.log('hello');
}
//sayHello();
let e = sayHello;
e();
e();
e();
*/

/*
function sayHello(name) {
    console.log('hello' + name);
}
sayHello('emma');
sayHello('austin');
sayHello('susan');
*/

function calculateTax(amount) {
    let result = amount * 0.465;
    return result;
}
let tax = calculateTax(200);
console.log(tax);