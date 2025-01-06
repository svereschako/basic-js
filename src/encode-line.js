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
  let res = "";
  for(let i=0;i<str.length;i++){
    if(str[i] == str[i+1]){
      let j = i + 1;
      let count = 1;      
      while(str[i] == str[j]){
        count++;
        i++;
        j++;
      }      
      res += count + str[i];
    }else
      res += str[i];
  }
  return res;
}

module.exports = {
  encodeLine
};
