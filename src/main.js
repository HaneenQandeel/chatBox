import Vue from 'vue';
import App from './App.vue';
import Vuelidate from 'vuelidate';
import firebase from 'firebase';
import router from './router';
Vue.use(Vuelidate)
Vue.config.productionTip = false


let app;
firebase.auth().onAuthStateChanged(function() {
  if (!app) {
    /* eslint-disable no-new */
    app = new Vue({
      render: h => h(App),
      router,
      components: { App }
    }).$mount('#app')
  }
});