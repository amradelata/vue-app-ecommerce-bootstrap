import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css'; //import bootstrap-vue
import './assets/app.css'
import jquery from 'jquery'
import VueFirestore from 'vue-firestore'
import 'popper.js'
import {fb}   from './firebase'
import Swal from 'sweetalert2'
import 'firebase/storage'


// vueX

import store from './store.js'





Vue.use(BootstrapVue) //import bootstrap-vue
Vue.use(VueFirestore)

Vue.use(VueFirestore, {
  key: 'id',         // the name of the property. Default is '.key'.
  enumerable: true  //  whether it is enumerable or not. Default is true.
})



Vue.component('navpar', require('./components/navpar.vue').default); //import component golpaly
Vue.component('ProductList', require('./sections/ProductList.vue').default); //import component golpaly
Vue.component('learnMore', require('./sections/learnMore.vue').default); //import component golpaly
Vue.component('contact', require('./sections/contact.vue').default); //import component golpaly
Vue.component('last', require('./sections/last.vue').default); //import component golpaly
Vue.component('Login', require('./components/Login.vue').default); //import component golpaly





window.$ = window.jQuery = jquery;
window.Swal = Swal


// config toast poopup
const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
});


window.Toast = Toast




let app = '';

fb.auth().onAuthStateChanged(function(user) {

  if(!app){
    new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount("#app");
    
  }

});

