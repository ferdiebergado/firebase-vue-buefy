import Vue from 'vue';
import Vuex from 'vuex';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import router from '@/router';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    appTitle: 'Vue Firebase SPA',
    author: 'Ferdinand Saporas Bergado',
    user: null,
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
  },
  actions: {
    signOut({ commit }) {
      firebase.auth().signOut().then(() => {
        // Sign-out successful.
        commit('setUser', null);
        router.push('/login');
        console.log('Signed out successfully.');
      }).catch((error) => {
        // An error happened.
        console.log(error);
      });
    },
  },
});
