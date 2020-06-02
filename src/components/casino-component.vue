<template>
<div class='casino'>
   <h1>欢迎来到测试赌场</h1>
   <h4>输入从0.1到1数字(因为测试网络能拥有以太坊太小建议0.1开始玩)后从1到10选择一个筹码</h4>
   赌注: <input v-model='amount' placeholder='0'>Ether
   <ul>
     <li v-on:click='clickNumber'>1</li>
     <li v-on:click='clickNumber'>2</li>
     <li v-on:click='clickNumber'>3</li>
     <li v-on:click='clickNumber'>4</li>
     <li v-on:click='clickNumber'>5</li>
     <li v-on:click='clickNumber'>6</li>
     <li v-on:click='clickNumber'>7</li>
     <li v-on:click='clickNumber'>8</li>
     <li v-on:click='clickNumber'>9</li>
     <li v-on:click='clickNumber'>10</li>
  </ul>
  
  <img v-if='pending' id='loader' src='https://loading.io/spinners/double-ring/lg.double-ring-spinner.gif'>
  <div class='event' v-if='winEvent'>
 <p v-if='winEvent._status' id='has-won'><i aria-hidden='true' class='fa fa-check'></i> 恭喜你, 你赢了 {{winEvent._amount}} wei</p>
 <p v-else id='has-lost'><i aria-hidden='true' class='fa fa-times'></i> 抱歉你输了, 请再试一次.</p>
 
 </div>

 </div>
</template>

<script>
  import getWeb3 from '@/utils/getWeb3'
  export default {
 name: 'casino',
 data () {
 return {
 amount: null,
 pending: false,
 winEvent: null
 }
 },
 beforeCreate () {
    this.$store.dispatch('registerWeb3')
  },
 mounted () {
 this.$store.dispatch('getContractInstance')
 setTimeout(()=>{
   this.$store.state.contractInstance().events.Won({
      fromBlock: 0
   }, function(error, event){ console.log(event); })
 },500)
 },
 methods: {
    clickNumber (event) {
      this.pending = true
      console.log(event.target.innerHTML, this.amount)
      this.winEvent = null
      this.pending = true
      console.log(this.$store.state.contractInstance().methods,222)
      this.$store.state.contractInstance().methods.bet(event.target.innerHTML).send({
        gas: 300000,
        value: this.$store.state.web3.web3Instance().utils.toWei(this.amount, 'ether'),
        from: this.$store.state.web3.coinbase
      }, (error, transactionHash)=>{
        this.$store.state.contractInstance().events.Won(null,(err,result)=>{
          if (err) {
              console.log('could not get event Won()')
            } else {
              console.log(result,1112)
              console.log(result.returnValues)
              this.winEvent = result.returnValues
              this.winEvent._amount = parseInt(result.returnValues._amount, 10)
              this.pending = false
            }
        })
})
    }
  }

}


</script>

<style scoped>
.casino {
 margin-top: 50px;
 text-align:center;
}
#loader {
 width:150px;
}
ul {
 margin: 25px;
 list-style-type: none;
 display: grid;
 grid-template-columns: repeat(5, 1fr);
 grid-column-gap:25px;
 grid-row-gap:25px;
}
li{
 padding: 20px;
 margin-right: 5px;
 border-radius: 50%;
 cursor: pointer;
 background-color:#fff;
 border: -2px solid #bf0d9b;
 color: #bf0d9b;
 box-shadow:3px 5px #bf0d9b;
}
li:hover{
 background-color:#bf0d9b;
 color:white;
 box-shadow:0px 0px #bf0d9b;
}
li:active{
 opacity: 0.7;
}
*{
 color: #444444;
}
#has-won {
  color: green;
}
#has-lost {
  color:red;
}
</style>

