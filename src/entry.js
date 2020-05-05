import Vue from 'vue'
import router from './router/router' // 라우터

import './assets/reset.css'; // reset css
import './assets/font.css'; // font css

import App from './App.vue' // app

// 전역 컴포넌트
// import Menu from './component/menu'
// Vue.component(Menu.name, Menu);

Vue.config.productionTip = false;

new Vue({
  router, // 뷰 인스턴스에 라우터 추가
  render: h => h(App), // App.vue
}).$mount('#app') // $mount는 인스턴스를 화면에 붙여주는 역할 수행 (Vue 인스턴스 생성 시, el과 같은 역할)

