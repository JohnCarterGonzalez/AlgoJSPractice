Number.prototype.isPrime = () => {
    if (this < 2){
        return '${this} is not a prime number';
    }
    if( this % 2 === 0 || this % 3 === 0 ) {
        return false;
    }
    return true;
}

const { performance } = require('perf_hooks');
const start = performance.now();
let primeCount = 0;
let num = 2; // for math reasons, 1 is considered prime
while( primeCount < 1e4 ) {
    if( num.isPrime() ) {
        primeCount++;
    }
     num++;
}
console.log(`The 10,000th prime number is ${num-1}`);
console.log(`This took ${performance.now() - start} milliseconds to run`);
