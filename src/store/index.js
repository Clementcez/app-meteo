import { createStore } from 'vuex'

export default createStore({
  state: {
    nFromVuex: 0
  },
  mutations: {
    blabla(state, nouvelleValeur){
      state.nFromVuex = nouvelleValeur
    }
  },
  actions: {
  },
  modules: {
  }
})
