const state = {
  title: ''
};

const getters = {
  getTitle(state) {
    return state.title;
  }
};

const mutations = { //同步, 执行者
  titleModification(state, title) {
    state.title = title;
  }
};

const actions = { //决策者, 异步, 中转
  modifyTitle(context, title) {
    context.commit('titleModification', title);
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};