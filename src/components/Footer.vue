<template>
    <footer>
        <div>
            <p>With love</p>
            <i class="fas fa-heart heart"></i>
        </div>

        <div class="initiales">
            <p>C.C</p>
        </div>

        <div>
            <p>Open Weather</p>
            <img class="weatherIcon" src="../assets/weather_icon.png" alt="">
        </div>

        <div>
            <p>VueJs</p>
            <i class="fab fa-vuejs vueJs"></i>        
        </div>
        <a id='arrowTop' class="stickBottom" v-on:click.prevent="scrollTop">
            <i class="fas fa-caret-square-up"></i>
        </a>
    </footer>
</template>

<script>
export default {
    methods:{
        scrollTop(){
             window.scrollTo({ top: 0, behavior: 'smooth' })
        }
    }
}
</script>

<style scoped>

@keyframes beat {
    0%{
        transform: scale(1);
    }

    40%{
        transform: scale(1.5);
    }

    50%{
        transform: scale(1.3);
    }

    60%{
        transform: scale(1.5);
    }

    100%{
        transform: scale(1);
    }
}

.heart{
    color: red;
    margin: 1rem;
    font-size: 20px;
    transform-origin: center;
    animation: beat 1.5s ease-in-out infinite;
}

.initiales{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 2rem;
    width: 3rem;
    border-radius: 10px;
    border: solid 2px rgb(0, 195, 255)
}

.initiales > p{
    margin: unset;
}

.vueJs{
    font-size: 30px;
    color: #41B883;
}

.weatherIcon{
    width: 40px;
    border-radius: 20px;
}

footer > div{
    display: flex;
    align-items: center;
}

.stickBottom{
    position: fixed;
    display: none;
    bottom: 5%;
    right: 15%;
    font-size: 50px;
    color: rgb(80, 212, 252);
    cursor: pointer;
    transition: transform 0.3s;
}

.stickBottom:hover{
    transform: scale(1.3);
}

footer{
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    width: 59%;
    max-width: 1000px;
    height: 4rem;
    bottom: 0px;
    background: linear-gradient(rgb(201, 235, 245), white);
    border-top-right-radius: 50px;
    border-top-left-radius: 50px;
    border: solid 2px grey;
    box-shadow: 0px -5px 13px -7px #000000;
}

@media (max-width: 1200px) {
    footer{
        width: 69%;
    }

    .stickBottom{
        right: 5%;
    }
}

@media (max-width: 768px) {
    footer{
        width: 83%;
    }

    .stickBottom{
        right: 0;
        bottom: 0;
    }

    .stickBottom:hover{
        transform: unset;
    }
}

@media (max-width: 600px) {
    footer{
        width: 85%;
        height: 3rem;
        left: 8%;
        border-top-right-radius: 20px;
        border-top-left-radius: 20px;
    }

    footer > div > p{
        font-size: 0.6rem;
    }

    .heart{
        margin: 5px;
    }

    .initiales{
        height: 1rem;
        width: 2rem;
    }

    .stickBottom {
        font-size: 30px;
        bottom: -18px;
    }
}
</style>