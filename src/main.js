import Vue from 'vue'
import TestCap from './TestCap.vue'
import './main.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(TestCap)
}).$mount(
  document.body.appendChild(document.createElement('div'))
)
