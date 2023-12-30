const findTheOldest = function(dict) {
    let age = -1;
    let oldestPerson = ""
    for(const person of dict) {
        let newAge = (person.yearOfDeath || 2023) - person.yearOfBirth;
        if(newAge > age) {
            age = newAge;
            oldestPerson = person;
        }
    }
    return oldestPerson;

};

// Do not edit below this line
module.exports = findTheOldest;
