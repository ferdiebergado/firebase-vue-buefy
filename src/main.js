import Navbar from 'buefy/dist/components/navbar';
import Button from 'buefy/dist/components/button';
import Field from 'buefy/dist/components/field';
import Input from 'buefy/dist/components/input';
import './assets/scss/app.scss';
import '@mdi/font/css/materialdesignicons.css';

import * as firebase from 'firebase/app';
import 'firebase/auth';

import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import firebaseConfig from './firebase.config';

Vue.config.productionTip = false;

firebase.initializeApp(firebaseConfig);

Vue.use(Navbar);
Vue.use(Button);
Vue.use(Field);
Vue.use(Input);

const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
  new Vue({
    router,
    store,
    render: h => h(App),
    created() {
      if (user) {
        // User is signed in.
        store.commit('setUser', user.email);
      }
    },
  }).$mount('#app');
  unsubscribe();
});
