import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    temporaryData:{},
  },
  //需要返回状态或者值
  getters: {
    getTemporaryData:function(state){
      return function (val) {
        return state.temporaryData;
      };
    },
  },
  mutations: {
    updateTemporaryData: function (state, data) {
      state.temporaryData = data ;
    },
  },
  actions:{
  }
});

