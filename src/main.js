import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import App from './App.vue'
import router from './router'
import store from './store/store'


import axios from 'axios'
Vue.prototype.$axios = axios
axios.defaults.baseURL = '/'

import config from './config/config'
import token from './utils/token'
import login from './utils/loginUtils'
import querystring from 'querystring'

Vue.use(ElementUI, {
    size: 'small'
});

Vue.config.productionTip = false;
Vue.prototype.$ajax = axios;
Vue.prototype.$config = config;
Vue.prototype.$token = token;
Vue.prototype.$login = login;
Vue.prototype.$querystring = querystring;

axios.defaults.headers.common['Content-Type'] = 'application/json;charset=UTF-8';

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');