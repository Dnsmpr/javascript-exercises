const getTheTitles = function(dict) {
    let keys = [];
    for(const item of dict) {
        keys.push(item.title);
    }
    return keys;
};

// Do not edit below this line
module.exports = getTheTitles;
