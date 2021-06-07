<template>
<div>
    <div class="appContent">
      <Banner v-bind:townName="townName"/>
    </div>
    <Search v-on:myevent="getApi" v-bind:state="state"/>
    <Content v-bind:infos="infos" v-bind:anim="anim" />
    <footer></footer>
</div>
</template>

<script>
import Banner from './components/Banner.vue'
import Search from './components/Search'
import Content from './components/Content.vue'
import axios from 'axios'

export default {
  name: 'App',
  components: {
    Search,
    Content,
    Banner
  },

  data(){
    return {
      townName: null,

      state: {
        recherche: false,
        error: null,
      },

      anim:{
        heightResult: 0
      },

      infos: []
    }
  },
  
  methods:{
    getApi(){
      const ville = document.getElementById('recherche').value
      axios({
        method: 'get',
        url: 'https://api.openweathermap.org/data/2.5/weather',
        params:{
          appid: "71cfa3ac7813f08dd0d1729429b85e23",
          q : ville,
          lang: "fr",
          units: "metric"
        }
      })
      .then(response =>{
        if(response.status === 200){
          this.townName = response.data.name
          this.$store.dispatch('setDataMutation', response.data)
          this.infos = this.$store.state.data
          this.state.recherche = true
          this.state.error = null
          this.getCssElem()
        }
      })
      .catch(error =>{
        this.state.error = error.message
      })
    },

    getCssElem : async function(){
      await this.$nextTick()
      const arrayElem = document.getElementsByClassName('content')

      this.anim.heightResult = document.getElementById('resultats').offsetHeight - arrayElem[0].offsetHeight
      const animTranslateY = 'translateY(-' + this.anim.heightResult + 'px)'

      if(arrayElem.length >= 2){
        arrayElem[arrayElem.length - 1].animate([
          { transform: animTranslateY },
          { transform: 'translateY(0px)' }
        ], {duration: 1500, easing: 'ease-in-out', fill: 'both' })

        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
      }
    }
  }
}
</script>

<style>
body{
  display: flex;
  justify-content: center;
}

#app {
  width: 1000px;
  max-width: 1000px;
  height: 800px;
  border: solid 2px grey;
  border-radius: 50px;
  background: linear-gradient(rgb(80, 212, 252), rgb(201, 235, 245));
  box-shadow: 0px 10px 13px -7px #000000;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.appContent{
  margin: 2rem;
}

footer{
  height: 8rem;
}
</style>
