
import { createStore } from 'vuex'
import Vuex from 'vuex';

export const store = new Vuex.Store({
  state: {
    id: '0',
    model: 'Mustang',
    color: 'fehér',
    interiorcolor: 'fehér',
    extras: ['nincs'],
    Price: '0',
    user: {}
  },
  mutations: {
    setColor(state, color) {
      state.color = color;
    },
    setUser(state, user) {
      state.user = user;
      // localStorage.setItem('user', JSON.stringify(user));
    },
    // initializeStore(state) {
    //   const user = localStorage.getItem('user');
    //   if (user) {
    //     state.user = JSON.parse(user);
    //   }
    // }
  },
  getters: {
    color: state => state.color,
    interiorcolor: state => state.interiorcolor,
    model: state => state.model,
    extras: state => state.extras,
    Price: state => state.Price,
    // user(state) {
    //   return state.user;
    // } // adja hozzá a user objektumot a getterekhez
  },
  actions: {
    setColor(context, color) {
      console.log('New color:', color);
      context.commit('setColor', color);
    },
    setUser({ commit }, user) {
      commit('setUser', user);
    },
    // initializeStore(context) {
    //   context.commit('initializeStore');
    // }
  }
});

// Az alkalmazás betöltésekor inicializáljuk a store-t a localStorage-ból
// store.dispatch('initializeStore');

export default store;
