const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum( matrix ) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  var sum = 0;
  for(var i=0;i<matrix.length;i++) {
  	for(var j=0;j<matrix[i].length;j++) {
  		if(matrix[i-1] && matrix[i-1][j] == 0)
  			continue;
  		sum = sum + matrix[i][j];
  	}
  }
  return sum;
}

module.exports = {
  getMatrixElementsSum
};
