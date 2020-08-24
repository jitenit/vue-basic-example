import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import 'bootstrap/dist/css/bootstrap.min.css'
import '@/assets/css/main.css'

const firebaseConfig = {
  apiKey: "####",
  authDomain: "#",
  databaseURL: "###",
  projectId: "dev-vue-d3f3f",
  storageBucket: "dev-vue-d3f3f.appspot.com",
  messagingSenderId: "845233334001",
  appId: "1:845233334001:web:273a69605b414deaa1ab50",
  measurementId: "G-TKS8QT01PL"
}

firebase.initializeApp(firebaseConfig);
// firebase.analytics();

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
