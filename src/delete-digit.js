const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit( n ) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  var str = String(n);
  var max = 0;
  for(var i=0;i<str.length;i++) {
  	var arr = str.split("");
  	arr.splice(i, 1);
  	var substr = arr.join(""); 	
  	if(substr > max)
  		max = substr;
  }
  return Number(max);
}

module.exports = {
  deleteDigit
};
