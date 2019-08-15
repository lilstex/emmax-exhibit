/*
function one() {
    return 'one';
}
let value = one;
//console.log(value);
console.log( typeof value);

// string
// bollean
// number
// undefined
// function
*/

function two() {
    return function() {
        console.log('two');
    }
}
let myFunction = two();
myFunction();