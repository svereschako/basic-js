const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
function isLetter (str) {
  return str.length === 1 && str.match(/[a-zA-Z]/i)
}

 function isLowerCase(letter){
  var l = letter.charCodeAt();
  if(l >= 97 && l <= 122){
    return true;
  }else{
    return false;
  }
};
function isUpperCase (character) {
  if (character === character.toUpperCase()) {
    return true
  }
  /*if (character === character.toLowerCase()) {
    return false
  }*/
  return false;
}
class VigenereCipheringMachine {
  consctuctor(type) {
    if(!type)
      throw new Error("Incorrect arguments!");
  	this.type = type;
  }

  encrypt(message, key) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if(!message || !key)
      throw new Error("Incorrect arguments!");
    let result = ''
     
      for (let i = 0, j = 0; i < message.length; i++) {
        const c = message.charAt(i)
        if (isLetter(c)) {
          if (isUpperCase(c)) {
            result += String.fromCharCode((c.charCodeAt(0) + key.toUpperCase().charCodeAt(j) - 2 * 65) % 26 + 65) // A: 65
          } else {
            result += String.fromCharCode((c.charCodeAt(0) + key.toLowerCase().charCodeAt(j) - 2 * 97) % 26 + 97) // a: 97
          }
        } else {
          result += c
        }
        j = ++j % key.length
      }
      //return result
    if(this.type === false)
    	result = result.split("").reverse().join("");
    return result.toUpperCase();
  }
  decrypt(message, key) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if(!message || !key)
      throw new Error("Incorrect arguments");
    let result = ''
     
      for (let i = 0, j = 0; i < message.length; i++) {
        const c = message.charAt(i)
        if (isLetter(c)) {
          if (isUpperCase(c)) {
            result += String.fromCharCode(90 - (25 - (c.charCodeAt(0) - key.toUpperCase().charCodeAt(j))) % 26)
          } else {
            result += String.fromCharCode(122 - (25 - (c.charCodeAt(0) - key.toLowerCase().charCodeAt(j))) % 26)
          }
        } else {
          result += c
        }
        j = ++j % key.length
      }
      //return result
    if(this.type === false) 
    	result = result.split("").reverse().join(""); 
    return result.toUpperCase();
  }
}

module.exports = {
  VigenereCipheringMachine
};
