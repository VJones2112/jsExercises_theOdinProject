// Iterate over objects in an array
// Calculate age
    // If yearOfDeath: subtract year of Birth
    // If no death, use new Date().getFullYear();
// Sort by age
// Return name of oldest person

let findTheOldest = function(arr) {
    return arr.reduce((oldest, current) => {
        let oldie = calcAge(oldest.yearOfBirth, oldest.yearOfDeath);
        let curr = calcAge(current.yearOfBirth, current.yearOfDeath);
        return oldie < curr ? current : oldest;
      });
};

let calcAge = (birth, death) => {
    if (!death) {death = new Date().getFullYear()};
    let age = death - birth;
    return age;
  };

module.exports = findTheOldest
