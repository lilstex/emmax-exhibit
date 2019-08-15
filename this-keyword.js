/* let car = {
    make: 'bmw',
    model: '484kd',
    year: 2016,
    getPrice: function() {
        return 5000;
    },
    printDescription: function() {
        console.log(this.make + '  ' + this.model);
    }
} */

/* function first() {
    return this;
}
console.log(first() === global); */

function second() {
    'use strict';
    return this;
}
console.log(second() === global);
console.log(second() === undefined);