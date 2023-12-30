const palindromes = function (word) {
    let invalidChar = [" ", "!", ".", ","];

    newStr = word.toLowerCase().split("");
    for(let i = 0; i < newStr.length; i++) {
        if(invalidChar.includes(newStr[i])) {
            newStr.splice(i, 1);
            i--;
        }
    }
    for(let i = 0; i < newStr.length / 2; i++) {
        if(newStr[i] !== newStr[newStr.length - 1 - i]) {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
