// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { store } from './store/'
import httpRequest from './utils/httpRequest' // api: https://github.com/axios/axios
import web3 from './utils/web3'
Vue.config.productionTip = false
import './assets/scss/main.scss'
import 'font-awesome/css/font-awesome.css'
import Dialog from './components/common/Dialog' //注册全局pc手机共用表格
import {ABI} from '@/utils/constants/casinoContract'
if( window.web3||window.ethereum){
  const abiDecoder = require('abi-decoder'); // NodeJS
  abiDecoder.addABI(ABI);
  Vue.prototype.$abiDecoder = abiDecoder;
}
Vue.prototype.$abi=ABI;
import GeminiScrollbar from 'vue-gemini-scrollbar'
Vue.use(GeminiScrollbar)

import { ethers } from 'ethers';
Vue.prototype.$ethers = ethers;
/* eslint-disable no-new */
Vue.prototype.$http = httpRequest // ajax请求方法
Vue.prototype.$web3 = web3 // ajax请求方法
import {add,sub,mul,div} from '@/utils/compute' //小数点后两位以上加减乘除
Vue.prototype.$add = add;
Vue.prototype.$sub = sub;
Vue.prototype.$mul = mul;
Vue.prototype.$div = div;
const BigNumber = require('bignumber.js');
Vue.prototype.$bignumber = BigNumber;
Vue.use(Dialog)

new Vue({
  el: '#app',
  router,
   store,
  components: { App },
  template: '<App/>'
})
