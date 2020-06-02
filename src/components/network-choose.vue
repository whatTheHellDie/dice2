<template>
  
</template>

<script>
  import {mapState} from 'vuex'
  export default{
    computed: mapState({
      network: state => state.web3.networkId,
    }),
    watch:{
      network(){
        
      }
    },
    mounted(){
      setTimeout(()=>{
        if(this.network!=3){
          alert("只支持Ropsten测试网络,请切换。若已在相关网络，请登录")
        }
      },1000)
    }
  }
</script>

<style>
</style>