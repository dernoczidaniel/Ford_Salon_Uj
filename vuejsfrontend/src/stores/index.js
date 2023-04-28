import Vuex from 'vuex';


const store = new Vuex.Store({
  state: {
    userIndex: 0, 
  },
  mutations: {
    setUser(state, userIndex) {
      state.userIndex = userIndex;
    },
  },
  actions: {
    async login({ commit }, { userid }) {
      try {
        const userIndex = await loginUser(userid);
        commit('setUser', userIndex);
      } catch (error) {
        console.error(error);
      }
    },
  },
});

export default store;