import Vue from 'vue'
import router from './router/router' // 라우터
// import VueProgressBar from 'vue-progressbar'

import './assets/reset.css'; // reset css
import './assets/font.css'; // font css

import App from './App.vue' // app

Vue.config.productionTip = false;

// const options = {
//   color: 'rgb(63, 63, 64)',
//   failedColor: 'red',
//   thickness: '5px',
//   transition: {
//     speed: '1s',
//     opacity: '0.2s',
//     termination: 3000
//   },
//   autoRevert: true,
//   location: 'top',
//   inverse: false
// }

// Vue.use(VueProgressBar, options)

new Vue({
  router, // 뷰 인스턴스에 라우터 추가
  render: h => h(App), // App.vue
}).$mount('#app') // $mount는 인스턴스를 화면에 붙여주는 역할 수행 (Vue 인스턴스 생성 시, el과 같은 역할)

