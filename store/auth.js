const state = () => ({
  user: 'Emmanuel'
});

const getters = {
  user(state) {
    return state.user;
  }
};

const mutations = {};

const actions = {};

export default {
  state,
  getters,
  mutations,
  actions
};