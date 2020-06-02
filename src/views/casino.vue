<template>
<div>
  <casino-component></casino-component>
 <hello-metamask/>
 <!--<network-choose></network-choose>-->
 </div>
</template>
<script>
import HelloMetamask from '@/components/hello-metamask'
import CasinoComponent from '@/components/casino-component'
import NetworkChoose from '@/components/network-choose'
export default {
   beforeCreate () {
    //console.log('registerWeb3 Action dispatched from casino-dapp.vue')
    this.$store.dispatch('registerWeb3')
  },
  components: {
    'hello-metamask': HelloMetamask,
    CasinoComponent,
    NetworkChoose
  }
}
</script>
<style scoped>
</style>