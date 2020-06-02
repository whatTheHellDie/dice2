import Web3 from 'web3'
let web3=function(){
  var web3js = window.web3
    if (window.ethereum) {
       web3js = window.ethereum
       web3 =  new Web3(ethereum)
    }else{
      
      var web3js = window.web3
      if(typeof web3js !== 'undefined') {
      var web3 = new Web3(web3js.currentProvider)
      }
    }
    return web3
}

export default web3;