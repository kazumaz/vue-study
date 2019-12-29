import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawer: false
  },
  mutations: {
    //mutationのメソッドには自動でstateの値が渡ってくる。
    //component向けのIFとなる部分がactionで、必要に応じて
    // componentからtoggles sideメニューを実行することで
    // drawerの更新を依頼する。
    // 呼び出されたactionはコミットメソッドを実行して
    // 値を更新する、,utationを呼び出す。
    // 呼び出されたmutationはstateの値を更新する。
    toggleSideMenu(state){
      state.drawer = !state.drawer
    }
  },
  // compo
  actions: {
    toggleSideMenu({ commit }) {
      commit('toggleSideMenu')
    }

  },
  modules: {
  }
})
