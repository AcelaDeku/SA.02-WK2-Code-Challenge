function generateArray(start, end) {
    var result = [];
    if (start <= end) {
        for (var i = start; i <= end; i++) {
            result.push(i);
        }
    } else {
        for (var i = start; i >= end; i--) {
            result.push(i);
        }
    }
    return result;
}

console.log(generateArray(4, 7)); 
console.log(generateArray(-4, 7)); 
