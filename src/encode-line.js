const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine( str ) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  var obj = {};
  for(var i=0;i<str.length;i++) {
  	if(str[i] in obj)
  		continue;
  	var count = 1;
  	for(var j=i+1;j<str.length;j++) {
  		if(str[j] == str[i])
  			count++;
  	}
  	obj[str[i]] = count;
  }
  var res = "";
  for(var p in obj) {
  	res = res + (obj[p] == 1 ? "" : obj[p]) + p;
  }
  return res;
}

module.exports = {
  encodeLine
};
