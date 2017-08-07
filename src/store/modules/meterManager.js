const state = {
  meters: [],
  selectedMeter: null
};

const getters = {
  getMeters(state) {
    return state.meters;
  },
  getSelectedMeter(state) {
    return state.selectedMeter;
  }
};

const mutations = { //同步, 执行者
  metersLoader(state, meters) {
    state.meters = meters;
  },
  meterSelection(state, meter) {
    state.selectedMeter = meter;
  }
};

const actions = { //决策者, 异步, 中转
  loadMeters(context, meters) {
    context.commit('metersLoader', meters);
  },
  selectMeter(context, meter) {
    context.commit('meterSelection', meter);
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};