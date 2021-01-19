import Vue from 'vue'
import Vuex from 'vuex'
import Router from './router/router' // 라우터
import App from '../src/app/App.vue' // app

import './assets/reset.css'; // reset css
import './assets/font.css'; // font css

import jsonLabel from './assets/jsonLabel.json';

Vue.prototype.$jsonLabel = jsonLabel;

Vue.config.productionTip = false;
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    isInitMotionState: false,
    isCurrentRouter: 'app.vue-init',
  },
  mutations: {
    mutateInitMotionState (state, bool) {
      state.isInitMotionState = bool;
    },
    mutateCurrentRouter (state, string) {
      state.isCurrentRouter = string;
    }
  }
})

new Vue({
  store,
  router: Router,
  render: h => h(App), // App.vue
}).$mount('#app') // $mount는 인스턴스를 화면에 붙여주는 역할 수행 (Vue 인스턴스 생성 시, el과 같은 역할)

