const state = {
  username: '',
  userId: -1
};

const getters = {
  getUsername(state) {
    return state.username;
  },
  getUserId(state) {
    return state.userId;
  }
};

const mutations = { //同步, 执行者
  currentUserName(state, username) {
    state.username = username;
  },
  currentUserId(state, userId) {
    state.userId = userId;
  }
};

const actions = { //决策者, 异步, 中转
  setcurrentUserName(context, username) {
    context.commit('currentUserName', username);
  },
  setcurrentUserId(context, userId) {
    context.commit('currentUserId', userId);
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};