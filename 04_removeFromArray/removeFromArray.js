const removeFromArray = function(list, ...Args) {
    for(const arg of Args) {
        for(let i = 0; i < list.length; i++) {
            if(list[i] === arg) {
                list.splice(i, 1);
            }
        }
    }
    return list;
};

// xxx0
// Do not edit below this line
module.exports = removeFromArray;
