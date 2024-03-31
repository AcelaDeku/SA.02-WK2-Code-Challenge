function swapCase(inputString) {
    var swappedString = '';
    for (var i = 0; i < inputString.length; i++) {
        var currentChar = inputString[i];
        if (currentChar === currentChar.toUpperCase()) {
            swappedString += currentChar.toLowerCase();
        } else {
            swappedString += currentChar.toUpperCase();
        }
    }
    return swappedString;
}

var inputStr = 'The Quick Brown Fox';
var outputStr = swapCase(inputStr);
console.log(outputStr); 
