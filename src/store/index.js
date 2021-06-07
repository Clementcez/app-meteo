import { createStore } from 'vuex'

export default createStore({
  state: {
    data: []
  },
  getters: {
  },
  mutations: {
    setData(state, nouvelleValeur){
      state.data.push(nouvelleValeur)
    }
  },
  actions: {
    setDataMutation({commit}, dataBrut){

      const maj = new Date(dataBrut.dt * 1000)
      const heures = maj.getHours() >= 10 ? maj.getHours() : ('0' + maj.getHours())
      const minutes = maj.getMinutes() >= 10 ? maj.getMinutes() : ('0' + maj.getMinutes())
      dataBrut.dt = heures + ':' + minutes

      if(dataBrut.visibility >= 5000){
        dataBrut.visibility = 'bonne'
      }
      else if(dataBrut.visibility <= 5000 & dataBrut.visibility >= 2000){
        dataBrut.visibility = 'moyenne'
      }
      else if(dataBrut.visibility <= 2000 & dataBrut.visibility >= 500){
        dataBrut.visibility = 'mauvaise'
      }
      else if(dataBrut.visibility <= 500){
        dataBrut.visibility = 'très mauvaise'
      }

      const rise = new Date(dataBrut.sys.sunrise * 1000)
      const down = new Date(dataBrut.sys.sunset * 1000)
      const riseHeures = rise.getHours() >= 10 ? rise.getHours() : ('0' + rise.getHours())
      const riseMinutes = rise.getMinutes() >= 10 ? rise.getMinutes() : ('0' + rise.getMinutes())
      const downHeures = down.getHours() >= 10 ? down.getHours() : ('0' + down.getHours())
      const downMinutes = down.getMinutes() >= 10 ? down.getMinutes() : ('0' + down.getMinutes())
      dataBrut.sys.sunrise = riseHeures + ":" + riseMinutes
      dataBrut.sys.sunset = downHeures + ":" + downMinutes

      if(dataBrut.wind.deg >= 337.5 | dataBrut.wind.deg <= 22.5){
        dataBrut.wind.deg = 'Nord'
      }
      else if(dataBrut.wind.deg >= 22.5 & dataBrut.wind.deg <= 67.5){
        dataBrut.wind.deg = 'Nord-Est'
      }
      else if(dataBrut.wind.deg >= 67.5 & dataBrut.wind.deg <= 112.5){
        dataBrut.wind.deg = 'Est'
      }
      else if(dataBrut.wind.deg >= 112.5 & dataBrut.wind.deg <= 157.5){
        dataBrut.wind.deg = 'Sud-Est'
      }
      else if(dataBrut.wind.deg >= 157.5 & dataBrut.wind.deg <= 202.5){
        dataBrut.wind.deg = 'Sud'
      }
      else if(dataBrut.wind.deg >= 202.5 & dataBrut.wind.deg <= 247.5){
        dataBrut.wind.deg = 'Sud-Ouest'
      }
      else if(dataBrut.wind.deg >= 247.5 & dataBrut.wind.deg <= 292.5){
        dataBrut.wind.deg = 'Ouest'
      }
      else if(dataBrut.wind.deg >= 292.5 & dataBrut.wind.deg <= 337.5){
        dataBrut.wind.deg = 'Nord-Ouest'
      }

      commit('setData', dataBrut)
    }
  },
  modules: {
  }
})
