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
    if(value=="underfined")
      value = " ";

    this.nodes.push(value);
    this.chain = this.chain + "( " + value + " )~~";
    return this;
  },
  removeLink( position ) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if(typeof position !== "number" || !this.nodes[position] || !(!isNaN(position) && parseInt(Number(position)) == position &&  !isNaN(parseInt(position, 10))))
      throw new Error("You can't remove incorrect link!");
    this.nodes.splice(position, 1);
    this.chain = "";
    var th = this;
    //var nds = this.nodes;
    for(var i=0;i<this.nodes.length;i++){
      //this.addLink(th.nodes[i]);
      this.chain = this.chain + "( " + this.nodes[i] + " )~~";
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
      this.chain = this.chain + "( " + this.nodes[i] + " )~~";
    }  
    return this;
  },
  finishChain() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.chain.slice(0, this.chain.length-2);    
  }
};

module.exports = {
  chainMaker
};
