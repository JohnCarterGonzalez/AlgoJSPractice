const reverseStr = (str) => {
    //creates an empty str to hold the new str 
    let nStr = "";

    // the str.length-1 correlates to the last position of the str in the case of Hello World!, it begins with "!"
    for ( let i = str.length - 1; i >= 0; i-- ) {
        nStr += str[i];
    }
    
    // returns the new reverse str
    return nStr;
}
console.log(reverseStr("Hello, world!"));
