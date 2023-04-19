import { createStore } from 'vuex';


const store = createStore({
  state: {
    user: {}
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    }
  },
  actions: {
    setUser({ commit }, user) {
      commit('setUser', user);
    }
  },
  getters: {
    user: state => state.user
  }
});

export default store;
