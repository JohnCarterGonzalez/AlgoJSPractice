function rFib( n ) {
    if ( n < 2 ) {
        return n;
    }
    return rFib( n-1 ) + rFib( n-2 );
}
console.log(rFib(20));


// with the iterative or recursive functions, the iterative choice is faster
// it does not stack memory and runs in O(n) time whereas the recursive algorithm will run in O(2^n) time
