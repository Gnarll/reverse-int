module.exports = function reverse (n) {
    if(n < 0 ) n *= -1;
    let arr = String(n).split('');
    arr.reverse();
    let str = arr.join('');
    return Number(str);
}
