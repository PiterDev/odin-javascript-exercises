const findTheOldest = function(people) {
    return people.sort((personA, personB) => {
        let currentYear = new Date().getFullYear();
        let ageA = "yearOfDeath" in personA ? personA.yearOfDeath - personA.yearOfBirth : currentYear - personA.yearOfBirth;
        let ageB = "yearOfDeath" in personB ? personB.yearOfDeath - personB.yearOfBirth : currentYear - personB.yearOfBirth;
        return ageB-ageA;
    })[0];
};

// Do not edit below this line
module.exports = findTheOldest;
