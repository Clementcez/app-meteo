<template>
<div>
    <div class="appContent">
      <Banner />
    </div>
    <Search v-on:myevent="getApi" v-bind:state="state"/>
    <Content v-bind:infos="infos" />
    <MenuAncre v-bind:infos="infos" />
    <div class="miseEnPage"></div>
    <Footer />
</div>
</template>

<script>
import Banner from './components/Banner.vue'
import Search from './components/Search'
import Content from './components/Content.vue'
import MenuAncre from './components/MenuAncre.vue'
import Footer from './components/Footer.vue'
import axios from 'axios'

export default {
  name: 'App',
  components: {
    Search,
    Content,
    MenuAncre,
    Banner,
    Footer
  },

  data(){
    return {
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

  mounted () {
    window.addEventListener('scroll', this.handleScroll);
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
      const arrayAncre = document.getElementsByClassName('lienAncre')

      const heightAncre = document.getElementById('menuAncre').offsetHeight - arrayAncre[0].offsetHeight
      const animAncreTranslateY = 'translateY(' + heightAncre + 'px)'

      this.anim.heightResult = document.getElementById('resultats').offsetHeight - arrayElem[0].offsetHeight
      const animTranslateY = 'translateY(-' + this.anim.heightResult + 'px)'

      if(arrayAncre.length >= 2 && arrayAncre.length < 12){
        arrayAncre[arrayAncre.length - 1].animate([
          { transform: animAncreTranslateY },
          { transform: 'translateY(0px)' }
        ], {duration: 500, easing: 'ease-in-out', fill: 'both' })
      }

      if(arrayAncre.length >= 12){
        const overFlow = document.getElementById('overFlow')
        overFlow.classList.add('overFlow')
      }

      if(arrayElem.length >= 2){
        arrayElem[arrayElem.length - 1].animate([
          { transform: animTranslateY, opacity: 0 },
          { transform: 'translateY(0px)', opacity: 1 }
        ], {duration: 1000, easing: 'ease-in-out', fill: 'both' })

        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
      }
      else{
        window.scrollTo({ top: 400, behavior: 'smooth' })
      }
    },

    handleScroll(){
      const arrowTop = document.getElementById("arrowTop");

      if(window.scrollY > 300){
        arrowTop.style.display = "block";
      }
      else{
        arrowTop.style.display = "none";
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

a{
  text-decoration: none;
}

#app {
  width: 60%;
  max-width: 1000px;
  height: 800px;
  border: solid 2px grey;
  border-radius: 50px;
  background: linear-gradient(rgb(80, 212, 252), rgb(201, 235, 245));
  box-shadow: 0px 10px 13px -7px #000000;
  font-family: 'Lemonada', cursive, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.appContent{
  margin: 2rem;
}

.miseEnPage{
  width: 100%;
  height: 5rem;
}

@media (max-width: 1200px) {
    #app{
      width: 70%;
    }
}

@media (max-width: 1024px) {
    #app{
      width: 70%;
      font-size: 0.8rem;
    }
}

@media (max-width: 768px) {
    #app{
      width: 85%;
    }
}

@media (max-width: 600px) {
    body{
      margin: unset;
    }

    #app{
      min-height: 100vh;
      width: 100%;
      border: unset;
      border-radius: unset;
      box-shadow: unset;
    }

    .miseEnPage{
      height: 2rem;
    }
}
</style>
