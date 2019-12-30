import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    login_user: null,
    drawer: false,
    addresses: []
  },
  mutations: {
      //mutationのメソッドには自動でstateの値が渡ってくる。
      //component向けのIFとなる部分がactionで、必要に応じて
      // componentからtoggles sideメニューを実行することで
      // drawerの更新を依頼する。
      // 呼び出されたactionはコミットメソッドを実行して
      // 値を更新する、,utationを呼び出す。
      // 呼び出されたmutationはstateの値を更新する。

    setLoginUser (state, user) {
      state.login_user = user
    },
    deleteLoginUser (state) {
      state.login_user = null
    },
    toggleSideMenu (state) {
      state.drawer = !state.drawer
    },
    addAddress (state, address) {
      state.addresses.push(address)
    }
  },
  actions: {
    setLoginUser ({ commit }, user) {
      commit('setLoginUser', user)
    },
    login () {
      const google_auth_provider = new firebase.auth.GoogleAuthProvider()
      firebase.auth().signInWithRedirect(google_auth_provider)
    },
    logout () {
      firebase.auth().signOut()
    },
    deleteLoginUser ({ commit }) {
      commit('deleteLoginUser')
    },
    toggleSideMenu ({ commit }) {
      commit('toggleSideMenu')
    },
    addAddress ({ commit }, address) {
      commit('addAddress', address)
    }
  }
})
