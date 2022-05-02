const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam( members ) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if(!Array.isArray(members))
  	return false;
  var letters = [];
  for(var i=0;i<members.length;i++){
  	if(typeof members[i] !== "string")
  		continue;
  	if(/\s/.test(members[i])){      
      var trim = members[i].replace(/\s/g, "");
      letters.push(trim[0].toLowerCase());
      continue;
    }
  	letters.push(members[i][0].toLowerCase());
  }
  letters.sort();
  var upletters = letters.map(el => el.toUpperCase());
  return upletters.join("");
}

module.exports = {
  createDreamTeam
};
