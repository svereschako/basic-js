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
  	this.type = type;
  }

  encrypt(message, key) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if(!message || !key)
      throw new Error("Incorrect arguments!");
    let text = "";   

    for(let i=0, j=0;i<message.length;i++) {
      var current = message[i];
      if(isLowerCase(current)){
    	let x = ((current.charCodeAt()-97) + (key[j%key.length].charCodeAt() -97)) %26 ;
    	//x += 'A'.charCodeAt(0);
    	text+=String.fromCharCode(x+97);
      j++;
      }
      else
        text += current;  	    	
    }
    if(this.type === false)
    	text = text.split("").reverse().join("");
    return text.toUpperCase();
  }
  decrypt(encryptedMessage, key) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if(!encryptedMessage || !key)
      throw new Error("Incorrect arguments");
    let text = "";

    for(let i=0, j=0;i<encryptedMessage.length;i++) {
      var current = encryptedMessage[i];
      //if(!isLowerCase(current)){
    	let x = (current.charCodeAt(0) - key[j%key.length].charCodeAt(0)) %26;
    	//x += 'A'.charCodeAt(0);
    	text+=String.fromCharCode(x);
      //}
      //else
        //text += current;
      j++;
    }
    if(this.type === false) 
    	text = text.split("").reverse().join(""); 
    return text.toUpperCase();
  }
}

module.exports = {
  VigenereCipheringMachine
};
