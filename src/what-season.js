const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason( date ) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if(!date)
    return "Unable to determine the time of year!";
  if(date instanceof Date){
    if(isNaN(date))
      throw new Error("Invalid date!");
  }else
    throw new Error("Invalid date!");
    
  if (!typeof date === 'object' &&
    date === null &&
    typeof date.getTime !== 'function' &&
    isNaN(date)) {
    throw new Error ("Invalid date!");
  }
  
  
  var winter = [0, 1, 11];
  var spring = [2, 3, 4];
  var summer = [5, 6, 7];
  var autumn = [8, 9 ,10];

  if(winter.includes(date.getMonth()))
  	return "winter";
  else if(spring.includes(date.getMonth()))
  	return "spring";
  else if(summer.includes(date.getMonth()))
  	return "summer";
  else if(autumn.includes(date.getMonth()))
  	return "autumn";
}

module.exports = {
  getSeason
};
