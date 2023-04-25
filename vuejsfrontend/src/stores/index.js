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
  },
  actions: {
    initializeStore({ commit }) {
      if (localStorage.getItem('selectedCar')) {
        const selectedCar = JSON.parse(localStorage.getItem('selectedCar'));
        commit('setSelectedCar', selectedCar);
      }
    },
  },
});

