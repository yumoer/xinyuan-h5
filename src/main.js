// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

// import 'babel-polyfill';
import 'es6-promise/auto'
/*import {Promise} from 'es6-promise';
Promise.polyfill();*/
import Vue from 'vue'
import App from './App'
import router from './router'
import 'mint-ui/lib/style.css'
// import iView from 'iview'
import ElementUI from 'element-ui';

import store from './store'
// import 'iview/dist/styles/iview.css'
// Vue.config.productionTip = false
import {Button} from 'mint-ui'
// 注册全局组件
Vue.component(Button.name, Button)
// Vue.component(webkit)
// Vue.use(iView)
Vue.use(ElementUI)
/* eslint-disable no-new */
  new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>',
    store,
  })

