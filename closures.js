function sayHello(name) {
    return function() {
        console.log('howdy '  +  name);
    }
}
let emma = sayHello('emma');
let lopo = sayHello('lopo');
let heaty = sayHello('heaty');

emma();
lopo();
heaty();