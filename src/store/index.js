import Vue from "vue";
import Vuex from "vuex";
import type from '../commons/type';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: null,
    serverTime:null, //服务器时间
    rectoken:null, //前台token
  },
  mutations: {
    //后台登录
    login(state, payload) {
      state.token = payload;
    },
    //后台登出
    logout(state) {
      state.token = null;
    },
    //前台登录
    Reclogin(state, payload) {
      state.rectoken = payload;
    },
    //前台登出
    Reclogout(state) {
      state.rectoken = null;
    },
    //服务器时间存储
    saveServerTime(state, payload){
      state.serverTime=payload;
    }
  },
  actions: {
    
    login({ commit }, token) {
      localStorage.setItem(type.TOKEN,token);
      if (token && token !== "null") commit("login", token);
    },
    Reclogin({ commit }, rectoken) {
      localStorage.setItem(type.RECTOKEN,rectoken);
      if (rectoken && rectoken !== "null") commit("Reclogin", rectoken);
    },
    logout({ commit }) {
      localStorage.removeItem(type.TOKEN);
      localStorage.removeItem(type.USER);
      commit("logout");
    },
    Reclogout({ commit }) {
      localStorage.removeItem(type.RECTOKEN);
      localStorage.removeItem(type.RECUSER);
      commit("Reclogout");
    },
    saveServerTime({ commit },serverTime) {
      if (serverTime && serverTime !== "null") commit("saveServerTime", serverTime);
    },
  },
  modules: {}
});
