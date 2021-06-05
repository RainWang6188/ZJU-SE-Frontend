import Vue from 'vue'
import App from './App'
import store from './common/store.js'
import './css/iconfont.css'
import './css/ui-right/iconfont.css'
import './css/ui-doctor/iconfont.css'
import './css/ui-boxh/iconfont.css'

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	store,
    ...App
})
app.$mount()
