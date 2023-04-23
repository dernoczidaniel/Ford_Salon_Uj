
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
    }
  },
  getters: {
    color: state => state.color,
    interiorcolor: state => state.interiorcolor,
    model: state => state.model,
    extras: state => state.extras,
    Price: state => state.Price,

  },
  actions: {
    setColor(context, color) {
      console.log('New color:', color); // logoljuk az új színt
      context.commit('setColor', color);
    },
    setUser({ commit }, user) {
      commit('setUser', user);
    }
  }
});

export default store;