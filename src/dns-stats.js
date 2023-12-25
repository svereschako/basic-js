const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats( domains ) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let res = {};
  for(let i=0;i<domains.length;i++){
  	let arr = domains[i].split(".");
  	arr.reverse();
  	let chunck = "";
  	for(let j=0;j<arr.length;j++){
  		chunck += "." + arr[j];
  		if(!(chunck in res)){
  			res[chunck] = 0;
  		for(let p=0;p<domains.length;p++){
  			console.log(chunck);
  			let array = domains[p].split(".").reverse();
  			array.unshift(".");
  			let str = array.join(".");
  			let matches = str.match(new RegExp(chunck, "g"));
  			console.log(matches);
  			if(matches){	  			
	  			//res[chunck] = 0;
	  			res[chunck] += matches.length;	  			
  			}
  		}
  		}
  	}
  }
  return res;
}

module.exports = {
  getDNSStats
};
