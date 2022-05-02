const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  constructor() {
  	//this.count = 0;
  	this.calculateDepth = this.calculateDepth.bind(this);
  }
  
  calculateDepth( arr ) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    
    /*if(arr && Array.isArray(arr))
    	this.count++;
    for(var i=0;i<arr.length;i++){
    	if(Array.isArray(arr[i])){
    		//this.count++;
    		this.calculateDepth(arr[i]);
    	}
    }
    return this.count;*/
    return Array.isArray(arr) ? 1 + Math.max(0, ...arr.map(this.calculateDepth)) : 0;
  }
}

module.exports = {
  DepthCalculator
};
