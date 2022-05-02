const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
 Number.prototype.toFixedNumber = function(digits, base){
  var pow = Math.pow(base||10, digits);
  return Math.round(this*pow) / pow;
}

function dateSample(sampleActivity) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if(Number.isNaN(parseFloat(sampleActivity)))
  	return false;
  if(typeof sampleActivity !== "string")
    return false;
  var sampAct = parseFloat(sampleActivity).toPrecision(12);
  if(sampAct < 1 || sampAct > 15)
  	return false;
  
  return Math.abs(Math.floor(Math.log(sampAct/MODERN_ACTIVITY)/(0.693/HALF_LIFE_PERIOD)));
}

module.exports = {
  dateSample
};
