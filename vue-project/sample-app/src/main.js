import Vue from 'vue'
import vuetify from './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'

Vue.config.productionTip = false

// Initialize Firebase
const config = {
  apiKey: "AIzaSyBQ8CO2yaJ6_5iRqBLR3vrqpf1LnG7Ccvo",
  authDomain: "my-address-pj-5b6eb.firebaseapp.com",
  databaseURL: "https://my-address-pj-5b6eb.firebaseio.com",
  projectId: "my-address-pj-5b6eb",
  storageBucket: "my-address-pj-5b6eb.appspot.com",
  messagingSenderId: "1018158542163",
  appId: "1:1018158542163:web:d492dd21399cbdc4b205a6",
  measurementId: "G-RS5HLHWC0J"
};
firebase.initializeApp(config);
firebase.analytics();

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
