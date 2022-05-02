const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater( str, options ) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if(typeof str !== "string") 	
 	str = str + ""; 
  if(options.addition === null)
  	options.addition = "null";
  if(options.addition === false)
  	options.addition = "false";  
  if( options.addition && typeof options.addition !== "string") 	
 	options.addition = options.addition + "";

  function add(){
  	var res = "";
  	if(options.addition){
  		if(options.additionRepeatTimes){
	  		for(var i=0;i<options.additionRepeatTimes;i++){
	  			res += options.addition + (options.additionSeparator ? options.additionSeparator : "|");
	  		}
	  	}else
	  		res = options.addition + (options.additionSeparator ? options.additionSeparator : "|");
		var len = options.additionSeparator ? options.additionSeparator.length : 1;
		res = res.slice(0, res.length - len);
  	}  	
  	return res;
  }

  var result = "";
  if(options.repeatTimes){
  	for(var i=0;i<options.repeatTimes;i++){
  		result += str + add() + (options.separator ? options.separator : "+");

  	}
  	var len = options.separator ? options.separator.length : 1;
  	result = result.slice(0, result.length-len);
  }else{
  	result = str + add();
  }
  return result;
}

module.exports = {
  repeater
};
