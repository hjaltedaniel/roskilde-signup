import Vue from 'vue'
import App from './App.vue'
import bulma from 'bulma'
import './global-styles/index.scss';
import { createProvider } from './vue-apollo'

Vue.config.productionTip = false

new Vue({
  bulma,
  apolloProvider: createProvider(),
  render: h => h(App)
}).$mount('#app')