<template>
  <div class="appContent">
    <Banner v-bind:name="info.name"/>
    <Search v-on:myevent="getApi"/>
    <Content v-bind:info="info" />
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
      info: {
        name: null
      }
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
          this.info = response.data
          console.log(this.info)
          this.convertVisibility(response.data.visibility)
          this.convertDate(response.data.sys.sunrise, response.data.sys.sunset)
          this.convertWind(response.data.wind.deg)
        }
      })
    },

    convertVisibility(visibility){
      if(visibility >= 5000){
        this.info.visibility = 'bonne'
      }
      else if(visibility <= 5000 & visibility >= 2000){
        this.info.visibility = 'moyenne'
      }
            else if(visibility <= 2000 & visibility >= 500){
        this.info.visibility = 'mauvaise'
      }
            else if(visibility <= 500){
        this.info.visibility = 'très mauvaise'
      }
    },

    convertDate(sunrise, sunset){
      const rise = new Date(sunrise * 1000)
      const down = new Date(sunset * 1000)
      this.info.sys.sunrise = rise.getHours() + ":" + rise.getMinutes()
      this.info.sys.sunset = down.getHours() + ":" + down.getMinutes()
    },

    convertWind(deg){
      if(deg >= 337.5 & deg <= 22.5){
        this.info.wind.deg = 'Nord'
      }
      else if(deg >= 22.5 & deg <= 67.5){
        this.info.wind.deg = 'Nord-Est'
      }
      else if(deg >= 67.5 & deg <= 112.5){
        this.info.wind.deg = 'Est'
      }
      else if(deg >= 112.5 & deg <= 157.5){
        this.info.wind.deg = 'Sud-Est'
      }
      else if(deg >= 157.5 & deg <= 202.5){
        this.info.wind.deg = 'Sud'
      }
      else if(deg >= 202.5 & deg <= 247.5){
        this.info.wind.deg = 'Sud-Ouest'
      }
      else if(deg >= 247.5 & deg <= 292.5){
        this.info.wind.deg = 'Ouest'
      }
      else if(deg >= 292.5 & deg <= 337.5){
        this.info.wind.deg = 'Nord-Ouest'
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
  background-color: rgb(201, 235, 245);
  box-shadow: 0px 10px 13px -7px #000000;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

.appContent{
  margin: 2rem;
}
</style>
