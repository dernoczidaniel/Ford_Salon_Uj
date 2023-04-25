import { createStore } from 'vuex'
import Vuex from 'vuex';

export const store = new Vuex.Store({
  state: {
    selectedCar: {
      color: '',
      interiorColor: '',
    },
  },
  mutations: {
    setSelectedCar(state, selectedCar) {
      state.selectedCar.color = selectedCar.color;
      state.selectedCar.interiorColor = selectedCar.interiorcolor;
    },
<<<<<<< HEAD
=======
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
>>>>>>> 88d66d8825736fc64c1681c0b67f8fe8e5bccdae
  },
  actions: {
    initializeStore({ commit }) {
      // Az alkalmazás betöltésekor visszaállítjuk a store-ban tárolt adatokat a localStorage-ból
      if (localStorage.getItem('selectedCar')) {
        const selectedCar = JSON.parse(localStorage.getItem('selectedCar'));
        commit('setSelectedCar', selectedCar);
      }
    },
<<<<<<< HEAD
  },
});

=======
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

>>>>>>> 88d66d8825736fc64c1681c0b67f8fe8e5bccdae
export default store;

// Az alkalmazás betöltésekor inicializáljuk a store-t a localStorage-ból
store.dispatch('initializeStore');