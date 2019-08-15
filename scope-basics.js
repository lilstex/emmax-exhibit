let a = 'first';
function scopeTest() {
    console.log(a);
    a = 'changed'

    if ( a != '') {
        console.log(a);
    }
}
scopeTest();
scopeTest();