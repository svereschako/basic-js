const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles( names ) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  var arr = [];
  
  names.forEach(function(el) {
  	var n = 1;  	
  	if(arr.includes(el)){
  		if(/\([0-9]{1}\)/.test(el))
  			arr.push(el + "(" + el[el.length-2] + ")" );
  		else{
  			while(arr.includes(el + "(" + n + ")")){
  				n++;
  			}
  			arr.push(el + "(" + n + ")");
  		}
  			
  	}else
  		arr.push(el);
  });
  return arr;
}

module.exports = {
  renameFiles
};
