import Navbar from 'buefy/dist/components/navbar';
import Button from 'buefy/dist/components/button';
import Field from 'buefy/dist/components/field';
import Input from 'buefy/dist/components/input';
import './assets/scss/app.scss';
import '@mdi/font/css/materialdesignicons.css';

// import * as firebase from 'firebase/app';

import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// import firebaseConfig from './firebase.config';

Vue.config.productionTip = false;

// firebase.initializeApp(firebaseConfig);

Vue.use(Navbar);
Vue.use(Button);
Vue.use(Field);
Vue.use(Input);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
