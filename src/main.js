import Vue from 'nativescript-vue';

import router from './router';

import store from './store';

import './styles.scss';
Vue.registerElement("Mapbox", () => require("nativescript-mapbox").MapboxView)
// Uncomment the following to see NativeScript-Vue output logs
Vue.config.silent = false;

new Vue({

  router,

  store,

}).$start();
