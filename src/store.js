import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    history: [],
    login_flag: false,
    current_line: "",
  },

  mutations: {
    increment(state) {
      state.count ++
    },
    loginCorrect(state) {
      state.login_flag = true;
    },
  },

  getters: {
    getLoginFlag: function(state) {
      return state.login_flag;
    },
  }
})
