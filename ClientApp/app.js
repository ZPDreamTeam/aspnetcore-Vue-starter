import Vue from 'vue'
import router from './router'
import store from './store'
import App from './src/app'

const app = new Vue({
  store,
  router,
  ...App
})

export {
  app,
  router,
  store
}
