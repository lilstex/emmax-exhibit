let car = {
    make: 'bmw',
    model: '484kd',
    year: 2016,
    getPrice: function() {
        return 5000;
    },
    printDescription: function() {
        console.log(this.make + '  ' + this.model);
    }
}
car.printDescription();
console.log(car.year);

// console.log(car['year']);

var a = {
    myProperty: { b: 'hi'}
};
console.log(a.myProperty.b);