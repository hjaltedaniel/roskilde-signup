import Vue from 'vue'
import App from './App.vue'
import bulma from 'bulma'
import './global-styles/index.scss';

Vue.config.productionTip = false

new Vue({
  bulma,
  render: h => h(App),
}).$mount('#app')