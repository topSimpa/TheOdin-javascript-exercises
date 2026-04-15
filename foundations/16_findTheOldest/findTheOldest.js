const findTheOldest = function(deceased) {
    const currentYear  = new Date().getFullYear();

    return deceased.reduce(
        (oldest, currentPerson) => {
            const oldestAge = (oldest.yearOfDeath || currentYear) - oldest.yearOfBirth;
            const currentPersonAge = (currentPerson.yearOfDeath || currentYear) - currentPerson.yearOfBirth;
            if (oldestAge > currentPersonAge) {
                return oldest;
            } 
            return currentPerson;
        }
    );
};

// Do not edit below this line
module.exports = findTheOldest;
