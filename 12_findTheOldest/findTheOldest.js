const findTheOldest = function(dict) {
    return dict
        .map(x => {
            x["age"] = (x.yearOfDeath || 2023) - x.yearOfBirth;
            return x;
        })
        .sort((a, b) => b.age - a.age)[0];
};


// Do not edit below this line
module.exports = findTheOldest;
