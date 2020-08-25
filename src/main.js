import Vue from 'vue'
import App from './App.vue'
import router from './router'
import * as firebase from 'firebase';

import 'bootstrap/dist/css/bootstrap.min.css'
import '@/assets/css/main.css'

// Vue Directive registered
import "@/utils/directive";
// Vue Filter registered
import "@/utils/filter";

Vue.config.productionTip = false

// Use your own Firebaseconfig here

const firebaseConfig = {
  apiKey: "**",
  authDomain: "dev-vue-d3f3f.firebaseapp.com",
  databaseURL: "https://dev-vue-d3f3f.firebaseio.com",
  projectId: "dev-vue-d3f3f",
  storageBucket: "dev-vue-d3f3f.appspot.com",
  messagingSenderId: "845233334001",
  appId: "1:845233334001:web:273a69605b414deaa1ab50",
  measurementId: "G-TKS8QT01PL"
}

firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')