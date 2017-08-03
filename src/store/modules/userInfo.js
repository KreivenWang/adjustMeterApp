const state = {
  userName: '',
  platUrl: ''
};

const getters = {
  getUserName(state) {
    return state.userName;
  },
  getPlatUrl(state) {
    return state.platUrl;
  }
};

const mutations = { //同步, 执行者
  platUrlModification(state, platInfo) {
    state.platUrl = `http://${platInfo.address}:${platInfo.port}`;
  }
};

const actions = { //决策者, 异步, 中转
  modifyPlatUrl(context, platInfo) {
    context.commit('platUrlModification', platInfo);
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};