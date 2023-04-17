const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount( s1, s2 ) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  var arr1 = s1.split("");
  var arr2 = s2.split("");
  var count = 0;
  for(var i=0;i<arr1.length;i++){
  	for(var j=0;j<arr2.length;j++){
  		if(arr2[j] == arr1[i]){
  			arr1.splice(i, 1);
  			arr2.splice(j ,1);
  			count++;
  			j--;
  			i--;  			
  			continue;
  		}
  	}
  }
  return count;
}

module.exports = {
  getCommonCharacterCount
};
