<template>
<div class="resultats" id="resultats">
  <div v-for="info of infos" class="content" :key="info.dt">
    <div v-if="info.weather[0].icon === iconList.snows.snow1 | info.weather[0].icon === iconList.snows.snow2" class="main">
      <Snow />
    </div>
    <div v-if="info.weather[0].icon === iconList.suns.sun1 | info.weather[0].icon === iconList.suns.sun2" class="main main--mod">
      <Sun />
    </div>
    <div v-if="info.weather[0].icon === iconList.mists.mist1 | info.weather[0].icon === iconList.mists.mist2" class="main">
      <Mist />
    </div>
    <div v-if="info.weather[0].icon === iconList.clouds.brokCloud1 | info.weather[0].icon === iconList.clouds.brokCloud2" class="main">
      <BrokClouds />
    </div>
    <div v-if="info.weather[0].icon === iconList.clouds.fewCloud1 | info.weather[0].icon === iconList.clouds.fewCloud2" class="main main--mod">
      <FewClouds />
    </div>
    <div v-if="info.weather[0].icon === iconList.rains.rain1 | info.weather[0].icon === iconList.rains.rain2" class="main">
      <Rain />
    </div>
    <div v-if="info.weather[0].icon === iconList.clouds.scatCloud1 | info.weather[0].icon === iconList.clouds.scatCloud2" class="main">
      <ScatClouds />
    </div>
    <div v-if="info.weather[0].icon === iconList.rains.showRain1 | info.weather[0].icon === iconList.rains.showRain2" class="main">
      <ShowRain />
    </div>
    <div v-if="info.weather[0].icon === iconList.rains.thunder1 | info.weather[0].icon === iconList.rains.thunder2" class="main">
      <ThunderStorm />
    </div>

    <div class="data">
      <div class="data__condition">

        <div class="condition">
          <h3>Conditions</h3>
          <p>{{info.weather[0].description}}</p>
          <p v-if="info.rain">{{info.rain}}</p>
          <p >visibilité {{info.visibility}}</p>
          <p>humidité {{info.main.humidity}} %</p>
          <p>pression atmosphérique {{info.main.pressure}} hPa</p>
          <p>lever du soleil {{info.sys.sunrise}}</p>
          <p>coucher de soleil {{info.sys.sunset}}</p>
        </div>

        <div class="title">
          <h2>{{info.name}} {{info.sys.country}}</h2> 
          <cite>(Maj {{info.dt}})</cite>
        </div>

        <div class="condition temp">
          <h3>Températures</h3>
          <p>moyenne {{info.main.temp}} °</p>
          <p>mini {{info.main.temp_min}} °</p>
          <p>max {{info.main.temp_max}} °</p>
          <p>ressentit {{info.main.feels_like}} °</p>
        </div>
      </div>


      <div class="condition vent">
        <h3>Vent</h3>
        <p>direction {{info.wind.deg}}</p>
        <p>{{info.wind.speed}} m/s</p>
      </div>
    </div>
  </div>
</div>
</template>

<script>

import Snow from './animations/Snow'
import Sun from './animations/Sun'
import Mist from './animations/Mist'
import BrokClouds from './animations/BrokClouds'
import FewClouds from './animations/FewClouds'
import Rain from './animations/Rain'
import ScatClouds from './animations/ScatClouds'
import ShowRain from './animations/ShowRain'
import ThunderStorm from './animations/ThunderStorm'

export default {
  name: 'Content',
  components:{
    Snow,
    Sun,
    Mist,
    BrokClouds,
    FewClouds,
    Rain,
    ScatClouds,
    ShowRain,
    ThunderStorm
  },

  props: {
    anim: Object,
    infos: Array
  },

  data(){
    return {
      iconList: {
        suns:{
          sun1: "01d",
          sun2: "01n"
        },

        clouds:{
          fewCloud1: "02d",
          fewCloud2: "02n",

          scatCloud1: "03d",
          scatCloud2: "03n",

          brokCloud1: '04d',
          brokCloud2: '04n',
        },

        rains:{
          showRain1: "09d",
          showRain2: "09n",

          rain1: "10d",
          rain2: "10n",

          thunder1: "11d",
          thunder2: "11n"
        },

        snows: {
          snow1: '13d',
          snow2: '13n'
        },

        mists: {
          mist1: '50d',
          mist2: '50n'
        }

      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.resultats{
  position: relative;
}

.content{
  position: relative;
  width: 100%;
  height: 40rem;
  margin-bottom: 3rem;
  border: solid 2px grey;
  border-radius: 50px;
  background: linear-gradient(rgb(80, 212, 252), rgb(201, 235, 245));
  box-shadow: 0px 10px 13px -7px #000000;
  transform-origin: top;
}

.main{
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 600px;
  margin-top: 4rem;
  overflow: hidden;
  opacity: 0.6;
}

.main--mod{
  margin-top: unset;
}

.title{
  display: flex;
  flex-direction: row;
  align-items: baseline;
}

.data{
  width: 100%;
  position: absolute;
  display: flex;
  flex-direction: column;
}

.data__condition{
  width: 90%;
  display: flex;
  justify-content: space-between;
  margin: auto;
}

.condition{
  width: 30%;
  height: fit-content;
  margin-top: 4rem;
  background-color: white;
  border: solid 2px grey;
  border-radius: 50px;
  box-shadow: 0px 10px 13px -7px #000000;
  text-align: center;
}

.vent{
  margin-top: 8rem;
  align-self: center;
}
</style>
