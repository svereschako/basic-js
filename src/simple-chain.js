const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  nodes: [],
  chain: "",  
  getLength() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.nodes.length;
  },  
  addLink( value ) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if(value==="")
      value = " ";
    let val = String(value);
    this.nodes.push(val);
    this.chain += this.chain=="" ?  "( " + val + " )" : "~~( " + val + " )";
    return this;
  },
  removeLink( position ) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if(this.nodes[position-1] === undefined || typeof position !== "number" || position === null){
      this.nodes.splice(0);
      this.chain = "";
      throw new Error("You can't remove incorrect link!");
    }
    this.nodes.splice(position-1, 1);
    this.chain = "";
    var th = this;
    //var nds = this.nodes;
    for(var i=0;i<this.nodes.length;i++){
      //this.addLink(th.nodes[i]);
      this.chain += this.chain=="" ? "( " + this.nodes[i] + " )" : "~~( " + this.nodes[i] + " )";
    }    
    return this;
  },
  reverseChain() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this.nodes.reverse();
    this.chain = "";
    var th = this;    
    for(var i=0;i<this.nodes.length;i++){
      //this.addLink(th.nodes[i]);
      this.chain += this.chain=="" ? "( " + this.nodes[i] + " )" : "~~( " + this.nodes[i] + " )";
    }  
    return this;
  },
  finishChain() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    //return this.chain.slice(0, this.chain.length-2);
    let res = this.chain;
    this.nodes.splice(0);
    this.chain = "";
    return res;    
  }
};

module.exports = {
  chainMaker
};
