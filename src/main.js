import Vue from 'vue'
import TestCap from './TestCap.vue'
import './main.css'
import router from './router';

Vue.use(router);
Vue.config.productionTip = false

new Vue({
 router,
  render: h => h(TestCap)
}).$mount(
  document.body.appendChild(document.createElement('div'))
)
