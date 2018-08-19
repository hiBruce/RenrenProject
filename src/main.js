// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex'


import directive from "../static/lib/3rd/vue-directive/index.js"
import  aYin from "../static/lib/aYin/aYin.js"
import bootstrap from "bootstrap"
import JQmCurstomScrollBar from "../static/lib/3rd/jqScrollbar/jquery.mCustomScrollbar.js" //此方法以require方式引入了jquery.mousewheel.js，因此将jquery.mousewheel.js以npm install的方式安装了
import publicJs from '../static/lib/init/public'
import pagination from '../static/lib/3rd/page/pagination.js'

import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './assets/css/main.less'
import '../static/lib/aYin/aYin.css'
// import '../static/lib/3rd/zyMedia/zy.media.min.css'
import '../static/lib/3rd/jqScrollbar/jquery.mCustomScrollbar.min.css'
import './assets/css/theme.less'
import '../static/lib/3rd/fontawesome/web-fonts-with-css/css/fontawesome-all.min.css'


Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
