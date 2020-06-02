<template>
  <div class='metamask-info'>
    <p v-if="!hasMetaMask" id="no-metamask"><i aria-hidden="true" class="fa fa-times"></i>未安装DApp浏览器或插件</p>
    <div v-if="network">
    <p>当前网络: {{ network?network:"--" }}</p>
    <p v-if="networkId!=3" style="color: red;"><i aria-hidden="true" class="fa fa-times"></i>只支持Ropsten测试网络,请切换。若已在相关网络，请登录</p>
    <p>用户账户: {{ coinbase?coinbase:"--" }}</p>
    <p>余额: {{ ethBalance?ethBalance:"--" }} Eth</p>
    </div>
  </div>
</template>

<script>
import {NETWORKS} from '../utils/constants/networks'
import {mapState} from 'vuex'
export default {
  name: 'hello-metamask',
  computed: mapState({
    hasMetaMask:state=>state.web3.hasMetaMask,
    isInjected: state => state.web3.isInjected,
    network: state => NETWORKS[state.web3.networkId],
    networkId:state => state.web3.networkId,
    coinbase: state => state.web3.coinbase,
    balance: state => state.web3.balance,
    ethBalance: state => {
      if (state.web3.web3Instance !== null) return state.web3.web3Instance().utils.fromWei(state.web3.balance.toString(), 'ether')
    }
  }),
}
</script>

<style scoped>
.metamask-info {
  text-align:center;
}
#has-metamask {
  color: green;
}
#no-metamask {
  color:red;
}</style>