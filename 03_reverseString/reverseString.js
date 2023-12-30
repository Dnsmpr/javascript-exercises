const reverseString = function(word) {
    let charArray = word.split("");
    for(let i = 0; i < word.length / 2; i++) {
        temp = word[i];
        charArray[i] = charArray[word.length - i - 1];
        charArray[word.length - i - 1] = temp;
    }
    return charArray.join("");
};

// Do not edit below this line
module.exports = reverseString;
