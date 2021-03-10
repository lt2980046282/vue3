import { createStore } from 'vuex'

export default createStore({
  state: {
    totle: 0
  },
  mutations: {
    totleFun (state, value) {
      state.totle = value
    }
  },
  actions: {
    totleFunAdd (context, value) {
      context.commit('totleFun', value + 1)
    },
    totleFunDel (context, value) {
      context.commit('totleFun', value - 1)
    }
  },
  modules: {
  }
})
