var reverse = function(x) {
    // Convert the integer to string, then to an array of characters, reverse it, and join it back to a string.
    let reversedStr = x.toString().split('').reverse().join('');
    
    // If the number was negative, adjust for that (the '-' character would be at the end after reversing).
    if (x < 0) {
        reversedStr = '-' + reversedStr.slice(0, reversedStr.length - 1);
    }
    
    // Convert the reversed string back to a number.
    let reversedNum = parseInt(reversedStr);
    
    // Check if the reversed number is out of the 32-bit signed integer range.
    if (reversedNum > Math.pow(2, 31) - 1 || reversedNum < -Math.pow(2, 31)) {
        return 0;
    }
    
    return reversedNum;
};
