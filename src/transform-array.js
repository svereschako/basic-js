const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform( arr ) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if( !Array.isArray(arr) )
  	throw new Error("'arr' parameter must be an instance of the Array!");
  var transformed = [];
  for(var i=0;i<arr.length;i++){
  	if(arr[i] == "--discard-prev"){
  		transformed.pop();  		
  		continue;
  	}else
  	if(arr[i] == "--double-prev"){
  		if(!arr[i-1])
  			continue;  		
  		transformed.push(arr[i-1]);  		 
  		continue;		
  	}else
  	if(arr[i] == "--discard-next"){
  		i = i + 2;
  		continue;  		
  	}else
  	if(arr[i] == "--double-next"){
  		if(!arr[i+1])
  			continue;
  		transformed.push(arr[i+1]);  		
  		continue;
  	}
  	transformed.push(arr[i]);
  }
  return transformed;
}

module.exports = {
  transform
};
