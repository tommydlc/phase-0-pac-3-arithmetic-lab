function add( a, b ) {
    return a + b 
}

function subtract( a , b) {
    return a - b
}

function multiply( a , b) {
    return a * b
}

function divide( a , b ) {
    return a / b 
}

function increment(n) {
    return ++n
}

function decrement(n) {
    return --n
}
 
var number;

function makeInt(n) {
    number = parseInt(n, 10)
    return number; 
}
    
function preserveDecimal(n) {
    number = parseFloat (n, 10)
    return number;
}