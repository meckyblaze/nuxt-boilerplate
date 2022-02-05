const state = () => ({
  user: ''
});

const getters = {
  user(state) {
    return state.user;
  }
};

const mutations = {
  USER(state, data) {
    state.user = data;
  }
};

const actions = {
  change({commit}, data) {
    commit('USER', data);
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};