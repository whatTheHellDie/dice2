import Web3 from 'web3'
import {address, ABI} from './constants/casinoContract'

let getContract = new Promise(function (resolve, reject) {
 if (window.ethereum) {
      var web3 = window.ethereum
      web3 =  new Web3(ethereum)
    }else{
      var web3 = window.web3
      web3 = new Web3(web3.currentProvider)
    }
// let casinoContract = web3.eth.contract(ABI)
 let casinoContractInstance =  new web3.eth.Contract(ABI,address)
 // casinoContractInstance = () => casinoContractInstance
 resolve(casinoContractInstance)
})

export default getContract

