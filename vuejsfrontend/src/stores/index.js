
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
    user: []
  },
  mutations: {
    setColor(state, color) {
      state.color = color;
    },
    setUser(state, user) {
      state.user = user;
    }
  },
  getters: {
    color: state => state.color,
    interiorcolor: state => state.interiorcolor,
    model: state => state.model,
    extras: state => state.extras,
    Price: state => state.Price,
    user: state => state.user // adja hozzá a user objektumot a getterekhez
  },
  actions: {
    setColor(context, color) {
      console.log('New color:', color);
      context.commit('setColor', color);
    },
    setUser({ commit }, user) {
      commit('setUser', user);
    }
  }
});

// hozzáadás a state-hez
store.dispatch('setUser', { 
  name: 'John Doe', 
  email: 'johndoe@example.com', 
  age: 30 
});

export default store;
