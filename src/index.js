module.exports = function reverse (n) {
    
    if (n < 0) {
        n = (-1)*n; 
    }
    
    let str = n + "";
    str = str.split('').reverse().join('');

    return str;
}
