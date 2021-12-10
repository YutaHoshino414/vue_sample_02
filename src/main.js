import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { Stage, Shape } from "@createjs/easeljs";


Vue.config.productionTip = false
Vue.use(VueAxios, axios, Stage, Shape)


new Vue({
  vuetify,
  router,
  axios,

  render: h => h(App)
}).$mount('#app')
