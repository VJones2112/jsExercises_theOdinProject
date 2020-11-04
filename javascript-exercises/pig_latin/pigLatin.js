function translate() {
	let vowels = /[aeiou]/;
    if (str[0].match(vowels)) {
      return str.concat('way');
  } else {
      let consonantCluster = str.match(/^[^aeiou]+/)[0];
      return str.substr(consonantCluster.length) + consonantCluster + 'ay';
  }
}


module.exports = {
	translate
}

