const state = {
  user: ''
};

const getters = {
  getUser(state) {
    return state.user;
  }
};

const mutations = { //同步, 执行者
  currentUser(state, user) {
    state.user = user;
  }
};

const actions = { //决策者, 异步, 中转
  setCurrentUser(context, user) {
    context.commit('currentUser', user);
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};