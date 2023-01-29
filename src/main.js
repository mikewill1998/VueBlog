import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import jQuery from 'jquery'
import 'popper.js'
import 'bootstrap'
import './assets/app.css'
import Routes from './routes'

Vue.use(VueResource);
Vue.use(VueRouter);

const newrouter = new VueRouter({
  routes: Routes,
  mode: 'history'
});


Vue.directive('theme',{
  bind(el, binding){
    if (binding.value == 'wide'){
      el.style.maxWidth = '1200px';
    } else if (binding.value == 'narrow'){
      el.style.maxWidth = '800px';
    }
    if (binding.arg == 'column'){
      el.style.background = '#ddd';
      el.style.padding = '20px';
    }
  }
})
// filter
// Vue.filter('to-uppercase', function(value){
//   return value.toUpperCase();
// })
window.$ = window.jQuery = jQuery;
Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App),
  router: newrouter
})
